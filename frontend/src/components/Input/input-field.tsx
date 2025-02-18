import { ComponentProps } from "react";

interface IIpuntProps extends ComponentProps<'input'> { }

export const InputField = (props: IIpuntProps) => {
  return (
    <input
      className="flex-1 outline-0 placeholder-gray-400"
      {...props}
    />
  )
}