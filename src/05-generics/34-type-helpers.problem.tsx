type Icon = "home" | "settings" | "about";
type ButtonVariant = "primary" | "secondary" | "tertiary";

type MakeString<T> = T | (string & {});

// How do we refactor this to make it DRY?
type LooseIcon = MakeString<Icon>;
type LooseButtonVariant = MakeString<ButtonVariant>;

export const icons: LooseIcon[] = [
  "home",
  "settings",
  "about",
  "any-other-string",
  // I should get autocomplete if I add a new item here!
];

export const buttonVariants: LooseButtonVariant[] = [
  "primary",
  "secondary",
  "tertiary",
  "any-other-string",
  // I should get autocomplete if I add a new item here!
];
