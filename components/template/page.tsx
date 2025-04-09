import React from "react";
import Menu from "./menu";

export interface PageProps {
  children: React.ReactNode;
  className?: string;
}

const Pager = ({ children, className }: PageProps) => {
  return (
    <div className="flex">
      <Menu />
      <main className={`flex-1 p-7 ${className ?? ""}`}>{children}</main>
    </div>
  );
};

export default Pager;
