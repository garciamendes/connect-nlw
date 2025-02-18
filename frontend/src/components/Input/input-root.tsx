import { ComponentProps } from "react";

interface IInputRootProps extends ComponentProps<"div"> {
  error?: boolean;
}

export const InputRoot = ({ error = false, ...props }: IInputRootProps) => {
  return (
    <div
      data-error={error}
      className="group bg-gray-800 h-12 px-4 border border-gray-600 rounded-xl flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger transition-colors duration-300"
      {...props}
    />
  );
};
