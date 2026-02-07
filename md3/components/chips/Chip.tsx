import { Button as BaseButton } from "@base-ui/react/button";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { light } from "../../theme/theme.css.js";
import { mergeClasses } from "../../utils/utils.js";
import {
  assistChipStyle,
  chipLeadingIconStyle,
  chipTrailingIconStyle,
  filterChipStyle,
  inputChipStyle,
  inputChipTrailingIconStyle,
  suggestionChipStyle,
} from "./chip.css.js";

export type ChipVariant = "assist" | "filter" | "input" | "suggestion";

type ChipProps = ComponentPropsWithoutRef<typeof BaseButton> & {
  elevated?: boolean;
  leadingIcon?: ReactNode;
  "data-dragged"?: boolean;
};

interface AssistChipProps extends ChipProps {
  variant: "assist";
  trailingIcon?: never;
}

interface FilterChipProps extends ChipProps {
  variant: "filter";
  trailingIcon?: ReactNode;
}

interface InputChipProps extends ChipProps {
  variant: "input";
  elevated: false;
  trailingIcon: ReactNode;
}

interface SuggestionChipProps extends ChipProps {
  variant: "suggestion";
  trailingIcon?: never;
}

export default function Chip(
  props: AssistChipProps | FilterChipProps | InputChipProps | SuggestionChipProps,
) {
  switch (props.variant) {
    case "assist": {
      const { variant: _, ...rest } = props;
      return <AssistChip {...rest} />;
    }
    case "filter": {
      const { variant: _, ...rest } = props;
      return <FilterChip {...rest} />;
    }
    case "input": {
      const { variant: _, ...rest } = props;
      return <InputChip {...rest} />;
    }
    case "suggestion": {
      const { variant: _, ...rest } = props;
      return <SuggestionChip {...rest} />;
    }
  }
}

Chip.displayName = "Chip";

function AssistChip({
  elevated = false,
  leadingIcon,
  "data-dragged": dragged,
  className,
  children,
  ...props
}: Omit<AssistChipProps, "variant">) {
  const chipClassName = assistChipStyle({ variant: elevated ? "elevated" : "flat" });
  const mergedClassName = mergeClasses([chipClassName, className, light]);

  return (
    <BaseButton
      className={mergedClassName}
      data-leading-icon={leadingIcon ? "true" : undefined}
      data-dragged={dragged ? "true" : undefined}
      {...props}
    >
      {leadingIcon ? <span className={chipLeadingIconStyle}>{leadingIcon}</span> : null}
      {children}
    </BaseButton>
  );
}

function FilterChip({
  elevated = false,
  leadingIcon,
  trailingIcon,
  "data-dragged": dragged,
  className,
  children,
  ...props
}: Omit<FilterChipProps, "variant">) {
  const chipClassName = filterChipStyle({ variant: elevated ? "elevated" : "flat" });
  const mergedClassName = mergeClasses([chipClassName, className, light]);

  return (
    <BaseButton
      className={mergedClassName}
      data-leading-icon={leadingIcon ? "true" : undefined}
      data-trailing-icon={trailingIcon ? "true" : undefined}
      data-dragged={dragged ? "true" : undefined}
      {...props}
    >
      {leadingIcon ? <span className={chipLeadingIconStyle}>{leadingIcon}</span> : null}
      {children}
      {trailingIcon ? <span className={chipTrailingIconStyle}>{trailingIcon}</span> : null}
    </BaseButton>
  );
}

function InputChip({
  leadingIcon,
  trailingIcon,
  "data-dragged": dragged,
  className,
  children,
  ...props
}: Omit<InputChipProps, "variant" | "elevated">) {
  const mergedClassName = mergeClasses([inputChipStyle, className, light]);

  return (
    <BaseButton
      className={mergedClassName}
      data-leading-icon={leadingIcon ? "true" : undefined}
      data-trailing-icon
      data-dragged={dragged ? "true" : undefined}
      render={<span />}
      data-slot="root"
      {...props}
    >
      {leadingIcon ? <span className={chipLeadingIconStyle}>{leadingIcon}</span> : null}
      {children}
      <BaseButton className={inputChipTrailingIconStyle}>{trailingIcon}</BaseButton>
    </BaseButton>
  );
}

function SuggestionChip({
  elevated = false,
  leadingIcon,
  "data-dragged": dragged,
  className,
  children,
  ...props
}: Omit<SuggestionChipProps, "variant">) {
  const chipClassName = suggestionChipStyle({ variant: elevated ? "elevated" : "flat" });
  const mergedClassName = mergeClasses([chipClassName, className, light]);

  return (
    <BaseButton
      className={mergedClassName}
      data-leading-icon={leadingIcon ? "true" : undefined}
      data-dragged={dragged ? "true" : undefined}
      {...props}
    >
      {leadingIcon ? <span className={chipLeadingIconStyle}>{leadingIcon}</span> : null}
      {children}
    </BaseButton>
  );
}
