import { ComponentProps } from "react";

interface IInputIcon extends ComponentProps<'span'> { }

export const InputIcon = (props: IInputIcon) => {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  )
}