import { md } from "../../theme/theme.css.js";

const filledTextFieldToken = {
  container: {
    height: "56px",
    shape: md.sys.shape.corner.extraSmallTop,
    color: md.sys.color.surfaceContainerHighest,
  },
  labelText: {
    color: md.sys.color.onSurfaceVariant,
    font: md.sys.typescale.body.large.fontFamily,
    lineHeight: md.sys.typescale.body.large.lineHeight,
    size: md.sys.typescale.body.large.fontSize,
    weight: md.sys.typescale.body.large.fontWeight,
    tracking: md.sys.typescale.body.large.letterSpacing,
    type: md.sys.typescale.body.large,
    populated: {
      lineHeight: md.sys.typescale.body.small.lineHeight,
      size: md.sys.typescale.body.small.fontSize,
    },
  },
  leadingIcon: {
    icon: {
      size: "24px",
    },
    color: md.sys.color.onSurfaceVariant,
    size: "24px",
  },
  trailingIcon: {
    icon: {
      size: "24px",
    },
    color: md.sys.color.onSurfaceVariant,
    size: "24px",
  },
  activeIndicator: {
    height: "1px",
    color: md.sys.color.onSurfaceVariant,
  },
  supportingText: {
    type: md.sys.typescale.body.small,
    color: md.sys.color.onSurfaceVariant,
    font: md.sys.typescale.body.small.fontFamily,
    lineHeight: md.sys.typescale.body.small.lineHeight,
    size: md.sys.typescale.body.small.fontSize,
    weight: md.sys.typescale.body.small.fontWeight,
    tracking: md.sys.typescale.body.small.letterSpacing,
  },
  inputText: {
    color: md.sys.color.onSurface,
    font: md.sys.typescale.body.large.fontFamily,
    lineHeight: md.sys.typescale.body.large.lineHeight,
    size: md.sys.typescale.body.large.fontSize,
    weight: md.sys.typescale.body.large.fontWeight,
    tracking: md.sys.typescale.body.large.letterSpacing,
    type: md.sys.typescale.body.large,
    prefix: {
      color: md.sys.color.onSurfaceVariant,
    },
    suffix: {
      color: md.sys.color.onSurfaceVariant,
    },
    placeholder: {
      color: md.sys.color.onSurfaceVariant,
    },
  },
  caret: {
    color: md.sys.color.primary,
  },
  disabled: {
    container: {
      color: md.sys.color.onSurface,
      opacity: "0.04",
    },
    labelText: {
      color: md.sys.color.onSurface,
      opacity: "0.38",
    },
    leadingIcon: {
      color: md.sys.color.onSurface,
      opacity: "0.38",
    },
    trailingIcon: {
      color: md.sys.color.onSurface,
      opacity: "0.38",
    },
    supportingText: {
      color: md.sys.color.onSurface,
      opacity: "0.38",
    },
    inputText: {
      color: md.sys.color.onSurface,
      opacity: "0.38",
    },
    activeIndicator: {
      height: "1px",
      color: md.sys.color.onSurface,
      opacity: "0.38",
    },
  },
  hover: {
    labelText: {
      color: md.sys.color.onSurfaceVariant,
    },
    stateLayer: {
      color: md.sys.color.onSurface,
      opacity: md.sys.state.hover.stateLayerOpacity,
    },
    leadingIcon: {
      color: md.sys.color.onSurfaceVariant,
    },
    trailingIcon: {
      color: md.sys.color.onSurfaceVariant,
    },
    inputText: {
      color: md.sys.color.onSurface,
    },
    supportingText: {
      color: md.sys.color.onSurfaceVariant,
    },
    activeIndicator: {
      height: "1px",
      color: md.sys.color.onSurface,
    },
  },
  focus: {
    labelText: {
      color: md.sys.color.primary,
    },
    leadingIcon: {
      color: md.sys.color.onSurfaceVariant,
    },
    trailingIcon: {
      color: md.sys.color.onSurfaceVariant,
    },
    inputText: {
      color: md.sys.color.onSurface,
    },
    supportingText: {
      color: md.sys.color.onSurfaceVariant,
    },
    activeIndicator: {
      height: "2px",
      color: md.sys.color.primary,
      thickness: md.sys.state.focusIndicator.thickness,
    },
  },
  error: {
    activeIndicator: {
      color: md.sys.color.error,
    },
    labelText: {
      color: md.sys.color.error,
    },
    inputText: {
      color: md.sys.color.onSurface,
    },
    supportingText: {
      color: md.sys.color.error,
    },
    leadingIcon: {
      color: md.sys.color.onSurfaceVariant,
    },
    trailingIcon: {
      color: md.sys.color.error,
    },
    focus: {
      activeIndicator: {
        color: md.sys.color.error,
      },
      labelText: {
        color: md.sys.color.error,
      },
      inputText: {
        color: md.sys.color.onSurface,
      },
      supportingText: {
        color: md.sys.color.error,
      },
      leadingIcon: {
        color: md.sys.color.onSurfaceVariant,
      },
      trailingIcon: {
        color: md.sys.color.error,
      },
      caret: {
        color: md.sys.color.error,
      },
    },
    hover: {
      activeIndicator: {
        color: md.sys.color.onErrorContainer,
      },
      labelText: {
        color: md.sys.color.onErrorContainer,
      },
      inputText: {
        color: md.sys.color.onSurface,
      },
      supportingText: {
        color: md.sys.color.error,
      },
      leadingIcon: {
        color: md.sys.color.onSurfaceVariant,
      },
      trailingIcon: {
        color: md.sys.color.onErrorContainer,
      },
      stateLayer: {
        color: md.sys.color.onSurface,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
    },
  },
};

export const filledTextField = filledTextFieldToken;

const outlinedTextFieldToken = {
  container: {
    height: "56px",
    shape: md.sys.shape.corner.extraSmall,
  },
  outline: {
    width: "1px",
    color: md.sys.color.outline,
  },
  labelText: {
    color: md.sys.color.onSurfaceVariant,
    font: md.sys.typescale.body.large.fontFamily,
    lineHeight: md.sys.typescale.body.large.lineHeight,
    size: md.sys.typescale.body.large.fontSize,
    weight: md.sys.typescale.body.large.fontWeight,
    tracking: md.sys.typescale.body.large.letterSpacing,
    type: md.sys.typescale.body.large,
    populated: {
      lineHeight: md.sys.typescale.body.small.lineHeight,
      size: md.sys.typescale.body.small.fontSize,
    },
  },
  leadingIcon: {
    icon: {
      size: "24px",
    },
    color: md.sys.color.onSurfaceVariant,
    size: "24px",
  },
  trailingIcon: {
    icon: {
      size: "24px",
    },
    color: md.sys.color.onSurfaceVariant,
    size: "24px",
  },
  supportingText: {
    color: md.sys.color.onSurfaceVariant,
    font: md.sys.typescale.body.small.fontFamily,
    lineHeight: md.sys.typescale.body.small.lineHeight,
    size: md.sys.typescale.body.small.fontSize,
    weight: md.sys.typescale.body.small.fontWeight,
    tracking: md.sys.typescale.body.small.letterSpacing,
    type: md.sys.typescale.body.small,
  },
  inputText: {
    color: md.sys.color.onSurface,
    font: md.sys.typescale.body.large.fontFamily,
    lineHeight: md.sys.typescale.body.large.lineHeight,
    size: md.sys.typescale.body.large.fontSize,
    weight: md.sys.typescale.body.large.fontWeight,
    tracking: md.sys.typescale.body.large.letterSpacing,
    type: md.sys.typescale.body.large,
    prefix: {
      color: md.sys.color.onSurfaceVariant,
    },
    suffix: {
      color: md.sys.color.onSurfaceVariant,
    },
    placeholder: {
      color: md.sys.color.onSurfaceVariant,
    },
  },
  caret: {
    color: md.sys.color.primary,
  },
  disabled: {
    labelText: {
      color: md.sys.color.onSurface,
      opacity: "0.38",
    },
    leadingIcon: {
      color: md.sys.color.onSurface,
      opacity: "0.38",
    },
    trailingIcon: {
      color: md.sys.color.onSurface,
      opacity: "0.38",
    },
    outline: {
      width: "1px",
      color: md.sys.color.onSurface,
      opacity: "0.12",
    },
    supportingText: {
      color: md.sys.color.onSurface,
      opacity: "0.38",
    },
    inputText: {
      color: md.sys.color.onSurface,
      opacity: "0.38",
    },
  },
  hover: {
    labelText: {
      color: md.sys.color.onSurface,
    },
    leadingIcon: {
      color: md.sys.color.onSurfaceVariant,
    },
    trailingIcon: {
      color: md.sys.color.onSurfaceVariant,
    },
    outline: {
      width: "1px",
      color: md.sys.color.onSurface,
    },
    inputText: {
      color: md.sys.color.onSurface,
    },
    supportingText: {
      color: md.sys.color.onSurfaceVariant,
    },
  },
  focus: {
    labelText: {
      color: md.sys.color.primary,
    },
    leadingIcon: {
      color: md.sys.color.onSurfaceVariant,
    },
    trailingIcon: {
      color: md.sys.color.onSurfaceVariant,
    },
    outline: {
      width: "3px",
      color: md.sys.color.primary,
    },
    inputText: {
      color: md.sys.color.onSurface,
    },
    supportingText: {
      color: md.sys.color.onSurfaceVariant,
    },
    indicator: {
      outline: {
        color: md.sys.color.secondary,
        thickness: "3px",
      },
    },
  },
  error: {
    outline: {
      color: md.sys.color.error,
    },
    labelText: {
      color: md.sys.color.error,
    },
    inputText: {
      color: md.sys.color.onSurface,
    },
    supportingText: {
      color: md.sys.color.error,
    },
    leadingIcon: {
      color: md.sys.color.onSurfaceVariant,
    },
    trailingIcon: {
      color: md.sys.color.error,
    },
    focus: {
      outline: {
        color: md.sys.color.error,
      },
      labelText: {
        color: md.sys.color.error,
      },
      inputText: {
        color: md.sys.color.onSurface,
      },
      supportingText: {
        color: md.sys.color.error,
      },
      leadingIcon: {
        color: md.sys.color.onSurfaceVariant,
      },
      trailingIcon: {
        color: md.sys.color.error,
      },
      caret: {
        color: md.sys.color.error,
      },
      indicator: {
        outline: {
          color: md.sys.color.error,
        },
      },
    },
    hover: {
      outline: {
        color: md.sys.color.onErrorContainer,
      },
      labelText: {
        color: md.sys.color.onErrorContainer,
      },
      inputText: {
        color: md.sys.color.onSurface,
      },
      supportingText: {
        color: md.sys.color.error,
      },
      leadingIcon: {
        color: md.sys.color.onSurfaceVariant,
      },
      trailingIcon: {
        color: md.sys.color.onErrorContainer,
      },
    },
  },
};

export const outlinedTextField = outlinedTextFieldToken;
