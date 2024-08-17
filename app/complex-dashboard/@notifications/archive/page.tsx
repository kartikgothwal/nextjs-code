import Card from "@/app/components/cards";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Card>
      <h1>Archieved Notification</h1>
      <Link className="text-blue-600" href={"/complex-dashboard"}>
        Default
      </Link>
    </Card>
  );
};

export default page;
