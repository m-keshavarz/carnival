import { Equal, Expect } from "../helpers/type-utils";

type AllOrNothing<T extends Record<string, unknown>> = T | ToUndefinedObject<T>;

type ToUndefinedObject<T extends Record<string, unknown>> = Partial<
  Record<keyof T, undefined>
>;

/**
 * There's a problem with our AllOrNothing type. It's letting
 * us pass ANYTHING as T. We want to constrain it so that it
 * only works with objects.
 */

const vAny: any = 10;
let vUnknown: unknown = 10;

const testAny: string = vAny;
if (typeof vUnknown === "string") vUnknown.split("");
if (typeof vUnknown === "number") vUnknown++;

type tests = [
  // @ts-expect-error
  AllOrNothing<string>,
  // @ts-expect-error
  AllOrNothing<number>,
  // @ts-expect-error
  AllOrNothing<undefined>,
  Expect<Equal<AllOrNothing<{ a: string }>, { a: string } | { a?: undefined }>>
];
