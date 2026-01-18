import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { withOpacity } from "../../utils/utils.js";
import { filledTextField } from "./token.js";

// attributes
const defaultWidth = "320px";

const topPadding = "8px";
const bottomPadding = "8px";

const leftPaddingWithLeadingIcon = "12px";
const leftPaddingWithoutLeadingIcon = "16px";
const rightPaddingWithTrailingIcon = "12px";
const rightPaddingWithoutTrailingIcon = "16px";

const paddingBetweenIconAndText = "16px";
// Character counting isn't supported yet.
// const paddingBetweenSupportingTextAndCharacterCounter = "16px";

const supportingTextTopPadding = "4px";

// vars
const leftPadding = createVar();
const rightPadding = createVar();
const leadingIconColor = createVar();
const focusedLeadingIconColor = createVar();
const hoveredLeadingIconColor = createVar();
const trailingIconColor = createVar();
const focusedTrailingIconColor = createVar();
const hoveredTrailingIconColor = createVar();
const supportingTextColor = createVar();
const focusedSupportingTextColor = createVar();
const hoveredSupportingTextColor = createVar();
const inputTextColor = createVar();
const caretColor = createVar();
const activeIndicatorColor = createVar();
const focusedActiveIndicatorColor = createVar();
const hoveredActiveIndicatorColor = createVar();
const labelTextColor = createVar();
const focusedLabelTextColor = createVar();
const hoveredLabelTextColor = createVar();

// states

const disabled = "[data-disabled]";
const focused = `[data-focused]:not(${disabled})`;
const hovered = `:hover:not(:is(${disabled}, ${focused}))`;
const enabled = `:not(:is(${disabled}, ${focused}, ${hovered}))`;

const populated = "[data-filled]";

const contentState = {
  get empty() {
    return `:not(.${textFieldRootStyle}${populated})`;
  },
  get populated() {
    return `.${textFieldRootStyle}${populated}`;
  },
} as const;

const interactionState = {
  get disabled() {
    return `.${textFieldRootStyle}${disabled}`;
  },
  get focused() {
    return `.${textFieldRootStyle}${focused}`;
  },
  get hovered() {
    return `.${textFieldRootStyle}${hovered}`;
  },
  get enabled() {
    return `.${textFieldRootStyle}${enabled}`;
  },
} as const;

// styles: root
export const textFieldRootStyle = style({
  position: "relative",
  cursor: "pointer",
  width: defaultWidth,
});

// styles: leading icon
export const textFieldLeadingIconStyle = recipe({
  base: {
    position: "absolute",
    top: `calc(${filledTextField.container.height} / 2)`,
    left: leftPaddingWithLeadingIcon,
    transform: "translateY(-50%)",
    width: filledTextField.leadingIcon.size,
    height: filledTextField.leadingIcon.size,

    color: leadingIconColor,

    selectors: {
      [`${interactionState.hovered} &`]: {
        color: hoveredLeadingIconColor,
      },
      [`${interactionState.focused} &`]: {
        color: focusedLeadingIconColor,
      },
      [`${interactionState.disabled} &`]: {
        color: withOpacity(
          filledTextField.disabled.leadingIcon.color,
          filledTextField.disabled.leadingIcon.opacity,
        ),
      },
    },
  },
  variants: {
    invalid: {
      true: {
        vars: {
          [leadingIconColor]: filledTextField.error.leadingIcon.color,
          [focusedLeadingIconColor]: filledTextField.error.focus.leadingIcon.color,
          [hoveredLeadingIconColor]: filledTextField.error.hover.leadingIcon.color,
        },
      },
      false: {
        vars: {
          [leadingIconColor]: filledTextField.leadingIcon.color,
          [focusedLeadingIconColor]: filledTextField.focus.leadingIcon.color,
          [hoveredLeadingIconColor]: filledTextField.hover.leadingIcon.color,
        },
      },
    },
  },
});

