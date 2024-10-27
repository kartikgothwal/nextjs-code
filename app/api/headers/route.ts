import {NextRequest, NextResponse} from "next/server";
import {headers} from "next/headers";
import {ReadonlyHeaders} from "next/dist/server/web/spec-extension/adapters/headers";

export async function GET(request:NextRequest,response:NextResponse):Promise<any>{
    const header = new Headers(request.headers);
    const Headerdata:string|null=  header.get("Authorization");
    const requestHeader:Promise<ReadonlyHeaders> = await headers();
    const requestHeaderData:string = requestHeader.get("Authorization");
    return NextResponse.json({header1:requestHeaderData, header2:Headerdata});
}