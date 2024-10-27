import {NextRequest, NextResponse} from "next/server";
import {ReadonlyHeaders} from "next/dist/server/web/spec-extension/adapters/headers";
import {headers} from "next/headers";

export async function GET(request:NextRequest,response:NextResponse):Promise<any>{
    const header = new Headers();
    header.set('Content-Type', 'application/text');
    return NextResponse.json({message: "Hello World!"});
}