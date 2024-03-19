import { request } from "http";
import { NextResponse } from "next/server";

export function middleware(request: any) {
  if (request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  console.log("middleware ran");
  return NextResponse.json({ result: "hello world" });
}
export const config = {
  matcher: "/userslist/:path*",
};
