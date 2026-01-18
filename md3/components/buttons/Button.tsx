import { Button as BaseButton } from "@base-ui/react/button";
import { type ComponentPropsWithoutRef } from "react";

import { light } from "../../theme/theme.css.js";
import { mergeClasses } from "../../utils/utils.js";
import { buttonStyle, type ButtonVariants } from "./button.css.js";

type ButtonProps = ComponentPropsWithoutRef<typeof BaseButton> & ButtonVariants;

export default function Button({ children, className, disabled, variant, ...props }: ButtonProps) {
  const buttonClassName = buttonStyle({ variant });
  // Theme class must be on the same element as buttonStyle for shadowColor.
  const mergedClassName = mergeClasses([buttonClassName, className, light]);

  return (
    <BaseButton className={mergedClassName} disabled={disabled} aria-disabled={disabled} {...props}>
      {children}
    </BaseButton>
  );
}

Button.displayName = "Button";
