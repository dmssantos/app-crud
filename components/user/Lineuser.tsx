import { User } from "@/core/model/user";
import Image from "next/image";
import React from "react";

export interface LineUserProps {
  user: User;
}

const Lineuser = ({ user }: LineUserProps) => {
  return (
    <div className="flex bg-zinc-900 p-4 rounded-md items-center gap-5">
      <Image
        src="https://avatar.iran.liara.run/public"
        width={80}
        height={80}
        alt="Avatar"
        className="rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-xl font-black">{user.name}</span>
        <span className="text-sm text-zinc-400">{user.email}</span>
      </div>
    </div>
  );
};

export default Lineuser;
