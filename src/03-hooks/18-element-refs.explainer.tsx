import { Equal, Expect } from "../helpers/type-utils";

export const nullAsRef = (
  <div
    ref={{
      current: null,
    }}
  ></div>
);

// Legacy refs are supported!
export const stringAsRef = <div ref={"legacyRef"}></div>;

type A = { a: string };
type B = { a: string; b: number };

const b: B = { a: '1', b: 2 };
const a1: A = b;

export const undefinedAsRef = (
  <div
    ref={{
      // Type 'undefined' is not assignable to
      // type 'HTMLDivElement | null'.
      current: document.createElement("div"),
    }}
  ></div>
);

// Callback refs are supported via RefCallback<T>
export const callbackRefs = (
  <div
    ref={(htmlDivElement) => {
      type test = Expect<Equal<typeof htmlDivElement, HTMLDivElement | null>>;
    }}
  ></div>
);
