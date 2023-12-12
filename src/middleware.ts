import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isValidToken } from './app/lib/jwt'


export async function middleware(request: NextRequest) {
    const cookieToken = request.cookies.get('items-control-token')
    if (!cookieToken) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    const validToken = await isValidToken(cookieToken.value);

    if (!validToken) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}


export const config = {
    matcher: ['/productos', '/admin/:path*', '/clientes', '/', '/pedidos', '/entradas'],

}