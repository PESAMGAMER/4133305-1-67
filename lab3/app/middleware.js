import { NextResponse } from "next/server" ;

export function middleware(request){
    //return NextResponse.redirect(new URL('/',request.url))
    return NextResponse.NEXT()
}

export const config = {
    matcher: ["/blog/:path*"]
}