import { Fieldset } from "@base-ui/react";
import { Field } from "@base-ui/react/field";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { type ComponentPropsWithoutRefAndChildren } from "../../utils/types.js";
import { joinClassNames, mergeClasses } from "../../utils/utils.js";
import * as outlinedStyles from "./outlined-text-field.css.js";
import * as filledStyles from "./filled-text-field.css.js";

interface FilledTextFieldSlotProps {
  root?: ComponentPropsWithoutRefAndChildren<typeof Field.Root>;
  label?: ComponentPropsWithoutRefAndChildren<typeof Field.Label>;
  control?: ComponentPropsWithoutRefAndChildren<typeof Field.Control>;
  error?: ComponentPropsWithoutRefAndChildren<typeof Field.Error>;
  description?: ComponentPropsWithoutRefAndChildren<typeof Field.Description>;
  inputWrapper?: ComponentPropsWithoutRefAndChildren<"div">;
  leadingIcon?: ComponentPropsWithoutRefAndChildren<"span">;
  trailingIcon?: ComponentPropsWithoutRefAndChildren<"span">;
  prefix?: ComponentPropsWithoutRefAndChildren<"span">;
  suffix?: ComponentPropsWithoutRefAndChildren<"span">;
}

interface OutlinedTextFieldSlotProps extends FilledTextFieldSlotProps {
  outlineWrapper?: ComponentPropsWithoutRefAndChildren<"div">;
  fieldset?: ComponentPropsWithoutRefAndChildren<typeof Fieldset.Root>;
  legend?: ComponentPropsWithoutRefAndChildren<typeof Fieldset.Legend>;
  outlineFieldset?: ComponentPropsWithoutRefAndChildren<typeof Fieldset.Root>;
  outlineLegend?: ComponentPropsWithoutRefAndChildren<typeof Fieldset.Legend>;
}

interface TextFieldProps extends ComponentPropsWithoutRefAndChildren<typeof Field.Root> {
  label?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  prefixText?: string;
  suffixText?: string;
  supportingText?: string;
  multiline?: boolean;
}

interface FilledTextFieldProps extends TextFieldProps {
  variant?: "filled";
  slotProps?: FilledTextFieldSlotProps;
}

interface OutlinedTextFieldProps extends TextFieldProps {
  variant: "outlined";
  slotProps?: OutlinedTextFieldSlotProps;
}

type TextFieldVariantProps = FilledTextFieldProps | OutlinedTextFieldProps;

type FilledTextFieldRenderProps = Omit<FilledTextFieldProps, "variant">;
type OutlinedTextFieldRenderProps = Omit<OutlinedTextFieldProps, "variant">;

export default function TextField({ variant = "filled", ...props }: TextFieldVariantProps) {
  if (variant === "outlined") {
    return <OutlinedTextField {...props} />;
  }

  return <FilledTextField {...props} />;
}

