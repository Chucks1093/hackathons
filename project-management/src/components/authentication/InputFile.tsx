import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HTMLInputTypeAttribute } from "react";

type InputFileType = {
   name: string;
   type: HTMLInputTypeAttribute;
   value: string;
   handleChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;
   checked?: boolean;
}

export function InputFile({ name, type, value, handleChange}: InputFileType) {
  return (
    <div className="grid w-full items-center gap-1.5 mb-5">
      <Label className="mb-2 capitalize" htmlFor={name}>{name}</Label>
      <Input value={value} name={name} onChange={handleChange} id={name} type={type} />
    </div>
  )
}
