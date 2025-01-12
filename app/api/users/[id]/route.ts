import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id }: { id: string } = params;
  const res = await axios.get(`http://localhost:5000/users/${id}`);
  return NextResponse.json({ data: res.data }, { status: 200 });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id }: { id: string } = params;
    const payload = await request.json();
    const res = await axios.patch(`http://localhost:5000/users/${id}`, payload);
    return NextResponse.json({ data: res.data }, { status: 200 });
  } catch (error: { error: { message: string } }) {
    console.log("🚀 ~ POST ~ error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id }: { id: string } = params;
    const payload = await request.json();
    const res = await axios.put(`http://localhost:5000/users/${id}`, payload);
    
    return NextResponse.json({ data: res.data }, { status: 200 });
  } catch (error: { error: { message: string } }) {
    console.log("🚀 ~ POST ~ error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id }: { id: string } = params;
    const res = await axios.delete(`http://localhost:5000/users/${id}`);
    return NextResponse.json({ data: res.data }, { status: 200 });
  } catch (error: { error: { message: string } }) {
    console.log("🚀 ~ POST ~ error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
