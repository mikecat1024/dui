import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { type ComponentPropsWithoutRef } from "react";

import type { ComponentPropsWithoutRefAndChildren } from "../../utils/types.js";
import { mergeClasses } from "../../utils/utils.js";
import {
  checkboxCheckmarkStyle,
  checkboxIndeterminateStyle,
  checkboxIndicatorStyle,
  checkboxRootStyle,
  checkboxWrapperStyle,
} from "./checkbox.css.js";

interface CheckboxProps extends ComponentPropsWithoutRef<typeof BaseCheckbox.Root> {
  slotProps?: {
    indicator: ComponentPropsWithoutRefAndChildren<typeof BaseCheckbox.Indicator>;
  };
}

export default function Checkbox({ className, ...props }: CheckboxProps) {
  const mergedClassName = mergeClasses([checkboxRootStyle, className]);

  return (
    <span className={checkboxWrapperStyle} data-slot="root">
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
    </span>
  );
}

Checkbox.displayName = "Checkbox";
