import { users } from "@/app/db/db";

// export function GET() {
//   return Response.json({ data: users, message: "Data successfully fetched" });
// }
export function GET(request: Request) {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("address");
  const data = users.filter((item) => item.address.address.includes(address));

  return data.length > 0
    ? Response.json({ data: data, message: "Result found" })
    : Response.json({ message: "No Result found" });
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
