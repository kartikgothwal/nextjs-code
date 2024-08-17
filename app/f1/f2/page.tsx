import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>F2 route</h1>
      <Link href={"/f1/f2"}>F2 folder</Link>
    </div>
  );
};

export default Page;
