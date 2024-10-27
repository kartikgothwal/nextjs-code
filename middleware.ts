import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  ///setting the cookies using middlewares
  //   const themePreference = request.cookies.get("theme");
  //  if(!themePreference){
  //   response.cookies.set("theme", "dark")
  //  }else{
  //   response.cookies.delete("theme")
  //  }
  //   return response;

  //setting the headers using the middlewares;
  request.headers.set("custom-headers", "custom-value")
  return new Response("hello word");
  // conditional middleware;
  // if(request.nextUrl.pathname==="/profile"){
  //   return NextResponse.redirect(new URL("/hello", request.url));
  // }
  //  return NextResponse.redirect(new URL("/hello", request.url));
}
export const config ={
    matcher:"/profile"
}
