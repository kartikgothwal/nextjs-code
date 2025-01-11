import React from "react";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div><p>sdfdsfds</p>{children}<p>sdfdsf</p></div>;
};

export default RootLayout;
