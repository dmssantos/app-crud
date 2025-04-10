"use client";

import Pager from "@/components/template/page";
import Title from "@/components/template/title";
import Userform from "@/components/user/Userform";
import { User } from "@/core/model/user";
import users from "@/data/constants/users";
import { IconUser } from "@tabler/icons-react";
import React, { useState } from "react";

const handleSaveButton = () => {
  //Salvar no banco de dados.
};

const Page = () => {
  const [user, setUser] = useState<User>(users[0]);

  return (
    <div>
      <Pager className="flex flex-col gap-10">
        <Title
          TitleIcon={IconUser}
          title="Users"
          subtitle="Users registration"
        />
        {/* <Userlist /> */}
        <Userform
          user={user}
          onChange={setUser}
          onSaveButton={handleSaveButton}
          onCancelButton={() => {}}
        />
      </Pager>
    </div>
  );
};

export default Page;
