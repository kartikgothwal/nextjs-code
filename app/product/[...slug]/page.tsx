import React from "react";

const page = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  const { slug } = params;

  return <div>{slug && slug.map((item) => <p key={item}>{item}</p>)}</div>;
};

export default page;
