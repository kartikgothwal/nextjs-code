import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export async function GET(request: NextRequest) {
  const res = await fetch("http://localhost:5000/users");
  const data = await res.json();
  return NextResponse.json({ data });
}
export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const res = await axios.post("http://localhost:5000/users", payload);
    return NextResponse.json({ data: res.data }, { status: 201 });
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
export async function PUT(request: NextRequest) {
  try {
    const payload = await request.json();
    const res = await axios.put("http://localhost:5000/users", payload);
    return NextResponse.json({ data: res.data }, { status: 201 });
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

