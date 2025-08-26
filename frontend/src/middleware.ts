import { type NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
    const { url, cookies, nextUrl } = request;

    const session = cookies.get('session')?.value;

    const isDeactivateRoute = nextUrl.pathname === '/deactivate';
    // const isPlatformRoute = nextUrl.pathname.startsWith('/platform');

    // if (!session && isPlatformRoute) {
    //     return NextResponse.redirect(new URL('/login', url));
    // }

    if (!session && isDeactivateRoute) {
        return NextResponse.redirect(new URL('/login', url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/:path*', '/platform/:path*'],
};
