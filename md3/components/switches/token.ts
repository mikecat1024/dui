import { md } from "../../theme/theme.css.js";

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
