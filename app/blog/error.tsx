"use client";

import React from "react";

 
const ErrorBoundary = ({
  error,
  reset,
}: {
  error: {message:string};
  reset: () => void;
}) => {
  console.log(error);

  return (
    <div>
      <p>
        <strong>Message:</strong> {error.message}
      </p>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default ErrorBoundary;
