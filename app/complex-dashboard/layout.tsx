import React from "react";

const layout = ({
  children,
  contact,
  revenue,
  story,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  contact: React.ReactNode;
  story: React.ReactNode;
}) => {
  return (
    <div>
      <h1>{children}</h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{revenue}</div>
          <div>{contact}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{story}</div>
      </div>
    </div>
  );
};

export default layout;
