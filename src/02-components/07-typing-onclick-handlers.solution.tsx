import React, { EventHandler, MouseEventHandler, SyntheticEvent } from "react";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick: React.EventHandler<SyntheticEvent>;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
