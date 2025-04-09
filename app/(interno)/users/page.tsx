import Pager from "@/components/template/page";
import Title from "@/components/template/title";
import Userlist from "@/components/user/Userlist";
import { IconUser } from "@tabler/icons-react";
import React from "react";

const Page = () => {
  return (
    <div>
      <Pager className="flex flex-col gap-10">
        <Title
          TitleIcon={IconUser}
          title="Users"
          subtitle="Users registration"
        />
        <Userlist />
      </Pager>
    </div>
  );
};

export default Page;
