"use client";
import Card from "@/app/components/cards";
import React, { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);
  return (
    <Card>
      <h1>Revenue {count}</h1>
    </Card>
  );
};

export default Page;
