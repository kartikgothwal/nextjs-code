import React from "react";

const Page = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  return <div>{params.slug?.map((item: string) => item)}</div>;
};

export default Page;
