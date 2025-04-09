import users from "@/data/constants/users";
import React from "react";
import Lineuser from "./Lineuser";
import { User } from "@/core/model/user";

const Userlist = () => {
  return (
    <div className="flex flex-col gap-4">
      {users.map((user: User) => {
        return <Lineuser key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Userlist;
