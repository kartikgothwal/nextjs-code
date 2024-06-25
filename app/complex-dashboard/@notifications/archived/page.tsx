import Card from "@/app/components/cards";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Card>
      Archiced Notifications
      <Link href={"/complex-dashboard"}>
        deafult Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur nam molestias eos debitis. Quas quis molestias soluta
        exercitationem rerum quidem voluptatum obcaecati eveniet illo,
        necessitatibus sint accusamus voluptates dicta voluptas, animi quos!
        Assumenda sunt ut voluptate sapiente reiciendis, provident vero
        voluptatum, omnis obcaecati similique commodi libero. Ducimus aliquid
        cupiditate, vel quos unde in odio sed tempora, voluptatum labore
        voluptatem? Voluptatum ratione possimus consequuntur illo dolorem.
        Similique impedit, dicta veniam dolore ea nam tenetur nesciunt libero
        consectetur laborum esse inventore quibusdam tempore delectus facilis
        iste consequuntur ducimus sequi in quas odio necessitatibus architecto
        repudiandae. Excepturi voluptatem ex officia corporis distinctio
        dolorem, eligendi non dicta ab perspiciatis. Aspernatur aperiam eligendi
        consectetur unde exercitationem odit. Ratione quas nesciunt error,{" "}
      </Link>
    </Card>
  );
};

export default Page;
