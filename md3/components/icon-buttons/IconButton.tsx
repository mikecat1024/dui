import { Button as BaseButton } from "@base-ui/react/button";
import { type ComponentPropsWithoutRef } from "react";

import { mergeClasses } from "../../utils/utils.js";
import { iconButtonStyle, type IconButtonVariants } from "./icon-button.css.js";

type IconButtonProps = ComponentPropsWithoutRef<typeof BaseButton> & IconButtonVariants;

export default function IconButton({
  className,
  disabled,
  variant,
  children,
  ...props
}: IconButtonProps) {
  const iconButtonClassName = iconButtonStyle({ variant });
  const mergedClassName = mergeClasses([iconButtonClassName, className]);

  return (
    <BaseButton className={mergedClassName} disabled={disabled} {...props}>
      {children}
    </BaseButton>
  );
}

IconButton.displayName = "IconButton";
