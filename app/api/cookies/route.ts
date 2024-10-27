import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "cookies are set" },
    {
      headers: {
        "Content-Type": "text/html",
        "Set-Cookies": "name=theme",
      },
    }
  );
}
export async function GET() {
  const cookieStore = await cookies();
  const name = cookieStore.get("name");
//   cookieStore.set("name", "kartik");
   return Response.json({name})
}
