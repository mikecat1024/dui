import { md } from "../../theme/theme.css.js";

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
