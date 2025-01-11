"use client";

import Error from "next/error";

const ErrorBoundary = ({error}:{error:Error}) => {
    console.log(error)
  return (
    <div>
        <h1>Error</h1>
      </div>
  )
}

export default ErrorBoundary
