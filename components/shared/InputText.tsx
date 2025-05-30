import { InputHTMLAttributes } from "react";

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputText = ({ label, ...props }: InputTextProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <input {...props} className="bg-zinc-200 p-2 rounded-md outline-none" />
    </div>
  );
};

export default InputText;
