import { Button as BaseButton } from "@base-ui/react/button";

import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<typeof BaseButton>;

export default function Button({ children }: ButtonProps) {
  return <BaseButton>{children}</BaseButton>;
}

Button.displayName = "Button";
