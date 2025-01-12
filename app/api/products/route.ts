import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query")?.toLowerCase();
  const res = await axios.get("http://localhost:5000/comments");
  const filter = query
    ? res.data.filter((item: any) => {
        return item.body.toLowerCase().includes(query.toLowerCase());
      })
    : res.data;
  return NextResponse.json({ data: filter });
}
