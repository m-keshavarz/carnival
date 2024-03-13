import React, { FormEventHandler, MouseEvent, MouseEventHandler } from "react";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
  onChange: FormEventHandler<HTMLDivElement>;
  onCapture: MouseEventHandler;
}

export const Button = ({
  children,
  className,
  onClick,
  onChange,
  onCapture,
}: ButtonProps) => {
  return (
    <input
      type="submit"
      onClick={onClick}
      onChange={onChange}
      onClickCapture={onCapture}
      className={className}
    >
      {children}
    </input>
  );
};
