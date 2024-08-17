import Card from "@/app/components/cards";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Card>
      <h1>default Notifications</h1>
      <Link className="text-blue-600" href={"/complex-dashboard/archive"}>
        Archieved
      </Link>
    </Card>
  );
};

export default Page;
