import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { withOpacity } from "../../utils/utils.js";
import { outlinedTextField } from "../../theme/token.js";

// attributes
const defaultWidth = "320px";
const topPadding = "8px";
const bottomPadding = "8px";

const leftPaddingWithLeadingIcon = "12px";
const leftPaddingWithoutLeadingIcon = "16px";
const rightPaddingWithTrailingIcon = "12px";
const rightPaddingWithoutTrailingIcon = "16px";

const paddingBetweenIconAndText = "16px";
const labelGapPadding = "4px";
// Character counting isn't supported yet.
// const paddingBetweenSupportingTextAndCharacterCounter = "16px";

const supportingTextTopPadding = "4px";

// shared
// Left padding for input when a leading icon is present.
const inputPaddingLeftWithLeadingIcon = `calc(${outlinedTextField.leadingIcon.size} + ${leftPaddingWithLeadingIcon} + ${paddingBetweenIconAndText})`;
// Right padding for input when a trailing icon is present.
const inputPaddingRightWithTrailingIcon = `calc(${outlinedTextField.trailingIcon.size} + ${rightPaddingWithTrailingIcon} + ${paddingBetweenIconAndText})`;
// Vertical position used to center icons and label in the container.
const iconCenterTop = `calc(${outlinedTextField.container.height} / 2 + ${outlinedTextField.labelText.populated.lineHeight} / 2)`;

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
const outlineColor = createVar();
const focusedOutlineColor = createVar();
const hoveredOutlineColor = createVar();
const outlineWidth = createVar();
const focusedOutlineWidth = createVar();
const hoveredOutlineWidth = createVar();
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

export const textFieldOutlineWrapperStyle = style({
  position: "relative",
  width: "100%",
});

export const textFieldFieldsetStyle = recipe({
  base: {
    boxSizing: "border-box",
    margin: 0,
    borderWidth: outlineWidth,
    borderStyle: "solid",
    borderRadius: outlinedTextField.container.shape,
    borderColor: outlineColor,
    padding: 0,
    width: "100%",
    minWidth: 0,
    minHeight: outlinedTextField.container.height,

    selectors: {
      [`${interactionState.disabled} &`]: {
        borderWidth: outlinedTextField.disabled.outline.width,
        borderColor: withOpacity(
          outlinedTextField.disabled.outline.color,
          outlinedTextField.disabled.outline.opacity,
        ),
      },
      [`${interactionState.focused} &`]: {
        borderColor: "transparent",
      },
      [`${interactionState.hovered} &`]: {
        borderColor: hoveredOutlineColor,
      },
    },
  },
  variants: {
    invalid: {
      true: {
        vars: {
          [outlineWidth]: outlinedTextField.outline.width,
          [outlineColor]: outlinedTextField.error.outline.color,
          [focusedOutlineColor]: outlinedTextField.error.focus.outline.color,
          [hoveredOutlineColor]: outlinedTextField.error.hover.outline.color,
          [focusedOutlineWidth]: outlinedTextField.focus.outline.width,
          [hoveredOutlineWidth]: outlinedTextField.hover.outline.width,
        },
      },
      false: {
        vars: {
          [outlineWidth]: outlinedTextField.outline.width,
          [outlineColor]: outlinedTextField.outline.color,
          [focusedOutlineColor]: outlinedTextField.focus.outline.color,
          [hoveredOutlineColor]: outlinedTextField.hover.outline.color,
          [focusedOutlineWidth]: outlinedTextField.focus.outline.width,
          [hoveredOutlineWidth]: outlinedTextField.hover.outline.width,
        },
      },
    },
  },
  defaultVariants: {
    invalid: false,
  },
});

