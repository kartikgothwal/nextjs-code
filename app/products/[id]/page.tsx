import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const response =await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
  const data = await response.json();
  return { title: data.title, description: "Keywords" };
}

const Page = () => {
  return (
    <div>
      <h1>product page</h1>
    </div>
  );
};

export default Page;
