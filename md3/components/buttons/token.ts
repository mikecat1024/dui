import { md } from "../../theme/theme.css.js";

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
