import { NextResponse } from "next/server";

export function GET(
  _: any,
  Response: {
    params: {
      id: string;
    };
  }
) {
  console.log(Response.params.id);
  return NextResponse.json({ result: true });
}
