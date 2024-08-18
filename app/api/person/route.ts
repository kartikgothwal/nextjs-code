export function GET(request: Request) {
  const requestHeaders = new Headers(request.headers);
  const headerList = requestHeaders.get("Host");
   
  return new Response('This is the header',{
    headers:{
      "Content-Type":"api/json"
    }
  })
  
}
