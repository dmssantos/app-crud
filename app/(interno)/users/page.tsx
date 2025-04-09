import Pager from "@/components/template/page";
import Userlist from "@/components/user/Userlist";
import React from "react";

const Page = () => {
  return (
    <div>
      <Pager>
        <h1>
          <Userlist />
        </h1>
      </Pager>
    </div>
  );
};

export default Page;
