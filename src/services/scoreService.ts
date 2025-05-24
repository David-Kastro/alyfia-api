// src/services/scoreService.ts
import { PrismaClient, ValidationStatus } from "@prisma/client";

const prisma = new PrismaClient();

// Fator que define o impacto de cada issue na porção de 50 pontos da avaliação.
const ISSUE_WEIGHTS: Record<string, number> = {
  bias: 8,
  subjectivity: 5,
  contradiction: 10,
  ad: 6,
  opinion: 7,
  sentiment_bias: 5,
  false_fact: 15,
  off_topic: 4,
};

/**
 * Recalcula o score do usuário com base na soma dos scoreIncrement de todas as entradas de ScoreHistory.
 * Atualiza o campo 'score' do usuário com o valor total calculado.
 * @param userId ID do usuário cujo score deve ser recalculado.
 */
export async function recalcUserScore(userId: string): Promise<void> {
  const scoreHistoryRecords = await prisma.scoreHistory.findMany({
    where: { userId },
  });

  const totalIncrement = scoreHistoryRecords.reduce(
    (acc, record) => acc + record.scoreIncrement,
    0
  );

  // Atualiza o score do usuário com o total acumulado
  await prisma.user.update({
    where: { id: userId },
    data: { score: totalIncrement },
  });
}

/**
 * Atualiza o validationScore da notícia e registra (ou atualiza) o histórico de score (ScoreHistory).
 * Após, recalcula o score total do autor com base na tabela ScoreHistory.
 *
 * A lógica:
 *  - A parte das avaliações (validações) corresponde a 50 pontos, ponderada pelo peso (de 0 a 1) de cada avaliação.
 *  - A parte das issues corresponde a 50 pontos, iniciando em 50 e subtraindo ISSUE_WEIGHT_FACTOR por cada issue.
 *  - O total (0 a 100) determina o incremento/decremento do score do autor:
 *      - >= 85: +50
 *      - >= 75: +25
 *      - >= 65: +5
 *      - >= 50: 0
 *      - >= 20: -25
 *      - < 20: -50
 *
 * Em seguida, o registro na tabela ScoreHistory (único para a notícia) é criado ou atualizado,
 * e o score do autor é recalculado com base em todas as entradas de ScoreHistory.
 *
 * @param newsId ID da notícia a ser atualizada.
 */
export async function updateScoresForNews(newsId: string): Promise<void> {
  const news = await prisma.news.findUnique({
    where: { id: newsId },
    include: {
      validations: { include: { validatedBy: true } },
      issues: true,
    },
  });

  if (!news) return;

  // Pontuação baseada em validações ponderadas pelo score dos usuários
  const maxValidatorScore = Math.max(...news.validations.map(v => v.validatedBy.score), 1);
  const acceptedWeight = news.validations
    .filter(v => v.status === ValidationStatus.accepted)
    .reduce((sum, v) => sum + (v.validatedBy.score / maxValidatorScore), 0);
  const rejectedWeight = news.validations
    .filter(v => v.status === ValidationStatus.rejected)
    .reduce((sum, v) => sum + (v.validatedBy.score / maxValidatorScore), 0);

  const totalValidations = acceptedWeight + rejectedWeight;
  const validationScore = totalValidations
    ? (acceptedWeight / totalValidations) * 50
    : 25; // Se não houver validações, valor neutro (25)

  // Pontuação baseada em issues com pesos personalizados
  const issueScore = Math.max(0, 50 - news.issues.reduce(
    (sum, issue) => sum + (ISSUE_WEIGHTS[issue.type] || 5), 0
  ));

  const finalScore = Math.round(validationScore + issueScore);

  await prisma.news.update({
    where: { id: newsId },
    data: { validationScore: finalScore },
  });

  // Recalcula score do autor da notícia
  const userScoreIncrement = finalScore >= 85 ? 50 :
                             finalScore >= 75 ? 25 :
                             finalScore >= 65 ? 5 :
                             finalScore >= 50 ? 0 :
                             finalScore >= 20 ? -25 : -50;

  await prisma.scoreHistory.upsert({
    where: { newsId },
    update: { validationScore: finalScore, scoreIncrement: userScoreIncrement },
    create: {
      newsId,
      userId: news.authorId,
      validationScore: finalScore,
      scoreIncrement: userScoreIncrement,
    },
  });

  await recalcUserScore(news.authorId);
}
