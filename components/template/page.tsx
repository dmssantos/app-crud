import React from "react";
import Menu from "./menu";
import { Main } from "next/document";

export interface PageProps {
  children?: React.ReactNode;
}

const Pager = ({ children }: PageProps) => {
  return (
    <div className="flex">
      <Menu />
      <main className="flex-1 p-7">{children}</main>
    </div>
  );
};

export default Pager;
