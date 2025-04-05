// src/services/scoreService.ts
import { PrismaClient, ValidationStatus } from "@prisma/client";

const prisma = new PrismaClient();

// Fator que define o impacto de cada issue na porção de 50 pontos da avaliação.
const ISSUE_WEIGHT_FACTOR = 10;

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
  // Buscar a notícia, incluindo validações, issues e a thread associada.
  const news = await prisma.news.findUnique({
    where: { id: newsId },
    include: {
      validations: {
        include: { validatedBy: true },
      },
      issues: true,
      thread: true,
    },
  });

  if (!news) {
    console.error("News not found for id:", newsId);
    return;
  }

  const { threadId, authorId } = news;

  // Obter todas as validações de notícias na mesma thread para determinar o score máximo entre os avaliadores.
  const validationsInThread = await prisma.validation.findMany({
    where: { news: { threadId } },
    include: { validatedBy: true },
  });

  // Determinar o score máximo entre os avaliadores desta thread.
  let maxEvaluatorScore = 0;
  for (const val of validationsInThread) {
    const evaluatorScore = val.validatedBy ? val.validatedBy.score : 0;
    if (evaluatorScore > maxEvaluatorScore) {
      maxEvaluatorScore = evaluatorScore;
    }
  }
  if (maxEvaluatorScore === 0) {
    maxEvaluatorScore = 1; // Evitar divisão por zero.
  }

  // Calcular os pesos das validações para esta notícia.
  let weightedAccepted = 0;
  let weightedRejected = 0;
  for (const val of news.validations) {
    const evaluatorScore = val.validatedBy ? val.validatedBy.score : 0;
    const weight = evaluatorScore / maxEvaluatorScore; // Peso na escala de 0 a 1.
    if (val.status === ValidationStatus.accepted) {
      weightedAccepted += weight;
    } else if (val.status === ValidationStatus.rejected) {
      weightedRejected += weight;
    }
    // Validações "pending" são ignoradas.
  }

  // Se não houver validações, assume-se um valor neutro de 50% para essa porção.
  let evaluationPercentage = 0.5;
  const totalWeighted = weightedAccepted + weightedRejected;
  if (totalWeighted > 0) {
    evaluationPercentage = weightedAccepted / totalWeighted;
  }
  const evaluationComponent = evaluationPercentage * 50; // 50 pontos disponíveis.

  // Calcular a porção referente às issues.
  const totalIssueWeight = news.issues.length; // Cada issue tem peso 1.
  const issuesComponent = Math.max(
    0,
    50 - ISSUE_WEIGHT_FACTOR * totalIssueWeight
  );

  // ValidationScore total (escala de 0 a 100).
  const totalValidationScore = Math.min(
    100,
    evaluationComponent + issuesComponent
  );

  // Atualizar o validationScore da notícia.
  await prisma.news.update({
    where: { id: newsId },
    data: { validationScore: totalValidationScore },
  });

  // Determinar o incremento (ou decremento) do score do autor com base nos thresholds.
  let userScoreIncrement = 0;
  if (totalValidationScore >= 85) {
    userScoreIncrement = 50;
  } else if (totalValidationScore >= 75) {
    userScoreIncrement = 25;
  } else if (totalValidationScore >= 65) {
    userScoreIncrement = 5;
  } else if (totalValidationScore >= 50) {
    userScoreIncrement = 0;
  } else if (totalValidationScore >= 20) {
    userScoreIncrement = -25;
  } else {
    // totalValidationScore < 20
    userScoreIncrement = -50;
  }

  // Registrar ou atualizar o histórico na tabela ScoreHistory.
  const existingHistory = await prisma.scoreHistory.findUnique({
    where: { newsId },
  });

  if (existingHistory) {
    await prisma.scoreHistory.update({
      where: { newsId },
      data: {
        validationScore: totalValidationScore,
        scoreIncrement: userScoreIncrement,
      },
    });
  } else {
    await prisma.scoreHistory.create({
      data: {
        newsId,
        userId: authorId,
        validationScore: totalValidationScore,
        scoreIncrement: userScoreIncrement,
      },
    });
  }

  // Recalcular o score do usuário com base em todos os registros de ScoreHistory.
  await recalcUserScore(authorId);

  console.log(
    `News ${newsId} updated: validationScore=${totalValidationScore}, scoreIncrement=${userScoreIncrement}`
  );
}
