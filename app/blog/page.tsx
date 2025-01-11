import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "blogs",
  description: "interview",
};
const Page = () => {
  return (
    <div>
      <h1>Hello blogs</h1>
      <Link href="/">blgos page</Link>
    </div>
  );
};

export default Page;
