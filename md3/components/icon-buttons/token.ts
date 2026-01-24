import { md } from "../../theme/theme.css.js";

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
