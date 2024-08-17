import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>F4</h1>
      <Link href={"/f1/f3"}>F3 folder</Link>
    </div>
  );
};

export default page;
