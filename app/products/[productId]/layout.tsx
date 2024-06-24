"use client";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const generateError = () => {
    const value = Math.round(Math.random() * 10);
    console.log("🚀 ~ generateError ~ value:", value);
    if (value > 50 || value < 10)
      throw new Error("this is a error from layout");
  };
  useEffect(() => {
    generateError();
  });
  return (  
    <html lang="en">
      <body>
        {children}
        <h1 className="block mx-10">hapy proudcts</h1>
      </body>
    </html>
  );
}