// style: outline
export const textFieldOutlineStyle = recipe({
  base: {
    boxSizing: "border-box",
    position: "absolute",
    top: outlinedTextField.outline.width,
    inset: 0,
    opacity: 0,
    margin: 0,
    borderWidth: focusedOutlineWidth,
    borderStyle: "solid",
    borderRadius: outlinedTextField.container.shape,
    borderColor: focusedOutlineColor,
    pointerEvents: "none",
    padding: 0,
    width: "100%",
    minWidth: 0,
    height: `calc(100% - ${outlinedTextField.outline.width})`,

    selectors: {
      [`${interactionState.focused} &`]: {
        opacity: 1,
      },
      [`${interactionState.disabled} &`]: {
        opacity: 0,
      },
    },
  },
  variants: {
    invalid: {
      true: {
        vars: {
          [focusedOutlineColor]: outlinedTextField.error.focus.outline.color,
          [focusedOutlineWidth]: outlinedTextField.focus.outline.width,
        },
      },
      false: {
        vars: {
          [focusedOutlineColor]: outlinedTextField.focus.outline.color,
          [focusedOutlineWidth]: outlinedTextField.focus.outline.width,
        },
      },
    },
  },
  defaultVariants: {
    invalid: false,
  },
});

export const textFieldOutlineLegendStyle = recipe({
  base: {
    transition: "max-width 150ms ease, padding 150ms ease, margin-left 150ms ease",
    padding: 0,
    maxWidth: 0,
    height: outlinedTextField.labelText.populated.lineHeight,
    overflow: "hidden",
    whiteSpace: "nowrap",

    selectors: {
      [`${contentState.populated} &, ${contentState.empty}${interactionState.focused} &`]: {
        // Legend offset for the floating label state.
        marginLeft: `calc(${leftPaddingWithoutLeadingIcon} - ${labelGapPadding} - ${outlinedTextField.focus.outline.width} + ${outlinedTextField.outline.width})`,
        padding: `0 ${labelGapPadding}`,
        maxWidth: "100%",
      },
    },
  },
  variants: {
    hasLeadingIcon: {
      true: {
        vars: {
          [leftPadding]: inputPaddingLeftWithLeadingIcon,
        },
      },
      false: {
        vars: {
          [leftPadding]: leftPaddingWithoutLeadingIcon,
        },
      },
    },
  },
});

export const textFieldLegendStyle = recipe({
  base: {
    transition: "max-width 150ms ease, padding 150ms ease, margin-left 150ms ease",
    padding: 0,
    maxWidth: 0,
    height: outlinedTextField.labelText.populated.lineHeight,
    overflow: "hidden",
    whiteSpace: "nowrap",

    selectors: {
      [`${contentState.populated} &, ${contentState.empty}${interactionState.focused} &`]: {
        // Legend offset for the resting label state.
        marginLeft: `calc(${leftPaddingWithoutLeadingIcon} - ${labelGapPadding})`,
        padding: `0 ${labelGapPadding}`,
        maxWidth: "100%",
      },
    },
  },
  variants: {
    hasLeadingIcon: {
      true: {
        vars: {
          [leftPadding]: inputPaddingLeftWithLeadingIcon,
        },
      },
      false: {
        vars: {
          [leftPadding]: leftPaddingWithoutLeadingIcon,
        },
      },
    },
  },
});

export const textFieldLegendTextStyle = style({
  display: "inline-block",
  visibility: "hidden",
  padding: 0,
  lineHeight: outlinedTextField.labelText.populated.lineHeight,
  letterSpacing: outlinedTextField.labelText.tracking,
  font: outlinedTextField.labelText.font,
  fontSize: outlinedTextField.labelText.populated.size,
  fontWeight: outlinedTextField.labelText.weight,
});

// styles: leading icon
export const textFieldLeadingIconStyle = recipe({
  base: {
    position: "absolute",

    top: iconCenterTop,
    left: leftPaddingWithLeadingIcon,
    transform: "translateY(-50%)",
    width: outlinedTextField.leadingIcon.size,
    height: outlinedTextField.leadingIcon.size,

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
          outlinedTextField.disabled.leadingIcon.color,
          outlinedTextField.disabled.leadingIcon.opacity,
        ),
      },
    },
  },
  variants: {
    invalid: {
      true: {
        vars: {
          [leadingIconColor]: outlinedTextField.error.leadingIcon.color,
          [focusedLeadingIconColor]: outlinedTextField.error.focus.leadingIcon.color,
          [hoveredLeadingIconColor]: outlinedTextField.error.hover.leadingIcon.color,
        },
      },
      false: {
        vars: {
          [leadingIconColor]: outlinedTextField.leadingIcon.color,
          [focusedLeadingIconColor]: outlinedTextField.focus.leadingIcon.color,
          [hoveredLeadingIconColor]: outlinedTextField.hover.leadingIcon.color,
        },
      },
    },
  },
});

