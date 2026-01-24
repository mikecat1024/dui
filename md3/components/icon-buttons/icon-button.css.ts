import { createVar, fallbackVar, globalStyle, style } from "@vanilla-extract/css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { composite } from "../../utils/utils.js";
import { iconButton } from "./token.js";

const disabled = ':is(:disabled, [aria-disabled="true"])';
const enabled = `:not(${disabled})`;

const layerState = {
  hovered: `&:hover${enabled}::before`,
  focused: `&:focus-visible${enabled}::before`,
  pressed: `&:active${enabled}::before`,
};

const containerState = {
  hovered: `&:hover${enabled}`,
  focused: `&:focus-visible${enabled}`,
  pressed: `&:active${enabled}`,
  disabled: `&${disabled}`,
};

const containerColor = createVar();
const containerDisabledColor = createVar();

const iconColor = createVar();
const iconDisabledColor = createVar();
const iconHoveredColor = createVar();
const iconFocusedColor = createVar();
const iconPressedColor = createVar();

const outlineColor = createVar();
const outlineDisabledColor = createVar();
const outlineWidth = createVar();

const layerHoveredColor = createVar();
const layerFocusedColor = createVar();
const layerPressedColor = createVar();

const layerHoveredOpacity = createVar();
const layerFocusedOpacity = createVar();
const layerPressedOpacity = createVar();

const iconButtonBaseStyle = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  // Offset the internal padding so icon-only placement aligns in tight layouts (e.g. text field trailing icon).
  margin: `0 -${iconButton.small.default.leadingSpace} 0 -${iconButton.small.default.trailingSpace}`,
  outline: "none",
  border: "0 solid transparent",
  borderRadius: iconButton.small.container.shape.round,
  boxShadow: `inset 0 0 0 ${outlineWidth} ${outlineColor}`,
  backgroundColor: containerColor,
  cursor: "pointer",
  paddingRight: iconButton.small.default.trailingSpace,
  paddingLeft: iconButton.small.default.leadingSpace,
  height: iconButton.small.container.height,
  color: iconColor,

  selectors: {
    "&::before": {
      position: "absolute",
      inset: 0,
      opacity: 0,
      borderRadius: "inherit",
      content: "",
    },
    [containerState.hovered]: {
      color: iconHoveredColor,
    },
    [containerState.focused]: {
      color: iconFocusedColor,
    },
    [containerState.pressed]: {
      // shape is not changed on pressed state in Material Design 3
      // borderRadius: iconButton.small.pressed.container.shape,
      color: iconPressedColor,
    },
    [containerState.disabled]: {
      boxShadow: `inset 0 0 0 ${outlineWidth} ${fallbackVar(outlineDisabledColor, outlineColor)}`,
      backgroundColor: fallbackVar(containerDisabledColor, containerColor),
      cursor: "not-allowed",
      color: fallbackVar(iconDisabledColor, iconColor),
    },
    [layerState.hovered]: {
      opacity: layerHoveredOpacity,
      backgroundColor: layerHoveredColor,
    },
    [layerState.focused]: {
      opacity: layerFocusedOpacity,
      backgroundColor: layerFocusedColor,
    },
    [layerState.pressed]: {
      opacity: layerPressedOpacity,
      backgroundColor: layerPressedColor,
    },
  },
});

globalStyle(`${iconButtonBaseStyle} svg`, {
  width: iconButton.small.icon.size,
  height: iconButton.small.icon.size,
});

