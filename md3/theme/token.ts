import { md } from "./theme.css.js";

// buttons

const buttonToken = {
  small: {
    container: {
      height: "40px",
      shape: {
        round: md.sys.shape.corner.full,
      },
    },
    outlined: {
      outline: {
        width: "1px",
      },
    },
    labelText: md.sys.typescale.label.large,
    icon: {
      size: "20px",
    },
    leadingSpace: "16px",
    iconLabelSpace: "8px",
    trailingSpace: "16px",
    pressed: {
      container: {
        shape: md.sys.shape.corner.small,
        cornerSize: {
          motion: {
            spring: {
              damping: md.sys.motion.spring.fast.spatial.damping,
              stiffness: md.sys.motion.spring.fast.spatial.stiffness,
            },
          },
        },
      },
    },
    selected: {
      container: {
        shape: {
          round: md.sys.shape.corner.medium,
        },
      },
    },
  },
  filled: {
    container: {
      color: md.sys.color.primary,
      shadowColor: md.sys.color.shadow,
      elevation: md.sys.elevation.level0,
    },
    labelText: {
      color: md.sys.color.onPrimary,
    },
    icon: {
      color: md.sys.color.onPrimary,
    },
    unselected: {
      container: {
        color: md.sys.color.surfaceContainer,
      },
      labelText: {
        color: md.sys.color.onSurfaceVariant,
      },
      icon: {
        color: md.sys.color.onSurfaceVariant,
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
        },
        labelText: {
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
        },
        labelText: {
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
        },
        labelText: {
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
    },
    selected: {
      container: {
        color: md.sys.color.primary,
      },
      labelText: {
        color: md.sys.color.onPrimary,
      },
      icon: {
        color: md.sys.color.onPrimary,
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.onPrimary,
        },
        labelText: {
          color: md.sys.color.onPrimary,
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.onPrimary,
        },
        labelText: {
          color: md.sys.color.onPrimary,
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.onPrimary,
        },
        labelText: {
          color: md.sys.color.onPrimary,
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
    },
    disabled: {
      container: {
        color: md.sys.color.onSurface,
        opacity: "0.1",
        elevation: md.sys.elevation.level0,
      },
      labelText: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
      icon: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
    },
    hovered: {
      stateLayer: {
        color: md.sys.color.onPrimary,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
      container: {
        elevation: md.sys.elevation.level1,
      },
      labelText: {
        color: md.sys.color.onPrimary,
      },
      icon: {
        color: md.sys.color.onPrimary,
      },
    },
    focused: {
      stateLayer: {
        color: md.sys.color.onPrimary,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      container: {
        elevation: md.sys.elevation.level0,
      },
      labelText: {
        color: md.sys.color.onPrimary,
      },
      icon: {
        color: md.sys.color.onPrimary,
      },
    },
    pressed: {
      stateLayer: {
        color: md.sys.color.onPrimary,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      container: {
        elevation: md.sys.elevation.level0,
      },
      labelText: {
        color: md.sys.color.onPrimary,
      },
      icon: {
        color: md.sys.color.onPrimary,
      },
    },
  },
  elevated: {
    container: {
      color: md.sys.color.surfaceContainerLow,
      shadowColor: md.sys.color.shadow,
      elevation: md.sys.elevation.level1,
    },
    labelText: {
      color: md.sys.color.primary,
    },
    icon: {
      color: md.sys.color.primary,
    },
    unselected: {
      container: {
        color: md.sys.color.surfaceContainerLow,
      },
      labelText: {
        color: md.sys.color.primary,
      },
      icon: {
        color: md.sys.color.primary,
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.primary,
        },
        labelText: {
          color: md.sys.color.primary,
        },
        icon: {
          color: md.sys.color.primary,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.primary,
        },
        labelText: {
          color: md.sys.color.primary,
        },
        icon: {
          color: md.sys.color.primary,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.primary,
        },
        labelText: {
          color: md.sys.color.primary,
        },
        icon: {
          color: md.sys.color.primary,
        },
      },
    },
    selected: {
      container: {
        color: md.sys.color.primary,
      },
      labelText: {
        color: md.sys.color.onPrimary,
      },
      icon: {
        color: md.sys.color.onPrimary,
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.onPrimary,
        },
        labelText: {
          color: md.sys.color.onPrimary,
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.onPrimary,
        },
        labelText: {
          color: md.sys.color.onPrimary,
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.onPrimary,
        },
        labelText: {
          color: md.sys.color.onPrimary,
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
    },
    disabled: {
      container: {
        color: md.sys.color.onSurface,
        opacity: "0.1",
        elevation: md.sys.elevation.level0,
      },
      labelText: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
      icon: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
    },
    hovered: {
      stateLayer: {
        color: md.sys.color.primary,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
      container: {
        elevation: md.sys.elevation.level2,
      },
      labelText: {
        color: md.sys.color.primary,
      },
      icon: {
        color: md.sys.color.primary,
      },
    },
    focused: {
      stateLayer: {
        color: md.sys.color.primary,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      container: {
        elevation: md.sys.elevation.level1,
      },
      labelText: {
        color: md.sys.color.primary,
      },
      icon: {
        color: md.sys.color.primary,
      },
    },
    pressed: {
      stateLayer: {
        color: md.sys.color.primary,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      container: {
        elevation: md.sys.elevation.level1,
      },
      labelText: {
        color: md.sys.color.primary,
      },
      icon: {
        color: md.sys.color.primary,
      },
    },
  },
  tonal: {
    container: {
      color: md.sys.color.secondaryContainer,
      shadowColor: md.sys.color.shadow,
      elevation: md.sys.elevation.level0,
    },
    labelText: {
      color: md.sys.color.onSecondaryContainer,
    },
    icon: {
      color: md.sys.color.onSecondaryContainer,
    },
    unselected: {
      container: {
        color: md.sys.color.secondaryContainer,
      },
      labelText: {
        color: md.sys.color.onSecondaryContainer,
      },
      icon: {
        color: md.sys.color.onSecondaryContainer,
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.onSecondaryContainer,
        },
        labelText: {
          color: md.sys.color.onSecondaryContainer,
        },
        icon: {
          color: md.sys.color.onSecondaryContainer,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.onSecondaryContainer,
        },
        labelText: {
          color: md.sys.color.onSecondaryContainer,
        },
        icon: {
          color: md.sys.color.onSecondaryContainer,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.onSecondaryContainer,
        },
        labelText: {
          color: md.sys.color.onSecondaryContainer,
        },
        icon: {
          color: md.sys.color.onSecondaryContainer,
        },
      },
    },
    selected: {
      container: {
        color: md.sys.color.secondary,
      },
      labelText: {
        color: md.sys.color.onPrimary,
      },
      icon: {
        color: md.sys.color.onPrimary,
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.onPrimary,
        },
        labelText: {
          color: md.sys.color.onPrimary,
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.onPrimary,
        },
        labelText: {
          color: md.sys.color.onPrimary,
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.onPrimary,
        },
        labelText: {
          color: md.sys.color.onPrimary,
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
    },
    disabled: {
      container: {
        color: md.sys.color.onSurface,
        opacity: "0.1",
        elevation: md.sys.elevation.level0,
      },
      labelText: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
      icon: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
    },
    hovered: {
      stateLayer: {
        color: md.sys.color.onSecondaryContainer,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
      container: {
        elevation: md.sys.elevation.level1,
      },
      labelText: {
        color: md.sys.color.onSecondaryContainer,
      },
      icon: {
        color: md.sys.color.onSecondaryContainer,
      },
    },
    focused: {
      stateLayer: {
        color: md.sys.color.onSecondaryContainer,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      container: {
        elevation: md.sys.elevation.level0,
      },
      labelText: {
        color: md.sys.color.onSecondaryContainer,
      },
      icon: {
        color: md.sys.color.onSecondaryContainer,
      },
    },
    pressed: {
      stateLayer: {
        color: md.sys.color.onSecondaryContainer,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      container: {
        elevation: md.sys.elevation.level0,
      },
      labelText: {
        color: md.sys.color.onSecondaryContainer,
      },
      icon: {
        color: md.sys.color.onSecondaryContainer,
      },
    },
  },
  outlined: {
    outline: {
      color: md.sys.color.outlineVariant,
    },
    labelText: {
      color: md.sys.color.onSurfaceVariant,
    },
    icon: {
      color: md.sys.color.onSurfaceVariant,
    },
    unselected: {
      labelText: {
        color: md.sys.color.onSurfaceVariant,
      },
      icon: {
        color: md.sys.color.onSurfaceVariant,
      },
      disabled: {
        outline: {
          color: md.sys.color.outlineVariant,
        },
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
        },
        outline: {
          color: md.sys.color.outlineVariant,
        },
        labelText: {
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
        },
        outline: {
          color: md.sys.color.outlineVariant,
        },
        labelText: {
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
        },
        outline: {
          color: md.sys.color.outlineVariant,
        },
        labelText: {
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
    },
    selected: {
      container: {
        color: md.sys.color.inverseSurface,
      },
      labelText: {
        color: md.sys.color.inverseOnSurface,
      },
      icon: {
        color: md.sys.color.inverseOnSurface,
      },
      disabled: {
        container: {
          color: md.sys.color.onSurface,
        },
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.inverseOnSurface,
        },
        labelText: {
          color: md.sys.color.inverseOnSurface,
        },
        icon: {
          color: md.sys.color.inverseOnSurface,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.inverseOnSurface,
        },
        labelText: {
          color: md.sys.color.inverseOnSurface,
        },
        icon: {
          color: md.sys.color.inverseOnSurface,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.inverseOnSurface,
        },
        labelText: {
          color: md.sys.color.inverseOnSurface,
        },
        icon: {
          color: md.sys.color.inverseOnSurface,
        },
      },
    },
    disabled: {
      outline: {
        color: md.sys.color.outlineVariant,
      },
      container: {
        opacity: "0.1",
      },
      labelText: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
      icon: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
    },
    hovered: {
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
      outline: {
        color: md.sys.color.outlineVariant,
      },
      labelText: {
        color: md.sys.color.onSurfaceVariant,
      },
      icon: {
        color: md.sys.color.onSurfaceVariant,
      },
    },
    focused: {
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      outline: {
        color: md.sys.color.outlineVariant,
      },
      labelText: {
        color: md.sys.color.onSurfaceVariant,
      },
      icon: {
        color: md.sys.color.onSurfaceVariant,
      },
    },
    pressed: {
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      outline: {
        color: md.sys.color.outlineVariant,
      },
      labelText: {
        color: md.sys.color.onSurfaceVariant,
      },
      icon: {
        color: md.sys.color.onSurfaceVariant,
      },
    },
  },
  text: {
    labelText: {
      color: md.sys.color.primary,
    },
    icon: {
      color: md.sys.color.primary,
    },
    disabled: {
      container: {
        color: md.sys.color.onSurface,
        opacity: "0.1",
      },
      labelText: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
      icon: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
    },
    hovered: {
      stateLayer: {
        color: md.sys.color.primary,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
      labelText: {
        color: md.sys.color.primary,
      },
      icon: {
        color: md.sys.color.primary,
      },
    },
    focused: {
      stateLayer: {
        color: md.sys.color.primary,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      labelText: {
        color: md.sys.color.primary,
      },
      icon: {
        color: md.sys.color.primary,
      },
    },
    pressed: {
      stateLayer: {
        color: md.sys.color.primary,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      labelText: {
        color: md.sys.color.primary,
      },
      icon: {
        color: md.sys.color.primary,
      },
    },
  },
};

export const button = buttonToken;

// checkbox

const checkboxToken = {
  container: {
    width: "18px",
    height: "18px",
    size: "18px",
    shape: "2px",
  },
  icon: {
    size: "18px",
  },
  stateLayer: {
    size: "40px",
    shape: md.sys.shape.corner.full,
  },
  focus: {
    indicator: {
      color: md.sys.color.secondary,
      thickness: md.sys.state.focusIndicator.thickness,
      outline: {
        offset: md.sys.state.focusIndicator.outerOffset,
      },
    },
  },
  unselected: {
    outline: {
      color: md.sys.color.onSurfaceVariant,
      width: "2px",
    },
    icon: {
      color: md.sys.color.onSurface,
    },
    error: {
      outline: {
        color: md.sys.color.error,
      },
      hover: {
        outline: {
          color: md.sys.color.error,
          width: "2px",
        },
      },
      focus: {
        outline: {
          color: md.sys.color.error,
          width: "2px",
        },
      },
      pressed: {
        outline: {
          color: md.sys.color.error,
          width: "2px",
        },
      },
    },
    disabled: {
      outline: {
        color: md.sys.color.onSurface,
        width: "2px",
      },
      container: {
        opacity: "0.38",
      },
    },
    hover: {
      outline: {
        color: md.sys.color.onSurface,
        width: "2px",
      },
      icon: {
        color: md.sys.color.onSurface,
      },
      stateLayer: {
        color: md.sys.color.onSurface,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
    },
    focus: {
      outline: {
        color: md.sys.color.onSurface,
        width: "2px",
      },
      icon: {
        color: md.sys.color.onSurface,
      },
      stateLayer: {
        color: md.sys.color.onSurface,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
    },
    pressed: {
      outline: {
        color: md.sys.color.onSurface,
        width: "2px",
      },
      icon: {
        color: md.sys.color.onSurface,
      },
      stateLayer: {
        color: md.sys.color.primary,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
    },
  },
  selected: {
    container: {
      color: md.sys.color.primary,
    },
    outline: {
      width: "0",
    },
    icon: {
      color: md.sys.color.onPrimary,
    },
    error: {
      container: {
        color: md.sys.color.error,
      },
      icon: {
        color: md.sys.color.onPrimary,
      },
      hover: {
        container: {
          color: md.sys.color.error,
        },
        outline: {
          width: "0",
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
      focus: {
        container: {
          color: md.sys.color.error,
        },
        outline: {
          width: "0",
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
      pressed: {
        container: {
          color: md.sys.color.error,
        },
        outline: {
          width: "0",
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
    },
    disabled: {
      container: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
        outline: {
          width: "0",
        },
      },
      icon: {
        color: md.sys.color.surface,
      },
    },
    hover: {
      container: {
        color: md.sys.color.primary,
      },
      outline: {
        width: "0",
      },
      icon: {
        color: md.sys.color.onPrimary,
      },
      stateLayer: {
        color: md.sys.color.primary,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
    },
    focus: {
      container: {
        color: md.sys.color.primary,
      },
      outline: {
        width: "0",
      },
      icon: {
        color: md.sys.color.onPrimary,
      },
      stateLayer: {
        color: md.sys.color.primary,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
    },
    pressed: {
      container: {
        color: md.sys.color.primary,
      },
      outline: {
        width: "0",
      },
      icon: {
        color: md.sys.color.onPrimary,
      },
      stateLayer: {
        color: md.sys.color.onSurface,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
    },
  },
  disabled: {
    selected: {
      icon: {
        color: md.sys.color.primary,
        opacity: "0.38",
      },
    },
    unselected: {
      icon: {
        color: md.sys.color.primary,
        opacity: "0.38",
      },
    },
  },
  error: {
    hover: {
      stateLayer: {
        color: md.sys.color.error,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
    },
    focus: {
      stateLayer: {
        color: md.sys.color.error,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
    },
    pressed: {
      stateLayer: {
        color: md.sys.color.error,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
    },
  },
};

export const checkbox = checkboxToken;

// chips

const chipLabelText = {
  fontFamily: md.sys.typescale.label.large.fontFamily,
  fontSize: md.sys.typescale.label.large.fontSize,
  lineHeight: md.sys.typescale.label.large.lineHeight,
  fontWeight: md.sys.typescale.label.large.fontWeight,
  letterSpacing: md.sys.typescale.label.large.letterSpacing,
};

const chip = {
  assist: {
    container: {
      shape: md.sys.shape.corner.small,
      height: "32px",
      surfaceTintLayer: {
        color: md.sys.color.surfaceTint,
      },
    },
    flat: {
      container: {
        elevation: md.sys.elevation.level0,
      },
      outline: {
        color: md.sys.color.outlineVariant,
        width: "1px",
      },
      disabled: {
        outline: {
          color: md.sys.color.onSurface,
          opacity: "0.12",
        },
      },
      focus: {
        outline: {
          color: md.sys.color.onSurface,
        },
      },
    },
    elevated: {
      container: {
        elevation: md.sys.elevation.level1,
        color: md.sys.color.surfaceContainerLow,
        shadowColor: md.sys.color.shadow,
      },
      disabled: {
        container: {
          elevation: md.sys.elevation.level0,
          color: md.sys.color.onSurface,
          opacity: "0.12",
        },
      },
      hover: {
        container: {
          elevation: md.sys.elevation.level2,
        },
      },
      focus: {
        container: {
          elevation: md.sys.elevation.level1,
        },
      },
      pressed: {
        container: {
          elevation: md.sys.elevation.level1,
        },
      },
    },
    labelText: {
      ...chipLabelText,
      color: md.sys.color.onSurface,
    },
    withIcon: {
      icon: {
        size: "18px",
        color: md.sys.color.surfaceTint,
      },
      disabled: {
        icon: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
      },
      hover: {
        icon: {
          color: md.sys.color.surfaceTint,
        },
      },
      focus: {
        icon: {
          color: md.sys.color.surfaceTint,
        },
      },
      pressed: {
        icon: {
          color: md.sys.color.surfaceTint,
        },
      },
      dragged: {
        icon: {
          color: md.sys.color.surfaceTint,
        },
      },
    },
    disabled: {
      labelText: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
    },
    hover: {
      labelText: {
        color: md.sys.color.onSurface,
      },
      stateLayer: {
        color: md.sys.color.onSurface,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
    },
    focus: {
      indicator: {
        color: md.sys.color.secondary,
        thickness: md.sys.state.focusIndicator.thickness,
        outline: {
          offset: md.sys.state.focusIndicator.outerOffset,
        },
      },
      labelText: {
        color: md.sys.color.onSurface,
      },
      stateLayer: {
        color: md.sys.color.onSurface,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
    },
    pressed: {
      labelText: {
        color: md.sys.color.onSurface,
      },
      stateLayer: {
        color: md.sys.color.onSurface,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
    },
    dragged: {
      container: {
        elevation: md.sys.elevation.level4,
      },
      labelText: {
        color: md.sys.color.onSurface,
      },
      stateLayer: {
        color: md.sys.color.onSurface,
        opacity: md.sys.state.dragged.stateLayerOpacity,
      },
    },
  },
  filter: {
    container: {
      shape: md.sys.shape.corner.small,
      height: "32px",
      shadowColor: md.sys.color.shadow,
      surfaceTintLayer: {
        color: md.sys.color.surfaceTint,
      },
    },
    flat: {
      container: {
        elevation: md.sys.elevation.level0,
      },
      unselected: {
        outline: {
          color: md.sys.color.outlineVariant,
          width: "1px",
        },
        focus: {
          outline: {
            color: md.sys.color.onSurfaceVariant,
          },
          container: {
            elevation: md.sys.elevation.level0,
          },
        },
        hover: {
          container: {
            elevation: md.sys.elevation.level0,
          },
        },
        pressed: {
          container: {
            elevation: md.sys.elevation.level0,
          },
        },
      },
      selected: {
        container: {
          color: md.sys.color.secondaryContainer,
        },
        outline: {
          width: "0",
        },
        focus: {
          container: {
            elevation: md.sys.elevation.level0,
          },
        },
        hover: {
          container: {
            elevation: md.sys.elevation.level0,
          },
        },
        pressed: {
          container: {
            elevation: md.sys.elevation.level0,
          },
        },
      },
      disabled: {
        unselected: {
          outline: {
            color: md.sys.color.onSurface,
            opacity: "0.12",
          },
        },
        selected: {
          container: {
            color: md.sys.color.onSurface,
            opacity: "0.12",
          },
        },
      },
    },
    elevated: {
      container: {
        elevation: md.sys.elevation.level1,
        shadowColor: md.sys.color.shadow,
      },
      unselected: {
        container: {
          color: md.sys.color.surfaceContainerLow,
        },
      },
      selected: {
        container: {
          color: md.sys.color.secondaryContainer,
        },
      },
      disabled: {
        container: {
          elevation: md.sys.elevation.level0,
          color: md.sys.color.onSurface,
          opacity: "0.12",
        },
      },
      hover: {
        container: {
          elevation: md.sys.elevation.level2,
        },
      },
      focus: {
        container: {
          elevation: md.sys.elevation.level1,
        },
      },
      pressed: {
        container: {
          elevation: md.sys.elevation.level1,
        },
      },
    },
    labelText: {
      ...chipLabelText,
    },
    unselected: {
      labelText: {
        color: md.sys.color.onSurfaceVariant,
      },
      hover: {
        labelText: {
          color: md.sys.color.onSurfaceVariant,
        },
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
          opacity: md.sys.state.hover.stateLayerOpacity,
        },
      },
      focus: {
        labelText: {
          color: md.sys.color.onSurfaceVariant,
        },
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
          opacity: md.sys.state.focus.stateLayerOpacity,
        },
      },
      pressed: {
        labelText: {
          color: md.sys.color.onSurfaceVariant,
        },
        stateLayer: {
          color: md.sys.color.onSecondaryContainer,
          opacity: md.sys.state.pressed.stateLayerOpacity,
        },
      },
      dragged: {
        labelText: {
          color: md.sys.color.onSurfaceVariant,
        },
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
          opacity: md.sys.state.dragged.stateLayerOpacity,
        },
      },
    },
    selected: {
      labelText: {
        color: md.sys.color.onSecondaryContainer,
      },
      hover: {
        labelText: {
          color: md.sys.color.onSecondaryContainer,
        },
        stateLayer: {
          color: md.sys.color.onSecondaryContainer,
          opacity: md.sys.state.hover.stateLayerOpacity,
        },
      },
      focus: {
        labelText: {
          color: md.sys.color.onSecondaryContainer,
        },
        stateLayer: {
          color: md.sys.color.onSecondaryContainer,
          opacity: md.sys.state.focus.stateLayerOpacity,
        },
      },
      pressed: {
        labelText: {
          color: md.sys.color.onSecondaryContainer,
        },
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
          opacity: md.sys.state.pressed.stateLayerOpacity,
        },
      },
      dragged: {
        labelText: {
          color: md.sys.color.onSecondaryContainer,
        },
        stateLayer: {
          color: md.sys.color.onSecondaryContainer,
          opacity: md.sys.state.dragged.stateLayerOpacity,
        },
      },
    },
    disabled: {
      labelText: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
    },
    focus: {
      indicator: {
        color: md.sys.color.secondary,
        thickness: md.sys.state.focusIndicator.thickness,
        outline: {
          offset: md.sys.state.focusIndicator.outerOffset,
        },
      },
    },
    dragged: {
      container: {
        elevation: md.sys.elevation.level4,
      },
    },
    withIcon: {
      icon: {
        size: "18px",
      },
      unselected: {
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
        focus: {
          icon: {
            color: md.sys.color.onSurfaceVariant,
          },
        },
        hover: {
          icon: {
            color: md.sys.color.onSurfaceVariant,
          },
        },
        pressed: {
          icon: {
            color: md.sys.color.onSurfaceVariant,
          },
        },
        dragged: {
          icon: {
            color: md.sys.color.onSurfaceVariant,
          },
        },
      },
      selected: {
        icon: {
          color: md.sys.color.onSecondaryContainer,
        },
        focus: {
          icon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
        hover: {
          icon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
        pressed: {
          icon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
        dragged: {
          icon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
      },
      disabled: {
        icon: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
      },
    },
    withLeadingIcon: {
      unselected: {
        leadingIcon: {
          color: md.sys.color.surfaceTint,
        },
        focus: {
          leadingIcon: {
            color: md.sys.color.surfaceTint,
          },
        },
        hover: {
          leadingIcon: {
            color: md.sys.color.surfaceTint,
          },
        },
        pressed: {
          leadingIcon: {
            color: md.sys.color.surfaceTint,
          },
        },
        dragged: {
          leadingIcon: {
            color: md.sys.color.surfaceTint,
          },
        },
      },
      selected: {
        leadingIcon: {
          color: md.sys.color.onSecondaryContainer,
        },
        focus: {
          leadingIcon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
        hover: {
          leadingIcon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
        pressed: {
          leadingIcon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
        dragged: {
          leadingIcon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
      },
      disabled: {
        leadingIcon: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
      },
    },
    withTrailingIcon: {
      unselected: {
        trailingIcon: {
          color: md.sys.color.onSurfaceVariant,
        },
        focus: {
          trailingIcon: {
            color: md.sys.color.onSurfaceVariant,
          },
        },
        hover: {
          trailingIcon: {
            color: md.sys.color.onSurfaceVariant,
          },
        },
        pressed: {
          trailingIcon: {
            color: md.sys.color.onSurfaceVariant,
          },
        },
        dragged: {
          trailingIcon: {
            color: md.sys.color.onSurfaceVariant,
          },
        },
      },
      selected: {
        trailingIcon: {
          color: md.sys.color.onSecondaryContainer,
        },
        focus: {
          trailingIcon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
        hover: {
          trailingIcon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
        pressed: {
          trailingIcon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
        dragged: {
          trailingIcon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
      },
      disabled: {
        trailingIcon: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
      },
    },
  },
  input: {
    withAvatar: {
      avatar: {
        size: "24px",
        shape: md.sys.shape.corner.full,
      },
      disabled: {
        avatar: {
          opacity: "0.38",
        },
      },
    },
    container: {
      shape: md.sys.shape.corner.small,
      height: "32px",
      elevation: md.sys.elevation.level0,
    },
    unselected: {
      outline: {
        color: md.sys.color.outlineVariant,
        width: "1px",
      },
      labelText: {
        color: md.sys.color.onSurfaceVariant,
      },
      hover: {
        labelText: {
          color: md.sys.color.onSurfaceVariant,
        },
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
          opacity: md.sys.state.hover.stateLayerOpacity,
        },
      },
      focus: {
        outline: {
          color: md.sys.color.onSurfaceVariant,
        },
        labelText: {
          color: md.sys.color.onSurfaceVariant,
        },
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
          opacity: md.sys.state.focus.stateLayerOpacity,
        },
      },
      pressed: {
        labelText: {
          color: md.sys.color.onSurfaceVariant,
        },
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
          opacity: md.sys.state.pressed.stateLayerOpacity,
        },
      },
      dragged: {
        labelText: {
          color: md.sys.color.onSurfaceVariant,
        },
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
          opacity: md.sys.state.dragged.stateLayerOpacity,
        },
      },
    },
    selected: {
      container: {
        color: md.sys.color.secondaryContainer,
      },
      outline: {
        width: "0",
      },
      labelText: {
        color: md.sys.color.onSecondaryContainer,
      },
      hover: {
        labelText: {
          color: md.sys.color.onSecondaryContainer,
        },
        stateLayer: {
          color: md.sys.color.onSecondaryContainer,
          opacity: md.sys.state.hover.stateLayerOpacity,
        },
      },
      focus: {
        labelText: {
          color: md.sys.color.onSecondaryContainer,
        },
        stateLayer: {
          color: md.sys.color.onSecondaryContainer,
          opacity: md.sys.state.focus.stateLayerOpacity,
        },
      },
      pressed: {
        labelText: {
          color: md.sys.color.onSecondaryContainer,
        },
        stateLayer: {
          color: md.sys.color.onSecondaryContainer,
          opacity: md.sys.state.pressed.stateLayerOpacity,
        },
      },
      dragged: {
        labelText: {
          color: md.sys.color.onSecondaryContainer,
        },
        stateLayer: {
          color: md.sys.color.onSecondaryContainer,
          opacity: md.sys.state.dragged.stateLayerOpacity,
        },
      },
    },
    outline: {
      color: md.sys.color.outline,
      width: "1px",
    },
    labelText: {
      ...chipLabelText,
      color: md.sys.color.onSurfaceVariant,
    },
    hover: {
      labelText: {
        color: md.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
    },
    focus: {
      indicator: {
        color: md.sys.color.secondary,
        thickness: md.sys.state.focusIndicator.thickness,
        outline: {
          offset: md.sys.state.focusIndicator.outerOffset,
        },
      },
      outline: {
        color: md.sys.color.onSurfaceVariant,
      },
      labelText: {
        color: md.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
    },
    pressed: {
      labelText: {
        color: md.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
    },
    dragged: {
      container: {
        elevation: md.sys.elevation.level4,
      },
      labelText: {
        color: md.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.dragged.stateLayerOpacity,
      },
    },
    withLeadingIcon: {
      leadingIcon: {
        size: "18px",
        color: md.sys.color.onSurfaceVariant,
      },
      unselected: {
        leadingIcon: {
          color: md.sys.color.onSurfaceVariant,
        },
        hover: {
          leadingIcon: {
            color: md.sys.color.surfaceTint,
          },
        },
        focus: {
          leadingIcon: {
            color: md.sys.color.surfaceTint,
          },
        },
        pressed: {
          leadingIcon: {
            color: md.sys.color.surfaceTint,
          },
        },
        dragged: {
          leadingIcon: {
            color: md.sys.color.onSurfaceVariant,
          },
        },
      },
      selected: {
        leadingIcon: {
          color: md.sys.color.surfaceTint,
        },
        hover: {
          leadingIcon: {
            color: md.sys.color.surfaceTint,
          },
        },
        focus: {
          leadingIcon: {
            color: md.sys.color.surfaceTint,
          },
        },
        pressed: {
          leadingIcon: {
            color: md.sys.color.surfaceTint,
          },
        },
        dragged: {
          leadingIcon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
      },
      hover: {
        leadingIcon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      focus: {
        leadingIcon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      pressed: {
        leadingIcon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      disabled: {
        leadingIcon: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
      },
    },
    withTrailingIcon: {
      trailingIcon: {
        size: "18px",
        color: md.sys.color.onSurfaceVariant,
      },
      unselected: {
        trailingIcon: {
          color: md.sys.color.onSurfaceVariant,
        },
        hover: {
          trailingIcon: {
            color: md.sys.color.onSurfaceVariant,
          },
        },
        focus: {
          trailingIcon: {
            color: md.sys.color.onSurfaceVariant,
          },
        },
        pressed: {
          trailingIcon: {
            color: md.sys.color.onSurfaceVariant,
          },
        },
        dragged: {
          trailingIcon: {
            color: md.sys.color.surfaceTint,
          },
        },
      },
      selected: {
        trailingIcon: {
          color: md.sys.color.onSecondaryContainer,
        },
        hover: {
          trailingIcon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
        focus: {
          trailingIcon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
        pressed: {
          trailingIcon: {
            color: md.sys.color.onSecondaryContainer,
          },
        },
        dragged: {
          trailingIcon: {
            color: md.sys.color.surfaceTint,
          },
        },
      },
      hover: {
        trailingIcon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      focus: {
        trailingIcon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      pressed: {
        trailingIcon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      disabled: {
        trailingIcon: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
      },
    },
    disabled: {
      unselected: {
        outline: {
          color: md.sys.color.onSurface,
          opacity: "0.12",
        },
      },
      selected: {
        container: {
          color: md.sys.color.onSurface,
          opacity: "0.12",
        },
      },
      outline: {
        color: md.sys.color.onSurface,
        opacity: "0.12",
      },
      labelText: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
    },
  },
  suggestion: {
    container: {
      shape: md.sys.shape.corner.small,
      height: "32px",
      surfaceTintLayer: {
        color: md.sys.color.surfaceTint,
      },
    },
    flat: {
      container: {
        elevation: md.sys.elevation.level0,
      },
      outline: {
        color: md.sys.color.outlineVariant,
        width: "1px",
      },
      disabled: {
        outline: {
          color: md.sys.color.onSurface,
          opacity: "0.12",
        },
      },
      focus: {
        outline: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
    },
    elevated: {
      container: {
        elevation: md.sys.elevation.level1,
        color: md.sys.color.surfaceContainerLow,
        shadowColor: md.sys.color.shadow,
      },
      disabled: {
        container: {
          elevation: md.sys.elevation.level0,
          color: md.sys.color.onSurface,
          opacity: "0.12",
        },
      },
      hover: {
        container: {
          elevation: md.sys.elevation.level2,
        },
      },
      focus: {
        container: {
          elevation: md.sys.elevation.level1,
        },
      },
      pressed: {
        container: {
          elevation: md.sys.elevation.level1,
        },
      },
    },
    withLeadingIcon: {
      leadingIcon: {
        color: md.sys.color.surfaceTint,
        size: "18px",
      },
      disabled: {
        leadingIcon: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
      },
      hover: {
        leadingIcon: {
          color: md.sys.color.surfaceTint,
        },
      },
      focus: {
        leadingIcon: {
          color: md.sys.color.surfaceTint,
        },
      },
      pressed: {
        leadingIcon: {
          color: md.sys.color.surfaceTint,
        },
      },
      dragged: {
        leadingIcon: {
          color: md.sys.color.surfaceTint,
        },
      },
    },
    labelText: {
      ...chipLabelText,
      color: md.sys.color.onSurfaceVariant,
    },
    disabled: {
      labelText: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
    },
    hover: {
      labelText: {
        color: md.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
    },
    focus: {
      indicator: {
        color: md.sys.color.secondary,
        thickness: md.sys.state.focusIndicator.thickness,
        outline: {
          offset: md.sys.state.focusIndicator.outerOffset,
        },
      },
      labelText: {
        color: md.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
    },
    pressed: {
      labelText: {
        color: md.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
    },
    dragged: {
      container: {
        elevation: md.sys.elevation.level4,
      },
      labelText: {
        color: md.sys.color.onSurfaceVariant,
      },
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.dragged.stateLayerOpacity,
      },
    },
  },
};

export { chip };

// dialogs

const dialogToken = {
  container: {
    color: md.sys.color.surfaceContainerHigh,
    elevation: md.sys.elevation.level3,
    surfaceTintLayer: {
      color: md.sys.color.surfaceTint,
    },
    shape: "28px",
  },
  action: {
    labelText: {
      font: md.sys.typescale.label.large.fontFamily,
      lineHeight: md.sys.typescale.label.large.lineHeight,
      size: md.sys.typescale.label.large.fontSize,
      weight: md.sys.typescale.label.large.fontWeight,
      tracking: md.sys.typescale.label.large.letterSpacing,
      color: md.sys.color.primary,
    },
    hover: {
      labelText: {
        color: md.sys.color.primary,
      },
      stateLayer: {
        color: md.sys.color.primary,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
    },
    focus: {
      labelText: {
        color: md.sys.color.primary,
      },
      stateLayer: {
        color: md.sys.color.primary,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
    },
    pressed: {
      labelText: {
        color: md.sys.color.primary,
      },
      stateLayer: {
        color: md.sys.color.primary,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
    },
  },
  withIcon: {
    icon: {
      size: "24px",
      color: md.sys.color.onSurfaceVariant,
    },
  },
  headline: {
    font: '"Roboto", "Noto Sans", "Helvetica Neue", Arial, sans-serif',
    lineHeight: "32px",
    size: "24px",
    weight: "400",
    tracking: "0",
    color: md.sys.color.onSurface,
  },
  supportingText: {
    font: '"Roboto", "Noto Sans", "Helvetica Neue", Arial, sans-serif',
    lineHeight: "20px",
    size: "14px",
    weight: "400",
    tracking: "0.25px",
    color: md.sys.color.onSurfaceVariant,
  },
};

export const dialog = dialogToken;

// dividers

const dividerToken = {
  specs: {
    dividerThickness: "1px",
    dividerColor: md.sys.color.outlineVariant,
  },
};

export const divider = dividerToken;

// icon-buttons

const iconButtonToken = {
  small: {
    container: {
      height: "40px",
      shape: {
        round: md.sys.shape.corner.full,
        square: md.sys.shape.corner.medium,
      },
    },
    icon: {
      size: "24px",
    },
    narrow: {
      leadingSpace: "4px",
      trailingSpace: "4px",
    },
    default: {
      leadingSpace: "8px",
      trailingSpace: "8px",
    },
    wide: {
      leadingSpace: "14px",
      trailingSpace: "14px",
    },
    outlined: {
      outline: {
        width: "1px",
      },
    },
    pressed: {
      container: {
        shape: md.sys.shape.corner.small,
        cornerSize: {
          motion: {
            spring: {
              damping: md.sys.motion.spring.fast.spatial.damping,
              stiffness: md.sys.motion.spring.fast.spatial.stiffness,
            },
          },
        },
      },
    },
    selected: {
      container: {
        shape: {
          round: md.sys.shape.corner.medium,
          square: md.sys.shape.corner.full,
        },
      },
    },
  },
  filled: {
    container: {
      color: md.sys.color.primary,
    },
    icon: {
      color: md.sys.color.onPrimary,
    },
    unselected: {
      container: {
        color: md.sys.color.surfaceContainer,
      },
      icon: {
        color: md.sys.color.onSurfaceVariant,
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
    },
    selected: {
      container: {
        color: md.sys.color.primary,
      },
      icon: {
        color: md.sys.color.onPrimary,
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.onPrimary,
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.onPrimary,
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.onPrimary,
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
    },
    disabled: {
      container: {
        color: md.sys.color.onSurface,
        opacity: "0.1",
      },
      icon: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
    },
    hovered: {
      stateLayer: {
        color: md.sys.color.onPrimary,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: md.sys.color.onPrimary,
      },
    },
    focused: {
      stateLayer: {
        color: md.sys.color.onPrimary,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: md.sys.color.onPrimary,
      },
    },
    pressed: {
      stateLayer: {
        color: md.sys.color.onPrimary,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: md.sys.color.onPrimary,
      },
    },
  },
  tonal: {
    container: {
      color: md.sys.color.secondaryContainer,
    },
    icon: {
      color: md.sys.color.onSecondaryContainer,
    },
    unselected: {
      container: {
        color: md.sys.color.secondaryContainer,
      },
      icon: {
        color: md.sys.color.onSecondaryContainer,
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.onSecondaryContainer,
        },
        icon: {
          color: md.sys.color.onSecondaryContainer,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.onSecondaryContainer,
        },
        icon: {
          color: md.sys.color.onSecondaryContainer,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.onSecondaryContainer,
        },
        icon: {
          color: md.sys.color.onSecondaryContainer,
        },
      },
    },
    selected: {
      container: {
        color: md.sys.color.secondary,
      },
      icon: {
        color: md.sys.color.onPrimary,
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.onPrimary,
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.onPrimary,
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.onPrimary,
        },
        icon: {
          color: md.sys.color.onPrimary,
        },
      },
    },
    disabled: {
      container: {
        color: md.sys.color.onSurface,
        opacity: "0.1",
      },
      icon: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
    },
    hovered: {
      stateLayer: {
        color: md.sys.color.onSecondaryContainer,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: md.sys.color.onSecondaryContainer,
      },
    },
    focused: {
      stateLayer: {
        color: md.sys.color.onSecondaryContainer,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: md.sys.color.onSecondaryContainer,
      },
    },
    pressed: {
      stateLayer: {
        color: md.sys.color.onSecondaryContainer,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: md.sys.color.onSecondaryContainer,
      },
    },
  },
  outlined: {
    outline: {
      color: md.sys.color.outlineVariant,
    },
    icon: {
      color: md.sys.color.onSurfaceVariant,
    },
    unselected: {
      outline: {
        color: md.sys.color.outlineVariant,
      },
      icon: {
        color: md.sys.color.onSurfaceVariant,
      },
      disabled: {
        outline: {
          color: md.sys.color.outlineVariant,
        },
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
    },
    selected: {
      container: {
        color: md.sys.color.inverseSurface,
      },
      icon: {
        color: md.sys.color.inverseOnSurface,
      },
      disabled: {
        container: {
          color: md.sys.color.onSurface,
          opacity: "0.1",
        },
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.inverseOnSurface,
        },
        icon: {
          color: md.sys.color.inverseOnSurface,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.inverseOnSurface,
        },
        icon: {
          color: md.sys.color.inverseOnSurface,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.inverseOnSurface,
        },
        icon: {
          color: md.sys.color.inverseOnSurface,
        },
      },
    },
    disabled: {
      outline: {
        color: md.sys.color.outlineVariant,
      },
      icon: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
    },
    hovered: {
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: md.sys.color.onSurfaceVariant,
      },
    },
    focused: {
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: md.sys.color.onSurfaceVariant,
      },
    },
    pressed: {
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: md.sys.color.onSurfaceVariant,
      },
    },
  },
  standard: {
    icon: {
      color: md.sys.color.onSurfaceVariant,
    },
    unselected: {
      icon: {
        color: md.sys.color.onSurfaceVariant,
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
    },
    selected: {
      icon: {
        color: md.sys.color.primary,
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.primary,
        },
        icon: {
          color: md.sys.color.primary,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.primary,
        },
        icon: {
          color: md.sys.color.primary,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.primary,
        },
        icon: {
          color: md.sys.color.primary,
        },
      },
    },
    disabled: {
      icon: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
    },
    hovered: {
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
      icon: {
        color: md.sys.color.onSurfaceVariant,
      },
    },
    focused: {
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      icon: {
        color: md.sys.color.onSurfaceVariant,
      },
    },
    pressed: {
      stateLayer: {
        color: md.sys.color.onSurfaceVariant,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      icon: {
        color: md.sys.color.onSurfaceVariant,
      },
    },
  },
};

export const iconButton = iconButtonToken;

// lists

const listComponentToken = {
  container: {
    shape: "16px",
  },
  listItem: {
    container: {
      color: md.sys.color.surface,
      shape: "0",
      elevation: md.sys.elevation.level0,
    },
    labelText: {
      color: md.sys.color.onSurface,
      fontFamily: md.sys.typescale.body.large.fontFamily,
      lineHeight: md.sys.typescale.body.large.lineHeight,
      fontSize: md.sys.typescale.body.large.fontSize,
      letterSpacing: md.sys.typescale.body.large.letterSpacing,
      fontWeight: md.sys.typescale.body.large.fontWeight,
    },
    supportingText: {
      color: md.sys.color.onSurfaceVariant,
      fontFamily: md.sys.typescale.body.small.fontFamily,
      lineHeight: md.sys.typescale.body.small.lineHeight,
      fontSize: md.sys.typescale.body.small.fontSize,
      letterSpacing: md.sys.typescale.body.small.letterSpacing,
      fontWeight: md.sys.typescale.body.small.fontWeight,
    },
    trailingSupportingText: {
      color: md.sys.color.onSurfaceVariant,
      fontFamily: md.sys.typescale.label.large.fontFamily,
      lineHeight: md.sys.typescale.label.large.lineHeight,
      fontSize: md.sys.typescale.label.large.fontSize,
      letterSpacing: md.sys.typescale.label.large.letterSpacing,
      fontWeight: md.sys.typescale.label.large.fontWeight,
    },
    overline: {
      color: md.sys.color.onSurfaceVariant,
      fontFamily: md.sys.typescale.label.large.fontFamily,
      lineHeight: md.sys.typescale.label.large.lineHeight,
      fontSize: md.sys.typescale.label.large.fontSize,
      letterSpacing: md.sys.typescale.label.large.letterSpacing,
      fontWeight: md.sys.typescale.label.large.fontWeight,
    },
    leadingIcon: {
      color: md.sys.color.onSurfaceVariant,
      size: "24px",
    },
    trailingIcon: {
      color: md.sys.color.onSurfaceVariant,
      unselectedColor: md.sys.color.onSurface,
      size: "24px",
    },
    leadingAvatar: {
      color: md.sys.color.primaryContainer,
      labelColor: md.sys.color.onPrimaryContainer,
      size: "40px",
      shape: md.sys.shape.corner.full,
      labelText: {
        fontFamily: md.sys.typescale.body.large.fontFamily,
        lineHeight: md.sys.typescale.body.large.lineHeight,
        fontSize: md.sys.typescale.body.large.fontSize,
        letterSpacing: md.sys.typescale.body.large.letterSpacing,
        fontWeight: md.sys.typescale.body.large.fontWeight,
      },
    },
    selected: {
      container: {
        color: md.sys.color.secondaryContainer,
        shape: "16px",
      },
      labelText: {
        color: md.sys.color.onSecondaryContainer,
      },
      supportingText: {
        color: md.sys.color.onSecondaryContainer,
      },
      trailingSupportingText: {
        color: md.sys.color.onSecondaryContainer,
      },
      overline: {
        color: md.sys.color.onSecondaryContainer,
      },
      leadingIcon: {
        color: md.sys.color.onSecondaryContainer,
      },
      trailingIcon: {
        color: md.sys.color.onSecondaryContainer,
      },
      hover: {
        stateLayer: {
          color: md.sys.color.onSurface,
          opacity: md.sys.state.hover.stateLayerOpacity,
        },
        labelText: {
          color: md.sys.color.onSecondaryContainer,
        },
        leadingIcon: {
          color: md.sys.color.onSurface,
        },
        trailingIcon: {
          color: md.sys.color.onSurface,
        },
      },
      focus: {
        stateLayer: {
          color: md.sys.color.onSurface,
          opacity: md.sys.state.focus.stateLayerOpacity,
        },
        labelText: {
          color: md.sys.color.onSecondaryContainer,
        },
        leadingIcon: {
          color: md.sys.color.onSurface,
        },
        trailingIcon: {
          color: md.sys.color.onSurface,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.onSurface,
          opacity: md.sys.state.pressed.stateLayerOpacity,
        },
        labelText: {
          color: md.sys.color.onSecondaryContainer,
        },
        leadingIcon: {
          color: md.sys.color.onSurface,
        },
        trailingIcon: {
          color: md.sys.color.onSurface,
        },
      },
      disabled: {
        container: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
        labelText: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
        supportingText: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
        trailingSupportingText: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
        overline: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
        stateLayer: {
          color: md.sys.color.onSurface,
          opacity: "0.1",
        },
        leadingIcon: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
        trailingIcon: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
      },
    },
    disabled: {
      stateLayer: {
        color: md.sys.color.onSurface,
        opacity: "0.1",
      },
      labelText: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
      supportingText: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
      overline: {
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
    },
    hover: {
      stateLayer: {
        color: md.sys.color.onSurface,
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
      labelText: {
        color: md.sys.color.onSurface,
      },
      leadingIcon: {
        color: md.sys.color.onSurfaceVariant,
      },
      trailingIcon: {
        color: md.sys.color.onSurfaceVariant,
      },
    },
    focus: {
      stateLayer: {
        color: md.sys.color.onSurface,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      labelText: {
        color: md.sys.color.onSurface,
      },
      leadingIcon: {
        color: md.sys.color.onSurfaceVariant,
      },
      trailingIcon: {
        color: md.sys.color.onSurfaceVariant,
      },
    },
    pressed: {
      stateLayer: {
        color: md.sys.color.onSurface,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      labelText: {
        color: md.sys.color.onSurface,
      },
      leadingIcon: {
        color: md.sys.color.onSurfaceVariant,
      },
      trailingIcon: {
        color: md.sys.color.onSurfaceVariant,
      },
    },
    focusIndicator: {
      color: md.sys.color.secondary,
      thickness: md.sys.state.focusIndicator.thickness,
      outlineOffset: "-2px",
    },
    oneLine: {
      container: {
        height: "56px",
      },
    },
    twoLine: {
      container: {
        height: "72px",
      },
    },
    threeLine: {
      container: {
        height: "88px",
      },
    },
  },
};

export const listToken = listComponentToken;

// menus

const menuComponentToken = {
  container: {
    shape: md.sys.shape.corner.extraSmall,
    elevation: md.sys.elevation.level2,
  },
  menuItem: {
    shape: md.sys.shape.corner.extraSmall,
    height: "48px",
    topSpace: "8px",
    bottomSpace: "8px",
    leadingSpace: "12px",
    trailingSpace: "12px",
    betweenSpace: "12px",
    leadingIcon: {
      size: "20px",
    },
    trailingIcon: {
      size: "20px",
    },
    labelText: {
      fontFamily: md.sys.typescale.label.large.fontFamily,
      lineHeight: md.sys.typescale.label.large.lineHeight,
      fontSize: md.sys.typescale.label.large.fontSize,
      letterSpacing: md.sys.typescale.label.large.letterSpacing,
      fontWeight: md.sys.typescale.label.large.fontWeight,
    },
    supportingText: {
      fontFamily: md.sys.typescale.body.small.fontFamily,
      lineHeight: md.sys.typescale.body.small.lineHeight,
      fontSize: md.sys.typescale.body.small.fontSize,
      letterSpacing: md.sys.typescale.body.small.letterSpacing,
      fontWeight: md.sys.typescale.body.small.fontWeight,
    },
    trailingSupportingText: {
      fontFamily: md.sys.typescale.label.large.fontFamily,
      lineHeight: md.sys.typescale.label.large.lineHeight,
      fontSize: md.sys.typescale.label.large.fontSize,
      letterSpacing: md.sys.typescale.label.large.letterSpacing,
      fontWeight: md.sys.typescale.label.large.fontWeight,
    },
    focus: {
      indicator: {
        color: md.sys.color.secondary,
        thickness: md.sys.state.focusIndicator.thickness,
        outlineOffset: "-2px",
      },
    },
  },
  standard: {
    container: {
      color: md.sys.color.surfaceContainerLow,
      shadowColor: md.sys.color.shadow,
    },
    menuItem: {
      container: {
        color: md.sys.color.surfaceContainerLow,
      },
      labelText: {
        color: md.sys.color.onSurface,
      },
      supportingText: {
        color: md.sys.color.onSurfaceVariant,
      },
      leadingIcon: {
        color: md.sys.color.onSurfaceVariant,
      },
      trailingIcon: {
        color: md.sys.color.onSurfaceVariant,
      },
      trailingSupportingText: {
        color: md.sys.color.onSurfaceVariant,
      },
      disabled: {
        labelText: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
        supportingText: {
          color: md.sys.color.onSurface,
          opacity: "0.38",
        },
        trailingSupportingText: {
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
      },
      hovered: {
        stateLayer: {
          color: md.sys.color.onSurface,
          opacity: md.sys.state.hover.stateLayerOpacity,
        },
        labelText: {
          color: md.sys.color.onSurface,
        },
        leadingIcon: {
          color: md.sys.color.onSurfaceVariant,
        },
        trailingIcon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      focused: {
        stateLayer: {
          color: md.sys.color.onSurface,
          opacity: md.sys.state.focus.stateLayerOpacity,
        },
        labelText: {
          color: md.sys.color.onSurface,
        },
        leadingIcon: {
          color: md.sys.color.onSurfaceVariant,
        },
        trailingIcon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      pressed: {
        stateLayer: {
          color: md.sys.color.onSurface,
          opacity: md.sys.state.pressed.stateLayerOpacity,
        },
        labelText: {
          color: md.sys.color.onSurface,
        },
        leadingIcon: {
          color: md.sys.color.onSurfaceVariant,
        },
        trailingIcon: {
          color: md.sys.color.onSurfaceVariant,
        },
      },
      active: {
        stateLayer: {
          color: md.sys.color.onSurface,
          opacity: md.sys.state.hover.stateLayerOpacity,
        },
      },
    },
  },
};

export const menuToken = menuComponentToken;

// progress-indicators
const progressIndicatorToken = {
  linear: {
    height: "4px",
    activeIndicator: {
      thickness: "4px",
      wave: {
        amplitude: "3px",
        wavelength: "40px",
      },
    },
    track: {
      thickness: "4px",
    },
    stopIndicator: {
      size: "4px",
      trailingSpace: "0px",
    },
    trackActiveIndicatorSpace: "4px",
    indeterminate: {
      activeIndicator: {
        wave: {
          wavelength: "20px",
        },
      },
    },
  },
  circular: {
    size: "40px",
    activeIndicator: {
      thickness: "4px",
      wave: {
        amplitude: "1.6px",
        wavelength: "15px",
      },
    },
    track: {
      thickness: "4px",
    },
    trackActiveIndicatorSpace: "4px",
  },
};

export const progressIndicator = progressIndicatorToken;

// switches

const switchComponentToken = {
  track: {
    height: "32px",
    width: "52px",
    shape: md.sys.shape.corner.full,
    outline: {
      width: "2px",
    },
  },
  handle: {
    height: "20px",
    width: "20px",
    shape: md.sys.shape.corner.full,
    shadowColor: md.sys.color.shadow,
    elevation: md.sys.elevation.level1,
  },
  withIcon: {
    handle: {
      height: "24px",
      width: "24px",
    },
  },
  stateLayer: {
    size: "40px",
    shape: md.sys.shape.corner.full,
  },
  target: {
    size: "48px",
  },
  focus: {
    indicator: {
      color: md.sys.color.secondary,
      thickness: md.sys.state.focusIndicator.thickness,
      offset: md.sys.state.focusIndicator.outerOffset,
    },
  },
  selected: {
    icon: {
      color: md.sys.color.onPrimaryContainer,
      size: "16px",
    },
    track: {
      color: md.sys.color.primary,
    },
    handle: {
      color: md.sys.color.onPrimary,
      height: "24px",
      width: "24px",
    },
    hover: {
      icon: {
        color: md.sys.color.onPrimaryContainer,
      },
      track: {
        color: md.sys.color.primary,
      },
      stateLayer: {
        color: md.sys.color.primary,
        opacity: "0.08",
      },
      handle: {
        color: md.sys.color.primaryContainer,
      },
    },
    focus: {
      icon: {
        color: md.sys.color.onPrimaryContainer,
      },
      track: {
        color: md.sys.color.primary,
      },
      stateLayer: {
        color: md.sys.color.primary,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      handle: {
        color: md.sys.color.primaryContainer,
      },
    },
    pressed: {
      icon: {
        color: md.sys.color.onPrimaryContainer,
      },
      track: {
        color: md.sys.color.primary,
      },
      stateLayer: {
        color: md.sys.color.primary,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      handle: {
        color: md.sys.color.primaryContainer,
      },
    },
  },
  unselected: {
    icon: {
      color: md.sys.color.surfaceContainerHighest,
      size: "16px",
    },
    track: {
      color: md.sys.color.surfaceContainerHighest,
      outline: {
        color: md.sys.color.outline,
      },
    },
    handle: {
      color: md.sys.color.outline,
      height: "16px",
      width: "16px",
    },
    hover: {
      icon: {
        color: md.sys.color.surfaceContainerHighest,
      },
      track: {
        color: md.sys.color.surfaceContainerHighest,
        outline: {
          color: md.sys.color.outline,
        },
      },
      stateLayer: {
        color: md.sys.color.onSurface,
        opacity: "0.08",
      },
      handle: {
        color: md.sys.color.onSurfaceVariant,
      },
    },
    focus: {
      icon: {
        color: md.sys.color.surfaceContainerHighest,
      },
      track: {
        color: md.sys.color.surfaceContainerHighest,
        outline: {
          color: md.sys.color.outline,
        },
      },
      stateLayer: {
        color: md.sys.color.onSurface,
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      handle: {
        color: md.sys.color.onSurfaceVariant,
      },
    },
    pressed: {
      icon: {
        color: md.sys.color.surfaceContainerHighest,
      },
      track: {
        color: md.sys.color.surfaceContainerHighest,
        outline: {
          color: md.sys.color.outline,
        },
      },
      stateLayer: {
        color: md.sys.color.onSurface,
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      handle: {
        color: md.sys.color.onSurfaceVariant,
      },
    },
  },
  disabled: {
    track: {
      opacity: "0.12",
    },
    selected: {
      icon: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
      track: {
        color: md.sys.color.onSurface,
      },
      handle: {
        color: md.sys.color.surface,
        opacity: "1",
      },
    },
    unselected: {
      icon: {
        color: md.sys.color.surfaceContainerHighest,
        opacity: "0.38",
      },
      track: {
        color: md.sys.color.surfaceContainerHighest,
        outline: {
          color: md.sys.color.onSurface,
        },
      },
      handle: {
        color: md.sys.color.onSurface,
        opacity: "0.38",
      },
    },
    handle: {
      opacity: "0.38",
      elevation: md.sys.elevation.level0,
    },
  },
  pressed: {
    handle: {
      height: "28px",
      width: "28px",
    },
  },
};

export const switchToken = switchComponentToken;

// text-fields

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
