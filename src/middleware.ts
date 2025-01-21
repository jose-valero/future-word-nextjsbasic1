import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/login/:path*', '/signup/:path*']
};

export async function middleware(request: NextRequest) {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get('accessToken')?.value;

  if (accessToken) {
    return NextResponse.redirect(new URL('/store', request.url));
  }
}
