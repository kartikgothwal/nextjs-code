"use client";

const Page = () => {
  const num: number = Math.floor(Math.random() * 10);
  if (num > 5) {
    throw new Error("Error in blogs");
  }
  return (
    <div>
      <h1>Blogs page</h1>
    </div>
  );
};

export default Page;
