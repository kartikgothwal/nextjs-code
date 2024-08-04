"use client";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="p-4 bg-red-400">
      {error.message}
      <button onClick={() => reset()} className="mx-4 border">
        click to reset
      </button>
    </div>
  );
};

export default Error;
