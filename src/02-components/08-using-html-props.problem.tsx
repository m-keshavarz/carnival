import React, {
  ButtonHTMLAttributes,
  ComponentProps,
  ComponentType,
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
} from "react";

type ButtonProps = {
  className: string;
};

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`default-classname ${props.className}`}
    ></button>
  );
};

const Parent = () => {
  return <Button className="kdjf" onClick={() => {}} type="button"></Button>;
};
