import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { type ComponentPropsWithoutRef } from "react";

import { mergeClasses } from "../../utils/utils.js";
import {
  checkboxCheckmarkStyle,
  checkboxIndeterminateStyle,
  checkboxIndicatorStyle,
  checkboxRootStyle,
} from "./checkbox.css.js";

type CheckboxProps = ComponentPropsWithoutRef<typeof BaseCheckbox.Root>;

export default function Checkbox({ className, ...props }: CheckboxProps) {
  const mergedClassName = mergeClasses([checkboxRootStyle, className]);

  return (
    <BaseCheckbox.Root className={mergedClassName} {...props}>
      <BaseCheckbox.Indicator className={checkboxIndicatorStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
          <path
            className={checkboxCheckmarkStyle}
            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
          />
          <path className={checkboxIndeterminateStyle} d="M240-440v-80h480v80H240Z" />
        </svg>
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );
}

Checkbox.displayName = "Checkbox";
