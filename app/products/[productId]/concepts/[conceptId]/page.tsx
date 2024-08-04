import React from "react";

const Page = ({
  params,
}: {
  params: {
    productId: string;
    conceptId: string;
  };
}) => {
  const { productId, conceptId } = params;
  if (productId == "3") {
    throw new Error("Product id is bad");
  }
  return (
    <div>
      <h1>Hello world</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
      quibusdam.
      <p>
        {productId}, {conceptId}
      </p>
    </div>
  );
};

export default Page;
