"use client";

import { User } from "@/core/model/user";
import React, { use } from "react";
import InputText from "../shared/InputText";

export interface UserformProps {
  user: User;
  onChange: (user: User) => void;
  onSaveButton: () => void;
  onCancelButton: () => void;
}

const Userform = ({
  user,
  onChange,
  onSaveButton,
  onCancelButton,
}: UserformProps) => {
  return (
    <div className="flex flex-col gap-5 text-black">
      <InputText
        label="Name"
        type="text"
        value={user.name}
        onChange={(e) => onChange?.({ ...user, name: e.target.value })}
      />
      <InputText
        label="Email"
        type="email"
        value={user.email}
        onChange={(e) => onChange?.({ ...user, email: e.target.value })}
      />
      <InputText
        label="Password"
        type="password"
        value={user.password}
        onChange={(e) => onChange?.({ ...user, password: e.target.value })}
      />
      <div className="flex gap-5">
        <button
          className="bg-blue-500 px-4 py-2 rounded-md"
          onClick={onSaveButton}
        >
          Salvar
        </button>
        <button
          className="bg-zinc-500 px-4 py-2 rounded-md"
          onClick={onCancelButton}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Userform;
