import { md } from "../../theme/theme.css.js";

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
