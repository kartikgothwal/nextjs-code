import { users } from "@/app/utils/db";
import { NextResponse } from "next/server";
 
export function GET() {
  return NextResponse.json(users);
}
export function POST() {
  return NextResponse.json({ result: "POST request" });
}
export function PATCH() {
  return NextResponse.json({ result: "PATCH request" });
}
export function PUT() {
  return NextResponse.json({ result: "REPLACE request" });
}
export function DELETE() {
  return NextResponse.json({ result: "DELETE request" });
}
