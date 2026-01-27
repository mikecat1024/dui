import { md } from "../../theme/theme.css.js";

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
