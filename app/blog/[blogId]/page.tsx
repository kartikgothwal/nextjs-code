import { Metadata } from "next";
import React from "react";
type Props = {
  params: {
    blogId: string;
  };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const pr: { title: string; description: string } = await new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        resolve({
          title: "This is the async " + params.blogId,
          description: "This is the async description",
        });
      }, 3000);
    }
  );
  console.log("🚀 ~ pr:", pr);
  return {
    title: pr.title,
    description: pr.description,
  };
};
const page = ({ params }: Props) => {
  return (
    <div>
      <h1>{params.blogId}</h1>
    </div>
  );
};

export default page;
