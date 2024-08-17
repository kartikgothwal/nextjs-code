"use client";
import Card from "@/app/components/cards";
import React, { useState } from "react";

const Page = () => {
  const [text, setText] = useState("this is the text");

  return (
    <Card>
      <h1>Story {text}</h1>
    </Card>
  );
};

export default Page;
