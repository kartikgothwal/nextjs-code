import { Metadata } from "next";

export const metadata:Metadata={
  title:"Titlte",
  description:"Description"
}
export default function Home() {
  throw new Error("This is an error");
  return (
   <h1>Hello world</h1>
  );
}
