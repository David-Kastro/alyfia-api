// src/services/validationService.ts
import { PrismaClient, ValidationStatus } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Atribui solicitações de validação social para uma notícia recém-criada.
 *
 * Estratégia:
 *  - Busca os inscritos na thread (assumindo que existe a tabela ThreadSubscription)
 *  - Ordena os usuários por score (decrescente)
 *  - Se o total de inscritos (T) for >= 10, seleciona os top 10% (caso contrário, usa todos)
 *  - Define o número de solicitações como: max(ceil(30% de T), 3), limitado ao total de inscritos
 *  - Realiza sorteio entre os elegíveis e cria registros na tabela Validation com status 'pending'
 *
 * @param newsId ID da notícia recém-criada
 */
export async function assignValidationRequests(newsId: string): Promise<void> {
  // Buscar a notícia para obter a threadId
  const news = await prisma.news.findUnique({
    where: { id: newsId },
    select: { threadId: true },
  });

  if (!news) {
    console.error("Notícia não encontrada para id:", newsId);
    return;
  }

  const threadId = news.threadId;

  // Buscar os inscritos na thread (assumindo a existência de ThreadSubscription)
  const subscriptions = await prisma.threadSubscription.findMany({
    where: { threadId },
    include: {
      user: true,
    },
  });

  const totalSubscribers = subscriptions.length;
  if (totalSubscribers === 0) {
    console.log("Nenhum usuário inscrito na thread para atribuir validações.");
    return;
  }

  // Ordenar os inscritos por score (decrescente)
  const subscribersOrdered = subscriptions.sort(
    (a, b) => b.user.score - a.user.score
  );

  // Determinar a lista elegível: se totalSubscribers >= 10, pega os top 10%; senão, usa todos
  let eligibleUsers;
  if (totalSubscribers >= 10) {
    const topCount = Math.ceil(0.1 * totalSubscribers);
    eligibleUsers = subscribersOrdered.slice(0, topCount);
  } else {
    eligibleUsers = subscribersOrdered;
  }

  // Número de solicitações: no mínimo 3 ou 30% dos inscritos, limitado ao total
  const numToRequest = Math.min(
    totalSubscribers,
    Math.max(Math.ceil(0.3 * totalSubscribers), 3)
  );

  // Se a lista elegível for menor que o necessário, usar a lista completa de inscritos
  const pool =
    eligibleUsers.length >= numToRequest ? eligibleUsers : subscribersOrdered;

  // Realizar sorteio aleatório entre os usuários do pool
  const selectedUsers = randomSelection(pool, numToRequest);

  // Para cada usuário selecionado, criar um registro de Validation com status 'pending'
  for (const sub of selectedUsers) {
    await prisma.validation.create({
      data: {
        news: { connect: { id: newsId } },
        validatedBy: { connect: { id: sub.user.id } },
        info: "Solicitação de validação social",
        isCorrectionSuggestion: false,
        status: ValidationStatus.pending,
      },
    });
  }

  console.log(
    `Atribuição de validação: ${selectedUsers.length} solicitações criadas para a notícia ${newsId}.`
  );
}

/**
 * Função auxiliar para realizar uma seleção aleatória de N itens de uma lista.
 * @param pool Lista de itens
 * @param n Número de itens a selecionar
 * @returns Array com os itens selecionados
 */
function randomSelection<T>(pool: T[], n: number): T[] {
  const poolCopy = [...pool];
  const selected: T[] = [];
  while (selected.length < n && poolCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * poolCopy.length);
    selected.push(poolCopy[randomIndex]);
    poolCopy.splice(randomIndex, 1);
  }
  return selected;
}
