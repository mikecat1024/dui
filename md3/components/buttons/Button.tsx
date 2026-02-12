import { Button as BaseButton } from "@base-ui/react/button";
import { type ComponentPropsWithoutRef } from "react";

import { mergeClasses } from "../../utils/utils.js";
import { buttonStyle, type ButtonVariants } from "./button.css.js";

type ButtonProps = ComponentPropsWithoutRef<typeof BaseButton> & ButtonVariants;

export default function Button({ children, className, variant, ...props }: ButtonProps) {
  const buttonClassName = buttonStyle({ variant });
  const mergedClassName = mergeClasses([buttonClassName, className]);

  return (
    <BaseButton className={mergedClassName} {...props} data-slot="root">
      {children}
    </BaseButton>
  );
}

Button.displayName = "Button";
