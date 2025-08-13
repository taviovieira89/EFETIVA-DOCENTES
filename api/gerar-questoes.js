// Esta função será executada no servidor da Vercel, não no navegador do usuário.
export default async function handler(request, response) {
  // 1. Verificar se o método da requisição é POST
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  // 2. Pegar a chave da API do Gemini das "Environment Variables" da Vercel (seguro)
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return response.status(500).json({ error: 'API key not configured on the server.' });
  }

  try {
    // 3. Pegar o prompt que o frontend enviou
    const { prompt } = request.body;

    // 4. Fazer a chamada real para a API do Gemini, do lado do servidor
    const geminiResponse = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': apiKey, // Usando a chave segura
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 8192,
        },
      }),
    });

    // 5. Verificar se a chamada para o Gemini falhou
    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error('Gemini API Error:', errorText);
      return response.status(geminiResponse.status).json({ error: `Gemini API Error: ${errorText}` });
    }

    // 6. Enviar a resposta do Gemini de volta para o frontend
    const data = await geminiResponse.json();
    response.status(200).json(data);

  } catch (error) {
    console.error('Internal Server Error:', error);
    response.status(500).json({ error: 'An internal error occurred.' });
  }
}