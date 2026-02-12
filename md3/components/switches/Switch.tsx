import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { type ComponentPropsWithoutRef } from "react";

import { mergeClasses } from "../../utils/utils.js";
import {
  switchStyle,
  switchThumbSelectedIconStyle,
  switchThumbStyle,
  switchThumbUnselectedIconStyle,
  switchWrapperStyle,
} from "./switch.css.js";

export interface SwitchProps extends ComponentPropsWithoutRef<typeof BaseSwitch.Root> {
  withIcon?: boolean;
}

export default function Switch({ className, withIcon = false, ...props }: SwitchProps) {
  const mergedClassName = mergeClasses([switchStyle, className]);

  return (
    <span className={switchWrapperStyle} data-slot="root">
      <BaseSwitch.Root
        className={mergedClassName}
        data-with-icon={withIcon ? "true" : undefined}
        {...props}
      >
        <BaseSwitch.Thumb className={switchThumbStyle}>
          {withIcon ? (
            <>
              <span className={switchThumbSelectedIconStyle} aria-hidden>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="currentColor"
                >
                  <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                </svg>
              </span>
              <span className={switchThumbUnselectedIconStyle} aria-hidden>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="currentColor"
                >
                  <path d="M240-440v-80h480v80H240Z" />
                </svg>
              </span>
            </>
          ) : null}
        </BaseSwitch.Thumb>
      </BaseSwitch.Root>
    </span>
  );
}

Switch.displayName = "Switch";
