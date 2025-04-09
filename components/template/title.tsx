import { ElementType } from "react";

export interface TitleProps {
  title: string;
  subtitle: string;
  TitleIcon: ElementType;
}

const Title = ({ title, subtitle, TitleIcon }: TitleProps) => {
  return (
    <div className="flex gap-2">
      <TitleIcon size={55} stroke={1} />
      <div className="flex flex-col">
        <h1 className="text-2xl font-black">{title}</h1>
        <h2 className="text-zinc-400">{subtitle}</h2>
      </div>
    </div>
  );
};

export default Title;
