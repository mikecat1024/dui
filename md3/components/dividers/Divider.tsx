import { type ComponentPropsWithoutRef } from "react";

import { joinClassNames } from "../../utils/utils.js";
import { dividerStyle, type DividerVariants } from "./divider.css.js";

type DividerProps = ComponentPropsWithoutRef<"hr"> & DividerVariants;

export default function Divider({ className, variant, ...props }: DividerProps) {
  const mergedClassName = joinClassNames(dividerStyle({ variant }), className);

  return <hr className={mergedClassName} {...props} data-slot="root" />;
}

Divider.displayName = "Divider";
