import React from "react";
import { Context } from "vitest";

interface Props {
  className: string;
}

type ContextProp = {
  name: string;
};

export const Button: React.FC<Props> = (props, context) => {
  console.log(context);

  return <div className={props.className}></div>;
};

const Parent = () => {
  return (
    <>
      {/* <MyButton className="kjdkf"></MyButton> */}
      <Button className="my-class"></Button>
    </>
  );
};
