import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const head = await headers();
  const userAgent = head.get("user-agent");
  const authorization = requestHeaders.get("authorization");
  const type = requestHeaders.get("Content-Type");
  const fetch = requestHeaders.get("Sec-Fetch-Site");
  //   return NextResponse.json({
  //     data: authorization,
  //     type: type,
  //     fetch: fetch,
  //     userAgent,
  //   });
  return new Response("Hello, world!", {
    headers: {
      "content-type": "text/html",
      "name":"John Doe",
      "set-cookie": "name=John Doe; SameSite=true; Secure",
    },  
  });
}
