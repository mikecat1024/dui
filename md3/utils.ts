import { md } from "./theme/theme.css.js";

export function mergeClasses<T>(
  classes: (string | boolean | ((state: T) => string | undefined) | undefined)[],
) {
  return (state: T) =>
    classes
      .map((className) => (typeof className === "function" ? className(state) : className))
      .filter(Boolean)
      .join(" ");
}

export function composite(
  color: string,
  opacity: string,
  backgroundColor: string = md.sys.color.surface,
) {
  return `color-mix(in srgb, ${color} ${Number(opacity) * 100}%, ${backgroundColor})`;
}
