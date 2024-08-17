import React from "react";

const layout = ({
  children,
  notifications,
  revenue,
  story,
  login,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  story: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLogin = false;
  return isLogin ? (
    <div>
      <h1>{children}</h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{revenue}</div>
          <div>{story}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    <div>{login}</div>
  );
};

export default layout;