// styles: trailing icon
export const textFieldTrailingIconStyle = recipe({
  base: {
    position: "absolute",
    top: `calc(${filledTextField.container.height} / 2)`,
    right: rightPaddingWithTrailingIcon,
    transform: "translateY(-50%)",
    width: filledTextField.trailingIcon.size,
    height: filledTextField.trailingIcon.size,

    color: trailingIconColor,

    selectors: {
      [`${interactionState.hovered} &`]: {
        color: hoveredTrailingIconColor,
      },
      [`${interactionState.focused} &`]: {
        color: focusedTrailingIconColor,
      },
      [`${interactionState.disabled} &`]: {
        color: withOpacity(
          filledTextField.disabled.trailingIcon.color,
          filledTextField.disabled.trailingIcon.opacity,
        ),
      },
    },
  },
  variants: {
    invalid: {
      true: {
        vars: {
          [trailingIconColor]: filledTextField.error.trailingIcon.color,
          [focusedTrailingIconColor]: filledTextField.error.focus.trailingIcon.color,
          [hoveredTrailingIconColor]: filledTextField.error.hover.trailingIcon.color,
        },
      },
      false: {
        vars: {
          [trailingIconColor]: filledTextField.trailingIcon.color,
          [focusedTrailingIconColor]: filledTextField.focus.trailingIcon.color,
          [hoveredTrailingIconColor]: filledTextField.hover.trailingIcon.color,
        },
      },
    },
  },
});

// styles: supporting text
export const textFieldSupportingTextStyle = recipe({
  base: {
    margin: 0,
    cursor: "auto",
    padding: `${supportingTextTopPadding} 16px 0`,

    overflowWrap: "anywhere",
    lineBreak: "strict",

    lineHeight: filledTextField.supportingText.lineHeight,
    letterSpacing: filledTextField.supportingText.tracking,
    color: supportingTextColor,
    font: filledTextField.supportingText.font,
    fontSize: filledTextField.supportingText.size,
    fontWeight: filledTextField.supportingText.weight,

    selectors: {
      [`${interactionState.hovered} &`]: {
        color: hoveredSupportingTextColor,
      },
      [`${interactionState.focused} &`]: {
        color: focusedSupportingTextColor,
      },
      [`${interactionState.disabled} &`]: {
        color: withOpacity(
          filledTextField.disabled.supportingText.color,
          filledTextField.disabled.supportingText.opacity,
        ),
      },
    },
  },
  variants: {
    invalid: {
      true: {
        vars: {
          [supportingTextColor]: filledTextField.error.supportingText.color,
          [focusedSupportingTextColor]: filledTextField.error.focus.supportingText.color,
          [hoveredSupportingTextColor]: filledTextField.error.hover.supportingText.color,
        },
      },
      false: {
        vars: {
          [supportingTextColor]: filledTextField.supportingText.color,
          [focusedSupportingTextColor]: filledTextField.focus.supportingText.color,
          [hoveredSupportingTextColor]: filledTextField.hover.supportingText.color,
        },
      },
    },
  },
});

// styles: control
export const textFieldControlStyle = style({
  gridColumn: "2",
  outline: "none",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  padding: "0",
  minWidth: 0,
  maxWidth: "100%",

  lineHeight: filledTextField.inputText.lineHeight,
  letterSpacing: filledTextField.inputText.tracking,
  font: filledTextField.inputText.font,
  fontSize: filledTextField.inputText.size,
  fontWeight: filledTextField.inputText.weight,

  selectors: {
    "&::placeholder": {
      color: "transparent",
    },
    [`${contentState.empty}${interactionState.focused} &::placeholder`]: {
      color: filledTextField.inputText.placeholder.color,
    },
    // Textarea-specific styles for multiline support.
    "&:is(textarea)": {
      resize: "none",
      fieldSizing: "content",
    },
    // This selector sets the vertical position of the input text.
    // Keeps the input text vertically aligned regardless of focus state.
    [`:is(${contentState.populated}, ${interactionState.focused}) &:is(textarea)`]: {
      paddingTop: `calc(${filledTextField.labelText.populated.lineHeight} + ${topPadding})`,
      // Accounts for the active indicator height and half of the remaining fixed height, excluding label/input line height and padding.
      paddingBottom: `calc(${filledTextField.focus.activeIndicator.height} + (${filledTextField.container.height} - ${filledTextField.labelText.populated.lineHeight} - ${topPadding} - ${bottomPadding} - ${filledTextField.inputText.lineHeight}) / 2 + 6px)`,
    },
    [`:is(${contentState.populated}, ${interactionState.focused}) &:is(input)`]: {
      paddingTop: filledTextField.labelText.populated.lineHeight,
    },
  },
});

