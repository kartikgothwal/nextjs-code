import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const data = request.cookies.get("name");
  const clas = await cookies().get("class");
  // const clas = await cookies().set("class", "web");

  return new Response(`Hello, ${data?.value} ${clas.value}!`, {
    headers: {
      "content-type": "text/html",
    },
  });
}
