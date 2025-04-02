import React from "react";

export interface PageProps {
  children?: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return <div>{children}</div>;
};

export default Page;
