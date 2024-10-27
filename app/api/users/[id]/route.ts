import { users } from "@/app/_constants";
import {redirect} from "next/navigation";
import {NextResponse} from "next/server";

export async function PATCH(request: Request, {params}:{params:Promise<{id:string}>} ):Promise<Response> {
  const data:{id:string}= await params;
  if(Number(data.id)===2){
     redirect("/api/users");
  }
  const value:{email:string, password:string} = await request.json();
  users.splice(Number(data.id),1,value);
   return Response.json({ users: users });
}

export async function DELETE(request:Request,{params}:{params:Promise<{id:string}>} ):Promise<Response> {
  const data:{id:string}= await params;
  users.splice(Number(data.id),1);
  return Response.json({ users: users });
}
export async function GET(request:Request,{params}:{params:Promise<{id:string}>} ):Promise<Response> {
 const data:{id:string} = await params;
 if(Number(data.id)>users.length){
    redirect("/api/users");
 }
  const values = users.filter((item:any,index:number):boolean=>index===Number(data.id));
  return NextResponse.json({values});
}