import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { type ComponentPropsWithoutRef } from "react";

import { mergeClasses } from "../../utils/utils.js";
import {
  radioButtonIconStyle,
  radioButtonRootStyle,
  radioButtonWrapperStyle,
} from "./radio-button.css.js";

type RadioButtonsRootProps = ComponentPropsWithoutRef<typeof BaseRadioGroup>;
type RadioButtonsItemProps = ComponentPropsWithoutRef<typeof BaseRadio.Root>;

function RadioButtonsRoot({ children, ...props }: RadioButtonsRootProps) {
  return (
    <BaseRadioGroup {...props} data-slot="root">
      {children}
    </BaseRadioGroup>
  );
}

function RadioButtonsItem({ className, ...props }: RadioButtonsItemProps) {
  const mergedClassName = mergeClasses([radioButtonRootStyle, className]);

  return (
    <span className={radioButtonWrapperStyle}>
      <BaseRadio.Root className={mergedClassName} {...props}>
        <span className={radioButtonIconStyle} aria-hidden />
      </BaseRadio.Root>
    </span>
  );
}

RadioButtonsRoot.displayName = "RadioButtons.Root";
RadioButtonsItem.displayName = "RadioButtons.Item";

const RadioButtons = {
  Root: RadioButtonsRoot,
  Item: RadioButtonsItem,
};

export default RadioButtons;