// styles: trailing icon
export const textFieldTrailingIconStyle = recipe({
  base: {
    position: "absolute",
    top: iconCenterTop,
    right: rightPaddingWithTrailingIcon,
    transform: "translateY(-50%)",

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
          outlinedTextField.disabled.trailingIcon.color,
          outlinedTextField.disabled.trailingIcon.opacity,
        ),
      },
    },
  },
  variants: {
    invalid: {
      true: {
        vars: {
          [trailingIconColor]: outlinedTextField.error.trailingIcon.color,
          [focusedTrailingIconColor]: outlinedTextField.error.focus.trailingIcon.color,
          [hoveredTrailingIconColor]: outlinedTextField.error.hover.trailingIcon.color,
        },
      },
      false: {
        vars: {
          [trailingIconColor]: outlinedTextField.trailingIcon.color,
          [focusedTrailingIconColor]: outlinedTextField.focus.trailingIcon.color,
          [hoveredTrailingIconColor]: outlinedTextField.hover.trailingIcon.color,
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

    lineHeight: outlinedTextField.supportingText.lineHeight,
    letterSpacing: outlinedTextField.supportingText.tracking,
    color: supportingTextColor,
    font: outlinedTextField.supportingText.font,
    fontSize: outlinedTextField.supportingText.size,
    fontWeight: outlinedTextField.supportingText.weight,

    selectors: {
      [`${interactionState.hovered} &`]: {
        color: hoveredSupportingTextColor,
      },
      [`${interactionState.focused} &`]: {
        color: focusedSupportingTextColor,
      },
      [`${interactionState.disabled} &`]: {
        color: withOpacity(
          outlinedTextField.disabled.supportingText.color,
          outlinedTextField.disabled.supportingText.opacity,
        ),
      },
    },
  },
  variants: {
    invalid: {
      true: {
        vars: {
          [supportingTextColor]: outlinedTextField.error.supportingText.color,
          [focusedSupportingTextColor]: outlinedTextField.error.focus.supportingText.color,
          [hoveredSupportingTextColor]: outlinedTextField.error.hover.supportingText.color,
        },
      },
      false: {
        vars: {
          [supportingTextColor]: outlinedTextField.supportingText.color,
          [focusedSupportingTextColor]: outlinedTextField.focus.supportingText.color,
          [hoveredSupportingTextColor]: outlinedTextField.hover.supportingText.color,
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
  padding: `${topPadding} 0 ${bottomPadding} 0`,
  minWidth: 0,
  maxWidth: "100%",

  lineHeight: outlinedTextField.inputText.lineHeight,
  letterSpacing: outlinedTextField.inputText.tracking,
  font: outlinedTextField.inputText.font,
  fontSize: outlinedTextField.inputText.size,
  fontWeight: outlinedTextField.inputText.weight,

  selectors: {
    "&::placeholder": {
      color: "transparent",
    },
    [`${contentState.empty}${interactionState.focused} &::placeholder`]: {
      color: outlinedTextField.inputText.placeholder.color,
    },
    // Textarea-specific styles for multiline support.
    "&:is(textarea)": {
      resize: "none",
      fieldSizing: "content",
    },
    // This selector sets the vertical position of the input text.
    // Keeps the input text vertically aligned regardless of focus state.
    [`:is(${contentState.populated}, ${interactionState.focused}) &:is(textarea)`]: {
      margin: "auto 0",
    },
  },
});

// styles: input text prefix
export const textFieldInputTextPrefixStyle = style({
  display: "flex",
  gridColumn: "1",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: outlinedTextField.inputText.prefix.color,

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
  whiteSpace: "nowrap",
  color: outlinedTextField.inputText.suffix.color,

  selectors: {
    [`${contentState.empty}.${textFieldRootStyle}:not(${focused}) &`]: {
      color: "transparent",
    },
  },
});

// styles: input text
export const textFieldInputTextStyle = recipe({
  base: {
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr) auto",

    transition: "color 100ms ease",
    // Vertical offset used to align input text in the field.
    marginTop: `calc(-1 * ${outlinedTextField.labelText.populated.lineHeight} / 2)`,
    outline: "none",
    border: "none",
    borderRadius: outlinedTextField.container.shape,
    backgroundColor: "transparent",
    padding: `0 ${rightPadding} 0 ${leftPadding}`,
    minHeight: outlinedTextField.container.height,
    caretColor: caretColor,
    lineHeight: outlinedTextField.inputText.lineHeight,
    letterSpacing: outlinedTextField.inputText.tracking,
    color: inputTextColor,
    font: outlinedTextField.inputText.font,
    fontSize: outlinedTextField.inputText.size,
    fontWeight: outlinedTextField.inputText.weight,

    selectors: {
      [`${interactionState.disabled} &`]: {
        cursor: "not-allowed",
        color: withOpacity(
          outlinedTextField.disabled.inputText.color,
          outlinedTextField.disabled.inputText.opacity,
        ),
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
          [leftPadding]: inputPaddingLeftWithLeadingIcon,
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
          [rightPadding]: inputPaddingRightWithTrailingIcon,
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
          [caretColor]: outlinedTextField.error.focus.caret.color,
          [inputTextColor]: outlinedTextField.error.inputText.color,
        },
      },
      false: {
        vars: {
          [caretColor]: outlinedTextField.caret.color,
          [inputTextColor]: outlinedTextField.inputText.color,
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
    top: iconCenterTop,
    left: 0,
    transform: "translateY(-50%)",

    transition:
      "transform 150ms ease, top 150ms ease, font-size 150ms ease, line-height 150ms ease, padding-left 150ms ease",

    padding: `0 ${rightPadding} 0 ${leftPadding}`,
    lineHeight: outlinedTextField.labelText.lineHeight,
    letterSpacing: outlinedTextField.labelText.tracking,
    whiteSpace: "nowrap",
    color: labelTextColor,
    font: outlinedTextField.labelText.font,
    fontSize: outlinedTextField.labelText.size,
    fontWeight: outlinedTextField.labelText.weight,

    selectors: {
      [`${interactionState.disabled} &`]: {
        color: withOpacity(
          outlinedTextField.disabled.labelText.color,
          outlinedTextField.disabled.labelText.opacity,
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
        // top: floatingLabelOffset,
        top: `calc(${outlinedTextField.labelText.populated.lineHeight} / 2)`,
        paddingLeft: leftPaddingWithoutLeadingIcon,
        lineHeight: outlinedTextField.labelText.populated.lineHeight,
        fontSize: outlinedTextField.labelText.populated.size,
      },
    },
  },
  variants: {
    hasLeadingIcon: {
      true: {
        vars: {
          [leftPadding]: inputPaddingLeftWithLeadingIcon,
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
          [rightPadding]: inputPaddingRightWithTrailingIcon,
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
          [labelTextColor]: outlinedTextField.error.labelText.color,
          [focusedLabelTextColor]: outlinedTextField.error.focus.labelText.color,
          [hoveredLabelTextColor]: outlinedTextField.error.hover.labelText.color,
        },
      },
      false: {
        vars: {
          [labelTextColor]: outlinedTextField.labelText.color,
          [focusedLabelTextColor]: outlinedTextField.focus.labelText.color,
          [hoveredLabelTextColor]: outlinedTextField.hover.labelText.color,
        },
      },
    },
  },
  defaultVariants: {
    invalid: false,
  },
});
