"use client";
import { ReactElement, useEffect, useState } from "react";

const Page = (): ReactElement => {
  const [fetchData, SetFetchData] = useState<any>();
  const getDataValues = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    SetFetchData(data.products);
  };
  useEffect(() => {
    getDataValues();
  }, []);
  return (
    <div className="px-5">
      <ul>
        {fetchData &&
          fetchData?.map(
            (item: { id: number; title: string; description: string }) => (
              <li className="my-[2rem] border p-4" key={item.id}>
                <p>title:{item.title}</p>
                <p>description:{item.description}</p>
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default Page;
