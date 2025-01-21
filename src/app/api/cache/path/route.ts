import { env } from 'app/config/env';
import { revalidatePath } from 'next/cache';

export async function POST(req: Request) {
  const body = await req.json();
  const { path, token } = body;

  if (!path || !token) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (token !== env.CACHE_TOKEN) {
    return Response.json({ error: 'Invalid token' }, { status: 401 });
  }

  revalidatePath(path);
  return Response.json({ success: true }, { status: 200 });
}