export const iconButtonStyle = recipe({
  base: iconButtonBaseStyle,
  variants: {
    variant: {
      standard: {
        vars: {
          [outlineWidth]: "0",
          [outlineColor]: "transparent",
          [outlineDisabledColor]: "transparent",
          [containerColor]: "transparent",
          [containerDisabledColor]: "transparent",
          [iconColor]: iconButton.standard.icon.color,
          [iconDisabledColor]: composite(
            iconButton.standard.disabled.icon.color,
            iconButton.standard.disabled.icon.opacity,
          ),
          [iconHoveredColor]: iconButton.standard.hovered.icon.color,
          [iconFocusedColor]: iconButton.standard.focused.icon.color,
          [iconPressedColor]: iconButton.standard.pressed.icon.color,
          [layerHoveredColor]: iconButton.standard.hovered.stateLayer.color,
          [layerFocusedColor]: iconButton.standard.focused.stateLayer.color,
          [layerPressedColor]: iconButton.standard.pressed.stateLayer.color,
          [layerHoveredOpacity]: iconButton.standard.hovered.stateLayer.opacity,
          [layerFocusedOpacity]: iconButton.standard.focused.stateLayer.opacity,
          [layerPressedOpacity]: iconButton.standard.pressed.stateLayer.opacity,
        },
      },
      filled: {
        vars: {
          [outlineWidth]: "0",
          [outlineColor]: "transparent",
          [outlineDisabledColor]: "transparent",
          [containerColor]: iconButton.filled.container.color,
          [containerDisabledColor]: composite(
            iconButton.filled.disabled.container.color,
            iconButton.filled.disabled.container.opacity,
          ),
          [iconColor]: iconButton.filled.icon.color,
          [iconDisabledColor]: composite(
            iconButton.filled.disabled.icon.color,
            iconButton.filled.disabled.icon.opacity,
            containerDisabledColor,
          ),
          [iconHoveredColor]: iconButton.filled.hovered.icon.color,
          [iconFocusedColor]: iconButton.filled.focused.icon.color,
          [iconPressedColor]: iconButton.filled.pressed.icon.color,
          [layerHoveredColor]: iconButton.filled.hovered.stateLayer.color,
          [layerFocusedColor]: iconButton.filled.focused.stateLayer.color,
          [layerPressedColor]: iconButton.filled.pressed.stateLayer.color,
          [layerHoveredOpacity]: iconButton.filled.hovered.stateLayer.opacity,
          [layerFocusedOpacity]: iconButton.filled.focused.stateLayer.opacity,
          [layerPressedOpacity]: iconButton.filled.pressed.stateLayer.opacity,
        },
      },
      tonal: {
        vars: {
          [outlineWidth]: "0",
          [outlineColor]: "transparent",
          [outlineDisabledColor]: "transparent",
          [containerColor]: iconButton.tonal.container.color,
          [containerDisabledColor]: composite(
            iconButton.tonal.disabled.container.color,
            iconButton.tonal.disabled.container.opacity,
          ),
          [iconColor]: iconButton.tonal.icon.color,
          [iconDisabledColor]: composite(
            iconButton.tonal.disabled.icon.color,
            iconButton.tonal.disabled.icon.opacity,
            containerDisabledColor,
          ),
          [iconHoveredColor]: iconButton.tonal.hovered.icon.color,
          [iconFocusedColor]: iconButton.tonal.focused.icon.color,
          [iconPressedColor]: iconButton.tonal.pressed.icon.color,
          [layerHoveredColor]: iconButton.tonal.hovered.stateLayer.color,
          [layerFocusedColor]: iconButton.tonal.focused.stateLayer.color,
          [layerPressedColor]: iconButton.tonal.pressed.stateLayer.color,
          [layerHoveredOpacity]: iconButton.tonal.hovered.stateLayer.opacity,
          [layerFocusedOpacity]: iconButton.tonal.focused.stateLayer.opacity,
          [layerPressedOpacity]: iconButton.tonal.pressed.stateLayer.opacity,
        },
      },
      outlined: {
        vars: {
          [outlineWidth]: iconButton.small.outlined.outline.width,
          [outlineColor]: iconButton.outlined.outline.color,
          [outlineDisabledColor]: iconButton.outlined.disabled.outline.color,
          [containerColor]: "transparent",
          [containerDisabledColor]: "transparent",
          [iconColor]: iconButton.outlined.icon.color,
          [iconDisabledColor]: composite(
            iconButton.outlined.disabled.icon.color,
            iconButton.outlined.disabled.icon.opacity,
          ),
          [iconHoveredColor]: iconButton.outlined.hovered.icon.color,
          [iconFocusedColor]: iconButton.outlined.focused.icon.color,
          [iconPressedColor]: iconButton.outlined.pressed.icon.color,
          [layerHoveredColor]: iconButton.outlined.hovered.stateLayer.color,
          [layerFocusedColor]: iconButton.outlined.focused.stateLayer.color,
          [layerPressedColor]: iconButton.outlined.pressed.stateLayer.color,
          [layerHoveredOpacity]: iconButton.outlined.hovered.stateLayer.opacity,
          [layerFocusedOpacity]: iconButton.outlined.focused.stateLayer.opacity,
          [layerPressedOpacity]: iconButton.outlined.pressed.stateLayer.opacity,
        },
      },
    },
  },
  defaultVariants: {
    variant: "filled",
  },
});

export type IconButtonVariants = RecipeVariants<typeof iconButtonStyle>;
