import { users } from "@/app/db/db";
import { headers, headers } from "next/headers";

// export function GET() {
//   return Response.json({ data: users, message: "Data successfully fetched" });
// }
// export function GET(request: Request) {
//   const searchParams = request.nextUrl.searchParams;
//   const address = searchParams.get("address");
//   const data = users.filter((item) => item.address.address.includes(address));
//   return data.length
//     ? Response.json({ name: "Found" })
//     : Response.json({ name: "Not Found" });
// }
export function GET(request: Request) {
  const requestHeaders = new Headers(request.headers);
  const auth = requestHeaders.get("Authorization");
  const headerList = headers();
  const head = headerList.get("Authorization");
  return Response.json({ data: users, message: "Data successfully fetched" });
}
export async function POST(request: Request) {
  const payload = await request.json();
  users.push(payload);
  return Response.json({ data: users, message: "Data successfully fetched" });
}
export async function PATCH(request: Request) {
  const payload = await request.json();
  users.push(payload);
  return new Response(
    JSON.stringify({ users, message: "Data successfully fetched" }),
    {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    }
  );
}