// styles: input text prefix
export const textFieldInputTextPrefixStyle = style({
  display: "flex",
  gridColumn: "1",
  alignItems: "center",
  paddingTop: filledTextField.labelText.populated.lineHeight,
  whiteSpace: "nowrap",
  color: filledTextField.inputText.prefix.color,

  selectors: {
    [`${contentState.empty}.${textFieldRootStyle}:not(${focused}) &`]: {
      color: "transparent",
    },
  },
});

// styles: input text suffix
export const textFieldInputTextSuffixStyle = style({
  display: "flex",
  gridColumn: "3",
  alignItems: "center",
  paddingTop: filledTextField.labelText.populated.lineHeight,
  whiteSpace: "nowrap",
  color: filledTextField.inputText.suffix.color,

  selectors: {
    [`${contentState.empty}.${textFieldRootStyle}:not(${focused}) &`]: {
      color: "transparent",
    },
  },
});

// styles: input text
export const textFieldInputTextStyle = recipe({
  base: {
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr) auto",
    transition: "color 100ms ease",
    outline: "none",
    border: "none",

    borderRadius: filledTextField.container.shape,
    boxShadow: `inset 0 -${filledTextField.activeIndicator.height} 0 ${activeIndicatorColor}`,
    backgroundColor: filledTextField.container.color,
    padding: `0 ${rightPadding} 0 ${leftPadding}`,
    minHeight: filledTextField.container.height,
    caretColor: caretColor,
    lineHeight: filledTextField.inputText.lineHeight,
    letterSpacing: filledTextField.inputText.tracking,
    color: inputTextColor,
    font: filledTextField.inputText.font,
    fontSize: filledTextField.inputText.size,
    fontWeight: filledTextField.inputText.weight,

    selectors: {
      [`${interactionState.disabled} &`]: {
        boxShadow: `inset 0 -${filledTextField.disabled.activeIndicator.height} 0 ${withOpacity(
          filledTextField.disabled.activeIndicator.color,
          filledTextField.disabled.activeIndicator.opacity,
        )}`,
        backgroundColor: withOpacity(
          filledTextField.disabled.container.color,
          filledTextField.disabled.container.opacity,
        ),
        cursor: "not-allowed",
        color: withOpacity(
          filledTextField.disabled.inputText.color,
          filledTextField.disabled.inputText.opacity,
        ),
      },

      [`${interactionState.focused} &`]: {
        boxShadow: `inset 0 -${filledTextField.focus.activeIndicator.height} 0 ${focusedActiveIndicatorColor}`,
      },
      [`${interactionState.hovered} &`]: {
        boxShadow: `inset 0 -${filledTextField.hover.activeIndicator.height} 0 ${hoveredActiveIndicatorColor}`,
      },

      [`.${textFieldRootStyle}:not(${focused}):not(${populated}) &`]: {
        color: "transparent",
      },
    },
  },
  variants: {
    hasLeadingIcon: {
      true: {
        vars: {
          [leftPadding]: `calc(${filledTextField.leadingIcon.size} + ${leftPaddingWithLeadingIcon} + ${paddingBetweenIconAndText})`,
        },
      },
      false: {
        vars: {
          [leftPadding]: leftPaddingWithoutLeadingIcon,
        },
      },
    },
    hasTrailingIcon: {
      true: {
        vars: {
          [rightPadding]: `calc(${filledTextField.trailingIcon.size} + ${rightPaddingWithTrailingIcon} + ${paddingBetweenIconAndText})`,
        },
      },
      false: {
        vars: {
          [rightPadding]: rightPaddingWithoutTrailingIcon,
        },
      },
    },
    invalid: {
      true: {
        vars: {
          [caretColor]: filledTextField.error.focus.caret.color,
          [activeIndicatorColor]: filledTextField.error.activeIndicator.color,
          [focusedActiveIndicatorColor]: filledTextField.error.focus.activeIndicator.color,
          [hoveredActiveIndicatorColor]: filledTextField.error.hover.activeIndicator.color,
          [inputTextColor]: filledTextField.error.inputText.color,
        },
      },
      false: {
        vars: {
          [caretColor]: filledTextField.caret.color,
          [activeIndicatorColor]: filledTextField.activeIndicator.color,
          [focusedActiveIndicatorColor]: filledTextField.focus.activeIndicator.color,
          [hoveredActiveIndicatorColor]: filledTextField.hover.activeIndicator.color,
          [inputTextColor]: filledTextField.inputText.color,
        },
      },
    },
  },
  defaultVariants: {
    invalid: false,
  },
});

