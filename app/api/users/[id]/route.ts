import { users } from "@/app/db/db";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const {
    params: { id },
  } = context;
  const target = users.find((item) => item.id === Number(id));
  return Response.json({ target }, { status: 200 });
}
export async function PATCH(
  request: Request,
  context: { params: { id: string } }
) {
  const {
    params: { id },
  } = context;
  const payload = await request.json();
  const target = users.find((item) => item.id === Number(id));
  if (target?.id) {
    users[Number(id)].firstName = payload.name;
  }
  return new Response(
    JSON.stringify({ users, message: "Data successfully modify" }),
    {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    }
  );
}
export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const {
    params: { id },
  } = context;
  const target = users.find((item) => item.id === Number(id));
  if (target?.id) {
    users.splice(target?.id, 1);
  }
  return new Response(
    JSON.stringify({ users, message: "Data successfully modify" }),
    {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    }
  );
}
