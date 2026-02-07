import { createVar, fallbackVar } from "@vanilla-extract/css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { shadowColor } from "../../theme/theme.css.js";
import { composite } from "../../utils/utils.js";
import { button } from "./token.js";

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

const labelTextColor = createVar();
const containerColor = createVar();
const containerElevation = createVar();
const outlinedColor = createVar();

const containerDisabledColor = createVar();

const containerHoveredElevation = createVar();
const containerFocusedElevation = createVar();
const containerPressedElevation = createVar();
const containerDisabledElevation = createVar();

const containerHoveredOutlinedColor = createVar();
const containerFocusedOutlinedColor = createVar();
const containerPressedOutlinedColor = createVar();
const containerDisabledOutlinedColor = createVar();

const containerHoveredLabelTextColor = createVar();
const containerFocusedLabelTextColor = createVar();
const containerPressedLabelTextColor = createVar();
const containerDisabledLabelTextColor = createVar();

const layerHoveredOpacity = createVar();
const layerFocusedOpacity = createVar();
const layerPressedOpacity = createVar();

const layerHoveredColor = createVar();
const layerFocusedColor = createVar();
const layerPressedColor = createVar();

export const buttonStyle = recipe({
  base: {
    position: "relative",
    display: "flex",
    alignItems: "center",

    gap: button.small.iconLabelSpace,
    border: "none",
    borderWidth: button.small.outlined.outline.width,
    borderRadius: button.small.container.shape.round,
    boxShadow: containerElevation,
    backgroundColor: containerColor,
    cursor: "pointer",
    paddingRight: button.small.trailingSpace,
    paddingLeft: button.small.leadingSpace,
    ...button.small.labelText,
    height: button.small.container.height,
    color: labelTextColor,

    selectors: {
      "&::before": {
        position: "absolute",
        inset: 0,
        opacity: 0,
        borderRadius: "inherit",
        pointerEvents: "none",
        content: "",
      },

      [containerState.hovered]: {
        borderColor: fallbackVar(containerHoveredOutlinedColor, outlinedColor),
        boxShadow: fallbackVar(containerHoveredElevation, containerElevation),
        color: fallbackVar(containerHoveredLabelTextColor, labelTextColor),
      },
      [containerState.focused]: {
        borderColor: fallbackVar(containerFocusedOutlinedColor, outlinedColor),
        boxShadow: fallbackVar(containerFocusedElevation, containerElevation),
        color: fallbackVar(containerFocusedLabelTextColor, labelTextColor),
      },
      [containerState.pressed]: {
        borderColor: fallbackVar(containerPressedOutlinedColor, outlinedColor),
        boxShadow: fallbackVar(containerPressedElevation, containerElevation),
        color: fallbackVar(containerPressedLabelTextColor, labelTextColor),
      },
      [containerState.disabled]: {
        borderColor: fallbackVar(containerDisabledOutlinedColor, outlinedColor),
        boxShadow: fallbackVar(containerDisabledElevation, containerElevation),
        backgroundColor: fallbackVar(containerDisabledColor, containerColor),
        cursor: "not-allowed",
        color: fallbackVar(containerDisabledLabelTextColor, labelTextColor),
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
  },
  variants: {
    variant: {
      filled: {
        vars: {
          [containerHoveredElevation]: button.filled.hovered.container.elevation,
          [containerFocusedElevation]: button.filled.focused.container.elevation,
          [containerPressedElevation]: button.filled.pressed.container.elevation,
          [containerDisabledElevation]: button.filled.disabled.container.elevation,

          [containerDisabledLabelTextColor]: composite(
            button.filled.disabled.labelText.color,
            button.filled.disabled.labelText.opacity,
            containerDisabledColor,
          ),
          [containerDisabledColor]: composite(
            button.filled.disabled.container.color,
            button.filled.disabled.container.opacity,
          ),

          [layerHoveredColor]: button.filled.hovered.stateLayer.color,
          [layerFocusedColor]: button.filled.focused.stateLayer.color,
          [layerPressedColor]: button.filled.pressed.stateLayer.color,

          [layerHoveredOpacity]: button.filled.hovered.stateLayer.opacity,
          [layerFocusedOpacity]: button.filled.focused.stateLayer.opacity,
          [layerPressedOpacity]: button.filled.pressed.stateLayer.opacity,

          [containerElevation]: button.filled.container.elevation,
          [labelTextColor]: button.filled.labelText.color,
          [containerColor]: button.filled.container.color,

          // Theme class must be on the same element as buttonStyle to resolve shadowColor.
          [shadowColor]: button.filled.container.shadowColor,
        },
      },
      elevated: {
        vars: {
          [containerHoveredElevation]: button.elevated.hovered.container.elevation,
          [containerFocusedElevation]: button.elevated.focused.container.elevation,
          [containerPressedElevation]: button.elevated.pressed.container.elevation,
          [containerDisabledElevation]: button.elevated.disabled.container.elevation,

          [containerDisabledLabelTextColor]: composite(
            button.elevated.disabled.labelText.color,
            button.elevated.disabled.labelText.opacity,
            containerDisabledColor,
          ),
          [containerDisabledColor]: composite(
            button.elevated.disabled.container.color,
            button.elevated.disabled.container.opacity,
          ),

          [layerHoveredColor]: button.elevated.hovered.stateLayer.color,
          [layerFocusedColor]: button.elevated.focused.stateLayer.color,
          [layerPressedColor]: button.elevated.pressed.stateLayer.color,

          [layerHoveredOpacity]: button.elevated.hovered.stateLayer.opacity,
          [layerFocusedOpacity]: button.elevated.focused.stateLayer.opacity,
          [layerPressedOpacity]: button.elevated.pressed.stateLayer.opacity,

          [containerElevation]: button.elevated.container.elevation,
          [labelTextColor]: button.elevated.labelText.color,
          [containerColor]: button.elevated.container.color,

          // Theme class must be on the same element as buttonStyle to resolve shadowColor.
          [shadowColor]: button.elevated.container.shadowColor,
        },
      },
      tonal: {
        vars: {
          [containerHoveredElevation]: button.tonal.hovered.container.elevation,
          [containerFocusedElevation]: button.tonal.focused.container.elevation,
          [containerPressedElevation]: button.tonal.pressed.container.elevation,
          [containerDisabledElevation]: button.tonal.disabled.container.elevation,

          [containerDisabledLabelTextColor]: composite(
            button.tonal.disabled.labelText.color,
            button.tonal.disabled.labelText.opacity,
            containerDisabledColor,
          ),
          [containerDisabledColor]: composite(
            button.tonal.disabled.container.color,
            button.tonal.disabled.container.opacity,
          ),

          [layerHoveredColor]: button.tonal.hovered.stateLayer.color,
          [layerFocusedColor]: button.tonal.focused.stateLayer.color,
          [layerPressedColor]: button.tonal.pressed.stateLayer.color,

          [layerHoveredOpacity]: button.tonal.hovered.stateLayer.opacity,
          [layerFocusedOpacity]: button.tonal.focused.stateLayer.opacity,
          [layerPressedOpacity]: button.tonal.pressed.stateLayer.opacity,

          [containerElevation]: button.tonal.container.elevation,
          [labelTextColor]: button.tonal.labelText.color,
          [containerColor]: button.tonal.container.color,

          // Theme class must be on the same element as buttonStyle to resolve shadowColor.
          [shadowColor]: button.tonal.container.shadowColor,
        },
      },
      outlined: {
        vars: {
          [containerHoveredElevation]: `inset 0 0 0 ${button.small.outlined.outline.width} ${button.outlined.hovered.outline.color}`,
          [containerFocusedElevation]: `inset 0 0 0 ${button.small.outlined.outline.width} ${button.outlined.focused.outline.color}`,
          [containerPressedElevation]: `inset 0 0 0 ${button.small.outlined.outline.width} ${button.outlined.pressed.outline.color}`,
          [containerDisabledElevation]: `inset 0 0 0 ${button.small.outlined.outline.width} ${button.outlined.disabled.outline.color}`,

          [containerHoveredLabelTextColor]: button.outlined.hovered.labelText.color,
          [containerFocusedLabelTextColor]: button.outlined.focused.labelText.color,
          [containerPressedLabelTextColor]: button.outlined.pressed.labelText.color,
          [containerDisabledLabelTextColor]: button.outlined.disabled.labelText.color,

          [containerDisabledLabelTextColor]: composite(
            button.outlined.disabled.labelText.color,
            button.outlined.disabled.labelText.opacity,
          ),

          [layerHoveredColor]: button.outlined.hovered.stateLayer.color,
          [layerFocusedColor]: button.outlined.focused.stateLayer.color,
          [layerPressedColor]: button.outlined.pressed.stateLayer.color,

          [layerHoveredOpacity]: button.outlined.hovered.stateLayer.opacity,
          [layerFocusedOpacity]: button.outlined.focused.stateLayer.opacity,
          [layerPressedOpacity]: button.outlined.pressed.stateLayer.opacity,

          [containerElevation]: `inset 0 0 0 ${button.small.outlined.outline.width} ${button.outlined.outline.color}`,
          [labelTextColor]: button.outlined.labelText.color,
        },
      },
      text: {
        vars: {
          [containerHoveredLabelTextColor]: button.text.hovered.labelText.color,
          [containerFocusedLabelTextColor]: button.text.focused.labelText.color,
          [containerPressedLabelTextColor]: button.text.pressed.labelText.color,
          [containerDisabledLabelTextColor]: button.text.disabled.labelText.color,

          [containerDisabledLabelTextColor]: composite(
            button.text.disabled.labelText.color,
            button.text.disabled.labelText.opacity,
            containerDisabledColor,
          ),
          [containerDisabledColor]: composite(
            button.text.disabled.container.color,
            button.text.disabled.container.opacity,
          ),

          [layerHoveredColor]: button.text.hovered.stateLayer.color,
          [layerFocusedColor]: button.text.focused.stateLayer.color,
          [layerPressedColor]: button.text.pressed.stateLayer.color,

          [layerHoveredOpacity]: button.text.hovered.stateLayer.opacity,
          [layerFocusedOpacity]: button.text.focused.stateLayer.opacity,
          [layerPressedOpacity]: button.text.pressed.stateLayer.opacity,

          [labelTextColor]: button.text.labelText.color,
        },
      },
    },
  },
  defaultVariants: {
    variant: "filled",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonStyle>;
