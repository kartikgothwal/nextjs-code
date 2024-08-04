"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  const randomNum = () => {
    return Math.round(Math.random() * 10);
  };
  if (randomNum() > 5) {
    throw new Error("This is the new error");
  }
  return (
    <div>
      <h1>Hello world</h1>
      <button className="border p-2" onClick={handleClick}>
        click me login
      </button>
    </div>
  );
};

export default Page;
