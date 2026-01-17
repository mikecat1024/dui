import { md } from "../../theme/theme.css.js";

const buttonToken = {
  small: {
    container: {
      /** Button small container height */
      height: "40px",
      shape: {
        /** Button small shape round */
        round: md.sys.shape.corner.full,
      },
    },
    outlined: {
      outline: {
        /** Button small outline width */
        width: "1px",
      },
    },
    /** Button small label size */
    labelText: md.sys.typescale.label.large,
    icon: {
      /** Button small icon size */
      size: "20px",
    },
    /** Button small leading space */
    leadingSpace: "16px",
    /** Button small between icon label space */
    iconLabelSpace: "8px",
    /** Button small trailing space */
    trailingSpace: "16px",
    pressed: {
      container: {
        /** Button small shape pressed morph */
        shape: md.sys.shape.corner.small,
        cornerSize: {
          motion: {
            spring: {
              /** Button small shape spring animation damping */
              damping: md.sys.motion.spring.fast.spatial.damping,
              /** Button small shape spring animation stiffness */
              stiffness: md.sys.motion.spring.fast.spatial.stiffness,
            },
          },
        },
      },
    },
    selected: {
      container: {
        shape: {
          /** Button small selected container shape round */
          round: md.sys.shape.corner.medium,
        },
      },
    },
  },
  filled: {
    container: {
      /** Button filled container color */
      color: md.sys.color.primary,
      /** Button filled shadow color */
      shadowColor: md.sys.color.shadow,
      /** Button filled elevation */
      elevation: md.sys.elevation.level0,
    },
    labelText: {
      /** Button filled label color */
      color: md.sys.color.onPrimary,
    },
    icon: {
      /** Button filled icon color */
      color: md.sys.color.onPrimary,
    },
    unselected: {
      container: {
        /** Button filled container color - toggle (unselected) */
        color: md.sys.color.surfaceContainer,
      },
      labelText: {
        /** Button filled label color - toggle (unselected) */
        color: md.sys.color.onSurfaceVariant,
      },
      icon: {
        /** Button filled icon color - toggle (unselected) */
        color: md.sys.color.onSurfaceVariant,
      },
      hovered: {
        stateLayer: {
          /** Button filled hovered container state layer color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
        labelText: {
          /** Button filled hovered label color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          /** Button filled hovered icon color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
      },
      focused: {
        stateLayer: {
          /** Button filled focused container state layer color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
        labelText: {
          /** Button filled focused label color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          /** Button filled focused icon color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
      },
      pressed: {
        stateLayer: {
          /** Button filled pressed container state layer color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
        labelText: {
          /** Button filled pressed label color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          /** Button filled pressed icon color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
      },
    },
    selected: {
      container: {
        /** Button filled container color - toggle (selected) */
        color: md.sys.color.primary,
      },
      labelText: {
        /** Button filled label color - toggle (selected) */
        color: md.sys.color.onPrimary,
      },
      icon: {
        /** Button filled icon color - toggle (selected) */
        color: md.sys.color.onPrimary,
      },
      hovered: {
        stateLayer: {
          /** Button filled hovered container state layer color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        labelText: {
          /** Button filled hovered label color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        icon: {
          /** Button filled hovered icon color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
      },
      focused: {
        stateLayer: {
          /** Button filled focused container state layer color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        labelText: {
          /** Button filled focused label color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        icon: {
          /** Button filled focused icon color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
      },
      pressed: {
        stateLayer: {
          /** Button filled pressed container state layer color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        labelText: {
          /** Button filled pressed label color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        icon: {
          /** Button filled pressed icon color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
      },
    },
    disabled: {
      container: {
        /** Button filled disabled container color */
        color: md.sys.color.onSurface,
        /** Button filled disabled container opacity */
        opacity: "0.1",
        /** Button filled disabled container elevation */
        elevation: md.sys.elevation.level0,
      },
      labelText: {
        /** Button filled disabled label color */
        color: md.sys.color.onSurface,
        /** Button filled disabled label opacity */
        opacity: "0.38",
      },
      icon: {
        /** Button filled disabled icon color */
        color: md.sys.color.onSurface,
        /** Button filled disabled icon opacity */
        opacity: "0.38",
      },
    },
    hovered: {
      stateLayer: {
        /** Button filled hovered container state layer color */
        color: md.sys.color.onPrimary,
        /** Button filled hovered container state layer opacity */
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
      container: {
        /** Button filled hovered container elevation */
        elevation: md.sys.elevation.level1,
      },
      labelText: {
        /** Button filled hovered label color */
        color: md.sys.color.onPrimary,
      },
      icon: {
        /** Button filled hovered icon color */
        color: md.sys.color.onPrimary,
      },
    },
    focused: {
      stateLayer: {
        /** Button filled focused container state layer color */
        color: md.sys.color.onPrimary,
        /** Button filled focused container state layer opacity */
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      container: {
        /** Button filled focused container state layer elevation */
        elevation: md.sys.elevation.level0,
      },
      labelText: {
        /** Button filled focused label color */
        color: md.sys.color.onPrimary,
      },
      icon: {
        /** Button filled focused icon color */
        color: md.sys.color.onPrimary,
      },
    },
    pressed: {
      stateLayer: {
        /** Button filled pressed container state layer color */
        color: md.sys.color.onPrimary,
        /** Button filled pressed container state layer opacity */
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      container: {
        /** Button filled pressed container state layer elevation */
        elevation: md.sys.elevation.level0,
      },
      labelText: {
        /** Button filled pressed label color */
        color: md.sys.color.onPrimary,
      },
      icon: {
        /** Button filled pressed icon color */
        color: md.sys.color.onPrimary,
      },
    },
  },
  elevated: {
    container: {
      /** Button elevated container color */
      color: md.sys.color.surfaceContainerLow,
      /** Button elevated shadow color */
      shadowColor: md.sys.color.shadow,
      /** Button elevated elevation */
      elevation: md.sys.elevation.level1,
    },
    labelText: {
      /** Button elevated label color */
      color: md.sys.color.primary,
    },
    icon: {
      /** Button elevated icon color */
      color: md.sys.color.primary,
    },
    unselected: {
      container: {
        /** Button elevated container color - toggle (unselected) */
        color: md.sys.color.surfaceContainerLow,
      },
      labelText: {
        /** Button elevated label color - toggle (unselected) */
        color: md.sys.color.primary,
      },
      icon: {
        /** Button elevated icon color - toggle (unselected) */
        color: md.sys.color.primary,
      },
      hovered: {
        stateLayer: {
          /** Button elevated hovered container state layer color - toggle (unselected) */
          color: md.sys.color.primary,
        },
        labelText: {
          /** Button elevated hovered label color - toggle (unselected) */
          color: md.sys.color.primary,
        },
        icon: {
          /** Button elevated hovered icon color - toggle (unselected) */
          color: md.sys.color.primary,
        },
      },
      focused: {
        stateLayer: {
          /** Button elevated focused container state layer color - toggle (unselected) */
          color: md.sys.color.primary,
        },
        labelText: {
          /** Button elevated focused label color - toggle (unselected) */
          color: md.sys.color.primary,
        },
        icon: {
          /** Button elevated focused icon color - toggle (unselected) */
          color: md.sys.color.primary,
        },
      },
      pressed: {
        stateLayer: {
          /** Button elevated pressed container state layer color - toggle (unselected) */
          color: md.sys.color.primary,
        },
        labelText: {
          /** Button elevated pressed label color - toggle (unselected) */
          color: md.sys.color.primary,
        },
        icon: {
          /** Button elevated pressed icon color - toggle (unselected) */
          color: md.sys.color.primary,
        },
      },
    },
    selected: {
      container: {
        /** Button elevated container color - toggle (selected) */
        color: md.sys.color.primary,
      },
      labelText: {
        /** Button elevated label color - toggle (selected) */
        color: md.sys.color.onPrimary,
      },
      icon: {
        /** Button elevated icon color - toggle (selected) */
        color: md.sys.color.onPrimary,
      },
      hovered: {
        stateLayer: {
          /** Button elevated hovered container state layer color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        labelText: {
          /** Button elevated hovered label color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        icon: {
          /** Button elevated hovered icon color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
      },
      focused: {
        stateLayer: {
          /** Button elevated focused container state layer color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        labelText: {
          /** Button elevated focused label color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        icon: {
          /** Button elevated focused icon color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
      },
      pressed: {
        stateLayer: {
          /** Button elevated pressed container state layer color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        labelText: {
          /** Button elevated pressed label color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        icon: {
          /** Button elevated pressed icon color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
      },
    },
    disabled: {
      container: {
        /** Button elevated disabled container color */
        color: md.sys.color.onSurface,
        /** Button elevated disabled container opacity */
        opacity: "0.1",
        /** Button elevated disabled container elevation */
        elevation: md.sys.elevation.level0,
      },
      labelText: {
        /** Button elevated disabled label color */
        color: md.sys.color.onSurface,
        /** Button elevated disabled label opacity */
        opacity: "0.38",
      },
      icon: {
        /** Button elevated disabled icon color */
        color: md.sys.color.onSurface,
        /** Button elevated disabled icon opacity */
        opacity: "0.38",
      },
    },
    hovered: {
      stateLayer: {
        /** Button elevated hovered container state layer color */
        color: md.sys.color.primary,
        /** Button elevated hovered container state layer opacity */
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
      container: {
        /** Button elevated hovered container elevation */
        elevation: md.sys.elevation.level2,
      },
      labelText: {
        /** Button elevated hovered label color */
        color: md.sys.color.primary,
      },
      icon: {
        /** Button elevated hovered icon color */
        color: md.sys.color.primary,
      },
    },
    focused: {
      stateLayer: {
        /** Button elevated focused container state layer color */
        color: md.sys.color.primary,
        /** Button elevated focused container state layer opacity */
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      container: {
        /** Button elevated focused container state layer elevation */
        elevation: md.sys.elevation.level1,
      },
      labelText: {
        /** Button elevated focused label color */
        color: md.sys.color.primary,
      },
      icon: {
        /** Button elevated focused icon color */
        color: md.sys.color.primary,
      },
    },
    pressed: {
      stateLayer: {
        /** Button elevated pressed container state layer color */
        color: md.sys.color.primary,
        /** Button elevated pressed container state layer opacity */
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      container: {
        /** Button elevated pressed container state layer elevation */
        elevation: md.sys.elevation.level1,
      },
      labelText: {
        /** Button elevated pressed label color */
        color: md.sys.color.primary,
      },
      icon: {
        /** Button elevated pressed icon color */
        color: md.sys.color.primary,
      },
    },
  },
  tonal: {
    container: {
      /** Button tonal container color */
      color: md.sys.color.secondaryContainer,
      /** Button tonal shadow color */
      shadowColor: md.sys.color.shadow,
      /** Button tonal elevation */
      elevation: md.sys.elevation.level0,
    },
    labelText: {
      /** Button tonal label color */
      color: md.sys.color.onSecondaryContainer,
    },
    icon: {
      /** Button tonal icon color */
      color: md.sys.color.onSecondaryContainer,
    },
    unselected: {
      container: {
        /** Button tonal container color - toggle (unselected) */
        color: md.sys.color.secondaryContainer,
      },
      labelText: {
        /** Button tonal label color - toggle (unselected) */
        color: md.sys.color.onSecondaryContainer,
      },
      icon: {
        /** Button tonal icon color - toggle (unselected) */
        color: md.sys.color.onSecondaryContainer,
      },
      hovered: {
        stateLayer: {
          /** Button tonal hovered container state layer color - toggle (unselected) */
          color: md.sys.color.onSecondaryContainer,
        },
        labelText: {
          /** Button tonal hovered label color - toggle (unselected) */
          color: md.sys.color.onSecondaryContainer,
        },
        icon: {
          /** Button tonal hovered icon color - toggle (unselected) */
          color: md.sys.color.onSecondaryContainer,
        },
      },
      focused: {
        stateLayer: {
          /** Button tonal focused container state layer color - toggle (unselected) */
          color: md.sys.color.onSecondaryContainer,
        },
        labelText: {
          /** Button tonal focused label color - toggle (unselected) */
          color: md.sys.color.onSecondaryContainer,
        },
        icon: {
          /** Button tonal focused icon color - toggle (unselected) */
          color: md.sys.color.onSecondaryContainer,
        },
      },
      pressed: {
        stateLayer: {
          /** Button tonal pressed container state layer color - toggle (unselected) */
          color: md.sys.color.onSecondaryContainer,
        },
        labelText: {
          /** Button tonal pressed label color - toggle (unselected) */
          color: md.sys.color.onSecondaryContainer,
        },
        icon: {
          /** Button tonal pressed icon color - toggle (unselected) */
          color: md.sys.color.onSecondaryContainer,
        },
      },
    },
    selected: {
      container: {
        /** Button tonal container color - toggle (selected) */
        color: md.sys.color.secondary,
      },
      labelText: {
        /** Button tonal label color - toggle (selected) */
        color: md.sys.color.onPrimary,
      },
      icon: {
        /** Button tonal icon color - toggle (selected) */
        color: md.sys.color.onPrimary,
      },
      hovered: {
        stateLayer: {
          /** Button tonal hovered container state layer color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        labelText: {
          /** Button tonal hovered label color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        icon: {
          /** Button tonal hovered icon color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
      },
      focused: {
        stateLayer: {
          /** Button tonal focused container state layer color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        labelText: {
          /** Button tonal focused label color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        icon: {
          /** Button tonal focused icon color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
      },
      pressed: {
        stateLayer: {
          /** Button tonal pressed container state layer color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        labelText: {
          /** Button tonal pressed label color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
        icon: {
          /** Button tonal pressed icon color - toggle (selected) */
          color: md.sys.color.onPrimary,
        },
      },
    },
    disabled: {
      container: {
        /** Button tonal disabled container color */
        color: md.sys.color.onSurface,
        /** Button tonal disabled container opacity */
        opacity: "0.1",
        /** Button tonal disabled container elevation */
        elevation: md.sys.elevation.level0,
      },
      labelText: {
        /** Button tonal disabled label color */
        color: md.sys.color.onSurface,
        /** Button tonal disabled label opacity */
        opacity: "0.38",
      },
      icon: {
        /** Button tonal disabled icon color */
        color: md.sys.color.onSurface,
        /** Button tonal disabled icon opacity */
        opacity: "0.38",
      },
    },
    hovered: {
      stateLayer: {
        /** Button tonal hovered container state layer color */
        color: md.sys.color.onSecondaryContainer,
        /** Button tonal hovered container state layer opacity */
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
      container: {
        /** Button tonal hovered container elevation */
        elevation: md.sys.elevation.level1,
      },
      labelText: {
        /** Button tonal hovered label color */
        color: md.sys.color.onSecondaryContainer,
      },
      icon: {
        /** Button tonal hovered icon color */
        color: md.sys.color.onSecondaryContainer,
      },
    },
    focused: {
      stateLayer: {
        /** Button tonal focused container state layer color */
        color: md.sys.color.onSecondaryContainer,
        /** Button tonal focused container state layer opacity */
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      container: {
        /** Button tonal focused container state layer elevation */
        elevation: md.sys.elevation.level0,
      },
      labelText: {
        /** Button tonal focused label color */
        color: md.sys.color.onSecondaryContainer,
      },
      icon: {
        /** Button tonal focused icon color */
        color: md.sys.color.onSecondaryContainer,
      },
    },
    pressed: {
      stateLayer: {
        /** Button tonal pressed container state layer color */
        color: md.sys.color.onSecondaryContainer,
        /** Button tonal pressed container state layer opacity */
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      container: {
        /** Button tonal pressed container state layer elevation */
        elevation: md.sys.elevation.level0,
      },
      labelText: {
        /** Button tonal pressed label color */
        color: md.sys.color.onSecondaryContainer,
      },
      icon: {
        /** Button tonal pressed icon color */
        color: md.sys.color.onSecondaryContainer,
      },
    },
  },
  outlined: {
    outline: {
      /** Button outlined outline color */
      color: md.sys.color.outlineVariant,
    },
    labelText: {
      /** Button outlined label color */
      color: md.sys.color.onSurfaceVariant,
    },
    icon: {
      /** Button outlined icon color */
      color: md.sys.color.onSurfaceVariant,
    },
    unselected: {
      labelText: {
        /** Button outlined label color - toggle (unselected) */
        color: md.sys.color.onSurfaceVariant,
      },
      icon: {
        /** Button outlined icon color - toggle (unselected) */
        color: md.sys.color.onSurfaceVariant,
      },
      disabled: {
        outline: {
          /** Button outlined disabled outline color (unselected) */
          color: md.sys.color.outlineVariant,
        },
      },
      hovered: {
        stateLayer: {
          /** Button outlined hovered state layer color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
        outline: {
          /** Button outlined hovered outline color - toggle (unselected) */
          color: md.sys.color.outlineVariant,
        },
        labelText: {
          /** Button outlined hovered label color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          /** Button outlined hovered icon color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
      },
      focused: {
        stateLayer: {
          /** Button outlined focused container state layer color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
        outline: {
          /** Button outlined focused outline color - toggle (unselected) */
          color: md.sys.color.outlineVariant,
        },
        labelText: {
          /** Button outlined focused label color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          /** Button outlined focused icon color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
      },
      pressed: {
        stateLayer: {
          /** Button outlined pressed container state layer color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
        outline: {
          /** Button outlined pressed outline color - toggle (unselected) */
          color: md.sys.color.outlineVariant,
        },
        labelText: {
          /** Button outlined pressed label color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
        icon: {
          /** Button outlined pressed icon color - toggle (unselected) */
          color: md.sys.color.onSurfaceVariant,
        },
      },
    },
    selected: {
      container: {
        /** Button outlined container color - toggle (selected) */
        color: md.sys.color.inverseSurface,
      },
      labelText: {
        /** Button outlined label color - toggle (selected) */
        color: md.sys.color.inverseOnSurface,
      },
      icon: {
        /** Button outlined icon color - toggle (selected) */
        color: md.sys.color.inverseOnSurface,
      },
      disabled: {
        container: {
          /** Button outlined disabled container color (selected) */
          color: md.sys.color.onSurface,
        },
      },
      hovered: {
        stateLayer: {
          /** Button outlined hovered state layer color - toggle (selected) */
          color: md.sys.color.inverseOnSurface,
        },
        labelText: {
          /** Button outlined hovered label color - toggle (selected) */
          color: md.sys.color.inverseOnSurface,
        },
        icon: {
          /** Button outlined hovered icon color - toggle (selected) */
          color: md.sys.color.inverseOnSurface,
        },
      },
      focused: {
        stateLayer: {
          /** Button outlined focused container state layer color - toggle (selected) */
          color: md.sys.color.inverseOnSurface,
        },
        labelText: {
          /** Button outlined focused label color - toggle (selected) */
          color: md.sys.color.inverseOnSurface,
        },
        icon: {
          /** Button outlined focused icon color - toggle (selected) */
          color: md.sys.color.inverseOnSurface,
        },
      },
      pressed: {
        stateLayer: {
          /** Button outlined pressed container state layer color - toggle (selected) */
          color: md.sys.color.inverseOnSurface,
        },
        labelText: {
          /** Button outlined pressed label color - toggle (selected) */
          color: md.sys.color.inverseOnSurface,
        },
        icon: {
          /** Button outlined pressed icon color - toggle (selected) */
          color: md.sys.color.inverseOnSurface,
        },
      },
    },
    disabled: {
      outline: {
        /** Button outlined disabled outline color */
        color: md.sys.color.outlineVariant,
      },
      container: {
        /** Button outlined disabled container opacity */
        opacity: "0.1",
      },
      labelText: {
        /** Button outlined disabled label color */
        color: md.sys.color.onSurface,
        /** Button outlined disabled label opacity */
        opacity: "0.38",
      },
      icon: {
        /** Button outlined disabled icon color */
        color: md.sys.color.onSurface,
        /** Button outlined disabled icon opacity */
        opacity: "0.38",
      },
    },
    hovered: {
      stateLayer: {
        /** Button outlined hovered state layer color */
        color: md.sys.color.onSurfaceVariant,
        /** Button outlined hovered state layer opacity */
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
      outline: {
        /** Button outlined hovered outline color */
        color: md.sys.color.outlineVariant,
      },
      labelText: {
        /** Button outlined hovered label color */
        color: md.sys.color.onSurfaceVariant,
      },
      icon: {
        /** Button outlined hovered icon color */
        color: md.sys.color.onSurfaceVariant,
      },
    },
    focused: {
      stateLayer: {
        /** Button outlined focused container state layer color */
        color: md.sys.color.onSurfaceVariant,
        /** Button outlined focused container state layer opacity */
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      outline: {
        /** Button outlined focused outline color */
        color: md.sys.color.outlineVariant,
      },
      labelText: {
        /** Button outlined focused label color */
        color: md.sys.color.onSurfaceVariant,
      },
      icon: {
        /** Button outlined focused icon color */
        color: md.sys.color.onSurfaceVariant,
      },
    },
    pressed: {
      stateLayer: {
        /** Button outlined pressed container state layer color */
        color: md.sys.color.onSurfaceVariant,
        /** Button outlined pressed container state layer opacity */
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      outline: {
        /** Button outlined pressed outline color */
        color: md.sys.color.outlineVariant,
      },
      labelText: {
        /** Button outlined pressed label color */
        color: md.sys.color.onSurfaceVariant,
      },
      icon: {
        /** Button outlined pressed icon color */
        color: md.sys.color.onSurfaceVariant,
      },
    },
  },
  text: {
    labelText: {
      /** Button text label color */
      color: md.sys.color.primary,
    },
    icon: {
      /** Button text icon color */
      color: md.sys.color.primary,
    },
    disabled: {
      container: {
        /** Button text disabled container color */
        color: md.sys.color.onSurface,
        /** Button text disabled container opacity */
        opacity: "0.1",
      },
      labelText: {
        /** Button text disabled label color */
        color: md.sys.color.onSurface,
        /** Button text disabled label opacity */
        opacity: "0.38",
      },
      icon: {
        /** Button text disabled icon color */
        color: md.sys.color.onSurface,
        /** Button text disabled icon opacity */
        opacity: "0.38",
      },
    },
    hovered: {
      stateLayer: {
        /** Button text hovered state layer color */
        color: md.sys.color.primary,
        /** Button text hovered state layer opacity */
        opacity: md.sys.state.hover.stateLayerOpacity,
      },
      labelText: {
        /** Button text hovered label color */
        color: md.sys.color.primary,
      },
      icon: {
        /** Button text hovered icon color */
        color: md.sys.color.primary,
      },
    },
    focused: {
      stateLayer: {
        /** Button text focused state layer color */
        color: md.sys.color.primary,
        /** Button text focused state layer opacity */
        opacity: md.sys.state.focus.stateLayerOpacity,
      },
      labelText: {
        /** Button text focused label color */
        color: md.sys.color.primary,
      },
      icon: {
        /** Button text focused icon color */
        color: md.sys.color.primary,
      },
    },
    pressed: {
      stateLayer: {
        /** Button text pressed state layer color */
        color: md.sys.color.primary,
        /** Button text pressed state layer opacity */
        opacity: md.sys.state.pressed.stateLayerOpacity,
      },
      labelText: {
        /** Button text pressed label color */
        color: md.sys.color.primary,
      },
      icon: {
        /** Button text pressed icon color */
        color: md.sys.color.primary,
      },
    },
  },
};

export const button = buttonToken;
