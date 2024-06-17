import React from "react";

const Product = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return <div>Type is {params.productId}</div>;
};

export default Product;
