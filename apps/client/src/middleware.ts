import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { JWTVerifyResult, jwtVerify } from 'jose';
import { User } from './types';

const publicRoutes = ['/login', '/signup', '/'];
const protectedRoutes = ['/dashboard', '/account-create', '/dashboard/jobs'];

const decode = async (): Promise<User | null> => {
    try {
        const accessToken = cookies().get('accessToken')?.value;

        const session = await jwtVerify<JWTVerifyResult<User | null>>(
            accessToken as string,
            new TextEncoder().encode(process.env.JWT_TOKEN),
        );

        return session.payload as User;
    } catch (err) {
        return null;
    }
};

export default async function middleware(req: NextRequest) {
    const session = await decode();

    const path = req.nextUrl.pathname;
    const isPublicRoute = publicRoutes.includes(path);
    const isProtectedRoute = protectedRoutes.includes(path);

    if (isProtectedRoute && !session?.id) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    if (
        isProtectedRoute &&
        session?.id &&
        !session.isAccount &&
        req.nextUrl.pathname !== '/account-create'
    ) {
        return NextResponse.redirect(new URL('/account-create', req.nextUrl));
    }

    if (
        session?.isAccount &&
        req.nextUrl.pathname.startsWith('/account-create')
    ) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
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
