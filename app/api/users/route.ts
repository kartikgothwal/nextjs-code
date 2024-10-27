import { users } from "@/app/_constants";
import {NextResponse} from "next/server";
export async function GET(request:NextResponse):Promise<Response> {
  //   return new Response("This is the response");
  //Query Params
  const queryParams:any = request.nextUrl.searchParams
 const nameQuery:string = queryParams.get("name");
  if(!nameQuery){
      return NextResponse.json({users});
  }
 const data:{name:string,contact:string} =users.filter((item:{name:string}):boolean=>item.name.toLowerCase().includes(nameQuery.toLowerCase()));
  return NextResponse.json({data});
}
export async function POST(request: Request):Promise<Response> {
  const data = await request.json();
  users.push(data)
  return  Response.json({message:"yes", users:users}, {
    headers:{
        content:"application/json"
    },
    status:201
  });
}
