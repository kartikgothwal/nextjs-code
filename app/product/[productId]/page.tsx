import React from "react";
export const Ratio = () => {
  return "hello";
};
const Product = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return <div>Type is {params.productId}</div>;
};

export default Ratio;
