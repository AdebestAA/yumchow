import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";



export  const middleware  = async(request:NextRequest)=>{
const path = request.nextUrl.pathname
const checkPath = path === "/signup" || path ==="/signin"

const getCookies = await cookies()
const token = getCookies.get("token")?.value || ""

if (path === "/" && !token) {
    return NextResponse.redirect(new URL("/signup",request.nextUrl))
}

if (checkPath && token ) {
    return NextResponse.redirect(new URL("/",request.nextUrl))
}

return NextResponse.next()
}

export const config = {
    matcher: ["/","/signin","/signup"]
}