function FilledTextField({
  invalid = false,
  multiline = false,
  label,
  leadingIcon,
  trailingIcon,
  prefixText,
  suffixText,
  supportingText,
  slotProps,
  ...props
}: FilledTextFieldRenderProps) {
  const rootSlotProps = slotProps?.root;
  const labelSlotProps = slotProps?.label;
  const controlSlotProps = slotProps?.control;
  const errorSlotProps = slotProps?.error;
  const descriptionSlotProps = slotProps?.description;
  const {
    onMouseDown: inputWrapperOnMouseDown,
    onClick: inputWrapperOnClick,
    className: inputWrapperClassName,
    ...inputWrapperSlotProps
  } = slotProps?.inputWrapper ?? {};
  const leadingIconSlotProps = slotProps?.leadingIcon;
  const trailingIconSlotProps = slotProps?.trailingIcon;
  const prefixSlotProps = slotProps?.prefix;
  const suffixSlotProps = slotProps?.suffix;

  const labelClassName = filledStyles.textFieldLabelStyle({
    invalid,
    hasLeadingIcon: leadingIcon !== undefined,
    hasTrailingIcon: Boolean(supportingText),
  });
  const inputTextClassName = filledStyles.textFieldInputTextStyle({
    invalid,
    hasLeadingIcon: leadingIcon !== undefined,
    hasTrailingIcon: trailingIcon !== undefined,
  });
  const supportingTextClassName = filledStyles.textFieldSupportingTextStyle({ invalid });

  const mergedLabelClassName = mergeClasses([labelClassName, labelSlotProps?.className]);
  const mergedRootClassName = mergeClasses([
    filledStyles.textFieldRootStyle,
    props.className,
    rootSlotProps?.className,
  ]);
  const mergedErrorClassName = mergeClasses([supportingTextClassName, errorSlotProps?.className]);
  const mergedDescriptionClassName = mergeClasses([
    supportingTextClassName,
    descriptionSlotProps?.className,
  ]);

  // Used to focus the input when the prefix or suffix is clicked.
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const setInputRef = (el: HTMLInputElement | HTMLTextAreaElement | null) => {
    inputRef.current = el;
  };
  const focusInput = () => inputRef.current?.focus();
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    inputWrapperOnMouseDown?.(e);
    e.preventDefault();
  };
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    inputWrapperOnClick?.(e);
    focusInput();
  };

  return (
    <Field.Root {...props} {...rootSlotProps} className={mergedRootClassName}>
      {label ? (
        <Field.Label {...labelSlotProps} className={mergedLabelClassName}>
          {label}
        </Field.Label>
      ) : null}
      {leadingIcon ? (
        <span
          {...leadingIconSlotProps}
          className={joinClassNames(
            filledStyles.textFieldLeadingIconStyle({ invalid }),
            leadingIconSlotProps?.className,
          )}
        >
          {leadingIcon}
        </span>
      ) : null}
      {trailingIcon ? (
        <span
          {...trailingIconSlotProps}
          className={joinClassNames(
            filledStyles.textFieldTrailingIconStyle({ invalid }),
            trailingIconSlotProps?.className,
          )}
        >
          {trailingIcon}
        </span>
      ) : null}
      <div
        {...inputWrapperSlotProps}
        className={joinClassNames(inputTextClassName, inputWrapperClassName)}
        onMouseDown={handleMouseDown}
        onClick={handleClick}
      >
        {prefixText ? (
          <span
            {...prefixSlotProps}
            className={joinClassNames(
              filledStyles.textFieldInputTextPrefixStyle,
              prefixSlotProps?.className,
            )}
          >
            {prefixText}
          </span>
        ) : null}
        <Field.Control
          ref={setInputRef}
          {...controlSlotProps}
          className={filledStyles.textFieldControlStyle}
          render={multiline ? <textarea /> : <input />}
        />
        {suffixText ? (
          <span
            {...suffixSlotProps}
            className={joinClassNames(
              filledStyles.textFieldInputTextSuffixStyle,
              suffixSlotProps?.className,
            )}
          >
            {suffixText}
          </span>
        ) : null}
      </div>
      {supportingText &&
        (invalid ? (
          <Field.Error match {...errorSlotProps} className={mergedErrorClassName}>
            {supportingText}
          </Field.Error>
        ) : (
          <Field.Description {...descriptionSlotProps} className={mergedDescriptionClassName}>
            {supportingText}
          </Field.Description>
        ))}
    </Field.Root>
  );
}

