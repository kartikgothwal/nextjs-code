import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "page metaata",
  description: "This is the description",
};

const page = () => {
  throw new Error("this is the error");
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default page;
