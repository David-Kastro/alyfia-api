import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function analyzeNewsContent(content: string, threadPrompt: string): Promise<any[]> {
  const prompt = `
Você é especialista em análise crítica e factual de notícias em português brasileiro. Analise a notícia abaixo com base no contexto fornecido (threadPrompt) e identifique exclusivamente os seguintes problemas, retornando um JSON estrito:

Problemas a identificar:
- "bias": viés evidente.
- "subjectivity": subjetividade ou opinião explícita.
- "contradiction": contradição interna evidente.
- "ad": propaganda ou anúncio disfarçado.
- "opinion": opiniões pessoais disfarçadas de fato.
- "sentiment_bias": viés emocional claro e injustificado.
- "false_fact": fato histórico falso ou não comprovado.
- "off_topic": conteúdo fora do tema definido no threadPrompt.

Contexto (ThreadPrompt):
"${threadPrompt}"

Conteúdo da notícia:
"${content}"

Responda exclusivamente no formato JSON:
{
  "issues": [
    {
      "type": "tipo_do_problema",
      "description": "descrição curta e direta em português",
      "positionStart": início_da_posição (opcional),
      "positionEnd": fim_da_posição (opcional),
      "sentiment": "positive" | "negative" | "neutral" (opcional)
    }
  ]
}

Exemplo estrito:
{
  "issues": [
    {
      "type": "false_fact",
      "description": "Número de vítimas informado está incorreto conforme registros oficiais.",
      "positionStart": 120,
      "positionEnd": 140
    },
    {
      "type": "off_topic",
      "description": "Informação sobre economia não tem relação com o tema central da thread."
    }
  ]
}
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.1, // mais precisão
      max_tokens: 300,
    });

    const analysisText = response.choices[0].message.content || "";

    let issues = [];
    try {
      issues = JSON.parse(analysisText)?.issues || [];
    } catch (parseError) {
      console.error("Erro ao converter resposta em JSON:", parseError, analysisText);
    }

    return issues;
  } catch (error) {
    console.error("Erro na chamada da API OpenAI:", error);
    return [];
  }
}