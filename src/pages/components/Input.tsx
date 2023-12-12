import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={`bg-button-bg text-basic-white px-5 py-4 rounded-lg w-full ${className}`}
      {...props}
    />
  );
};

export default Input;
