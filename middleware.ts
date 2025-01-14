import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const name = request.cookies.get("name");
  console.log("🚀 ~ middleware ~ name:", name);
  if (name?.value.toLowerCase() === "john doe") {
    return NextResponse.next().headers.set("custom", "duty");
  } else {
    return NextResponse.redirect(new URL("/api/profile", request.url));
  }
  //   const query = request.nextUrl.searchParams;
  //   const search = query.get("query");
  //   if(request.nextUrl.pathname === "/api/users" || search === "admin") {
  //     // return NextResponse.redirect(new URL("/api/profile", request.url));
  //     return NextResponse.rewrite(new URL("/api/profile", request.url));
  //   }
  //   return NextResponse.redirect(new URL("/", request.url));
}
export const config = {
  matcher: "/api/users",
};