// styles: label
export const textFieldLabelStyle = recipe({
  base: {
    // Centers the label within the control.
    position: "absolute",
    top: `calc(${filledTextField.container.height} / 2)`,
    transform: "translateY(-50%)",

    transition:
      "transform 150ms ease, top 150ms ease, font-size 150ms ease, line-height 150ms ease",
    pointerEvents: "none",
    padding: `0 ${rightPadding} 0 ${leftPadding}`,
    lineHeight: filledTextField.labelText.lineHeight,
    letterSpacing: filledTextField.labelText.tracking,
    whiteSpace: "nowrap",
    color: labelTextColor,
    font: filledTextField.labelText.font,
    fontSize: filledTextField.labelText.size,
    fontWeight: filledTextField.labelText.weight,

    selectors: {
      [`${interactionState.disabled} &`]: {
        color: withOpacity(
          filledTextField.disabled.labelText.color,
          filledTextField.disabled.labelText.opacity,
        ),
      },
      [`${interactionState.focused} &`]: {
        color: focusedLabelTextColor,
      },
      [`${interactionState.hovered} &`]: {
        color: hoveredLabelTextColor,
      },
      // This selector sets the label position.
      [`${contentState.populated} &, ${contentState.empty}${interactionState.focused} &`]: {
        top: "8px",
        transform: "translateY(0)",
        lineHeight: filledTextField.labelText.populated.lineHeight,
        fontSize: filledTextField.labelText.populated.size,
      },
    },
  },
  variants: {
    hasLeadingIcon: {
      true: {
        vars: {
          [leftPadding]: `calc(${filledTextField.leadingIcon.size} + ${leftPaddingWithLeadingIcon} + ${paddingBetweenIconAndText})`,
        },
      },
      false: {
        vars: {
          [leftPadding]: leftPaddingWithoutLeadingIcon,
        },
      },
    },
    hasTrailingIcon: {
      true: {
        vars: {
          [rightPadding]: `calc(${filledTextField.trailingIcon.size} + ${rightPaddingWithTrailingIcon} + ${paddingBetweenIconAndText})`,
        },
      },
      false: {
        vars: {
          [rightPadding]: rightPaddingWithoutTrailingIcon,
        },
      },
    },
    invalid: {
      true: {
        vars: {
          [labelTextColor]: filledTextField.error.labelText.color,
          [focusedLabelTextColor]: filledTextField.error.focus.labelText.color,
          [hoveredLabelTextColor]: filledTextField.error.hover.labelText.color,
        },
      },
      false: {
        vars: {
          [labelTextColor]: filledTextField.labelText.color,
          [focusedLabelTextColor]: filledTextField.focus.labelText.color,
          [hoveredLabelTextColor]: filledTextField.hover.labelText.color,
        },
      },
    },
  },
  defaultVariants: {
    invalid: false,
  },
});
