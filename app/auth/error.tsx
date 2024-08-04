"use client";
import React from "react";

const ErrorBoundaries = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  console.log("🚀 ~ ErrorBoundaries ~ error:", error);

  return (
    <div>
      <h1>{error.message}</h1>
      <button className="my-3 border-4 border-red-600" onClick={reset}>
        try again
      </button>
    </div>
  );
};

export default ErrorBoundaries;
