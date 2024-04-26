import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from '@/lib/session';

const publicRoutes = ['/login', '/signup', '/'];
const protectedRoutes = ['/dashboard'];

export default async function middleware(req: NextRequest) {
    const session = await getServerSession();

    const path = req.nextUrl.pathname;
    const isPublicRoute = publicRoutes.includes(path);
    const isProtectedRoute = protectedRoutes.includes(path);

    if (isProtectedRoute && !session?.id) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    if (
        isPublicRoute &&
        session?.id &&
        !req.nextUrl.pathname.startsWith('/dashboard')
    ) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
    }

    if (req.nextUrl.pathname === '/') {
        return NextResponse.rewrite(new URL('/login', req.url));
    }

    return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