function OutlinedTextField({
  invalid = false,
  multiline = false,
  label,
  leadingIcon,
  trailingIcon,
  prefixText,
  suffixText,
  supportingText,
  slotProps,
  ...props
}: OutlinedTextFieldRenderProps) {
  const rootSlotProps = slotProps?.root;
  const labelSlotProps = slotProps?.label;
  const controlSlotProps = slotProps?.control;
  const errorSlotProps = slotProps?.error;
  const descriptionSlotProps = slotProps?.description;
  const outlineWrapperSlotProps = slotProps?.outlineWrapper;
  const fieldsetSlotProps = slotProps?.fieldset;
  const legendSlotProps = slotProps?.legend;
  const outlineFieldsetSlotProps = slotProps?.outlineFieldset;
  const outlineLegendSlotProps = slotProps?.outlineLegend;
  const {
    onMouseDown: inputWrapperOnMouseDown,
    onClick: inputWrapperOnClick,
    className: inputWrapperClassName,
    ...inputWrapperSlotProps
  } = slotProps?.inputWrapper ?? {};
  const leadingIconSlotProps = slotProps?.leadingIcon;
  const trailingIconSlotProps = slotProps?.trailingIcon;
  const prefixSlotProps = slotProps?.prefix;
  const suffixSlotProps = slotProps?.suffix;

  const labelClassName = outlinedStyles.textFieldLabelStyle({
    invalid,
    hasLeadingIcon: leadingIcon !== undefined,
    hasTrailingIcon: Boolean(supportingText),
  });
  const inputTextClassName = outlinedStyles.textFieldInputTextStyle({
    invalid,
    hasLeadingIcon: leadingIcon !== undefined,
    hasTrailingIcon: trailingIcon !== undefined,
  });
  const supportingTextClassName = outlinedStyles.textFieldSupportingTextStyle({ invalid });

  const mergedLabelClassName = mergeClasses([labelClassName, labelSlotProps?.className]);
  const mergedRootClassName = mergeClasses([
    outlinedStyles.textFieldRootStyle,
    props.className,
    rootSlotProps?.className,
  ]);
  const mergedErrorClassName = mergeClasses([supportingTextClassName, errorSlotProps?.className]);
  const mergedDescriptionClassName = mergeClasses([
    supportingTextClassName,
    descriptionSlotProps?.className,
  ]);

  // Used to focus the input when the prefix or suffix is clicked.
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const setInputRef = (el: HTMLInputElement | HTMLTextAreaElement | null) => {
    inputRef.current = el;
  };
  const focusInput = () => inputRef.current?.focus();
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    inputWrapperOnMouseDown?.(e);
    e.preventDefault();
  };
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    inputWrapperOnClick?.(e);
    focusInput();
  };

  return (
    <Field.Root {...props} {...rootSlotProps} className={mergedRootClassName}>
      <div
        {...outlineWrapperSlotProps}
        className={joinClassNames(
          outlinedStyles.textFieldOutlineWrapperStyle,
          outlineWrapperSlotProps?.className,
        )}
      >
        <Fieldset.Root
          {...fieldsetSlotProps}
          className={mergeClasses([
            outlinedStyles.textFieldFieldsetStyle({ invalid }),
            fieldsetSlotProps?.className,
          ])}
        >
          {label ? (
            <>
              <Fieldset.Legend
                render={<legend />}
                {...legendSlotProps}
                className={mergeClasses([
                  outlinedStyles.textFieldLegendStyle({
                    hasLeadingIcon: leadingIcon !== undefined,
                  }),
                  legendSlotProps?.className,
                ])}
              >
                {/* Legend creates the outline notch; actual visible/accessible label is Field.Label. */}
                <span className={outlinedStyles.textFieldLegendTextStyle} aria-hidden="true">
                  {label}
                </span>
              </Fieldset.Legend>
              <Field.Label {...labelSlotProps} className={mergedLabelClassName}>
                {label}
              </Field.Label>
            </>
          ) : null}
          {leadingIcon ? (
            <span
              {...leadingIconSlotProps}
              className={joinClassNames(
                outlinedStyles.textFieldLeadingIconStyle({ invalid }),
                leadingIconSlotProps?.className,
              )}
            >
              {leadingIcon}
            </span>
          ) : null}
          {trailingIcon ? (
            <span
              {...trailingIconSlotProps}
              className={joinClassNames(
                outlinedStyles.textFieldTrailingIconStyle({ invalid }),
                trailingIconSlotProps?.className,
              )}
            >
              {trailingIcon}
            </span>
          ) : null}
          <div
            {...inputWrapperSlotProps}
            className={joinClassNames(inputTextClassName, inputWrapperClassName)}
            onMouseDown={handleMouseDown}
            onClick={handleClick}
          >
            {prefixText ? (
              <span
                {...prefixSlotProps}
                className={joinClassNames(
                  outlinedStyles.textFieldInputTextPrefixStyle,
                  prefixSlotProps?.className,
                )}
              >
                {prefixText}
              </span>
            ) : null}
            <Field.Control
              ref={setInputRef}
              {...controlSlotProps}
              className={outlinedStyles.textFieldControlStyle}
              render={multiline ? <textarea /> : <input />}
            />
            {suffixText ? (
              <span
                {...suffixSlotProps}
                className={joinClassNames(
                  outlinedStyles.textFieldInputTextSuffixStyle,
                  suffixSlotProps?.className,
                )}
              >
                {suffixText}
              </span>
            ) : null}
          </div>
        </Fieldset.Root>
        <Fieldset.Root
          {...outlineFieldsetSlotProps}
          className={mergeClasses([
            outlinedStyles.textFieldOutlineStyle({ invalid }),
            outlineFieldsetSlotProps?.className,
          ])}
          aria-hidden="true"
        >
          {label ? (
            <Fieldset.Legend
              render={<legend />}
              {...outlineLegendSlotProps}
              className={mergeClasses([
                outlinedStyles.textFieldOutlineLegendStyle({
                  hasLeadingIcon: leadingIcon !== undefined,
                }),
                outlineLegendSlotProps?.className,
              ])}
            >
              <span className={outlinedStyles.textFieldLegendTextStyle} aria-hidden="true">
                {label}
              </span>
            </Fieldset.Legend>
          ) : null}
        </Fieldset.Root>
      </div>
      {supportingText &&
        (invalid ? (
          <Field.Error match {...errorSlotProps} className={mergedErrorClassName}>
            {supportingText}
          </Field.Error>
        ) : (
          <Field.Description {...descriptionSlotProps} className={mergedDescriptionClassName}>
            {supportingText}
          </Field.Description>
        ))}
    </Field.Root>
  );
}

TextField.displayName = "TextField";
