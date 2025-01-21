// route.ts
import { Configuration, OpenAIApi } from 'openai-edge';
import { NextRequest } from 'next/server';

// export const runtime = 'edge';

const config = new Configuration({ apiKey: process.env.OPEN_AI_KEY || '' });
const openai = new OpenAIApi(config);

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages
  });

  // Este es un Response nativo, con .body en modo streaming
  if (!response.ok) {
    // Maneja error (p.e. 429)...
    return new Response(JSON.stringify(await response.json()), { status: response.status });
  }

  // Devolver tal cual el body (passthrough)
  return new Response(response.body, {
    headers: {
      'Content-Type': 'text/event-stream', // SSE
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive'
    }
  });
}
