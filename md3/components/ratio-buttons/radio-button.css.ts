import { createVar, style } from "@vanilla-extract/css";

import { radioButton } from "../../theme/token.js";
import { composite } from "../../utils/utils.js";

const disabled = "[data-disabled]";
const enabled = `:not(${disabled})`;
const checked = "[data-checked]";
const unchecked = "[data-unchecked]";

const hovered = `&:hover${enabled}`;
const focused = `&[data-focused]${enabled}`;
const pressed = `&:active${enabled}`;

const iconColor = createVar();
const stateLayerColor = createVar();
const stateLayerOpacity = createVar();
const indicatorScale = createVar();

// attributes
const iconOutlineWidth = "2px";
const indicatorSize = "10px";
const stateTransitionDuration = "50ms";
const stateTransitionTimingFunction = "ease";

export const radioButtonWrapperStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px",
});

export const radioButtonRootStyle = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  padding: 0,
  width: radioButton.stateLayer.size,
  height: radioButton.stateLayer.size,
  vars: {
    [iconColor]: radioButton.unselected.icon.color,
    [stateLayerColor]: "transparent",
    [stateLayerOpacity]: "0",
    [indicatorScale]: "0",
  },
  selectors: {
    "&::before": {
      position: "absolute",
      inset: 0,
      opacity: stateLayerOpacity,
      borderRadius: "9999px",
      backgroundColor: stateLayerColor,
      content: "",
    },
    [`&${checked}`]: {
      vars: {
        [iconColor]: radioButton.selected.icon.color,
        [indicatorScale]: "1",
      },
    },
    [`&${unchecked}`]: {
      vars: {
        [iconColor]: radioButton.unselected.icon.color,
        [indicatorScale]: "0",
      },
    },
    [`${hovered}${checked}`]: {
      vars: {
        [iconColor]: radioButton.selected.hover.icon.color,
        [stateLayerColor]: radioButton.selected.hover.stateLayer.color,
        [stateLayerOpacity]: radioButton.selected.hover.stateLayer.opacity,
      },
    },
    [`${hovered}${unchecked}`]: {
      vars: {
        [iconColor]: radioButton.unselected.hover.icon.color,
        [stateLayerColor]: radioButton.unselected.hover.stateLayer.color,
        [stateLayerOpacity]: radioButton.unselected.hover.stateLayer.opacity,
      },
    },
    [`${focused}${checked}`]: {
      vars: {
        [iconColor]: radioButton.selected.focus.icon.color,
        [stateLayerColor]: radioButton.selected.focus.stateLayer.color,
        [stateLayerOpacity]: radioButton.selected.focus.stateLayer.opacity,
      },
    },
    [`${focused}${unchecked}`]: {
      vars: {
        [iconColor]: radioButton.unselected.focus.icon.color,
        [stateLayerColor]: radioButton.unselected.focus.stateLayer.color,
        [stateLayerOpacity]: radioButton.unselected.focus.stateLayer.opacity,
      },
    },
    [`${pressed}${checked}`]: {
      vars: {
        [iconColor]: radioButton.selected.pressed.icon.color,
        [stateLayerColor]: radioButton.selected.pressed.stateLayer.color,
        [stateLayerOpacity]: radioButton.selected.pressed.stateLayer.opacity,
      },
    },
    [`${pressed}${unchecked}`]: {
      vars: {
        [iconColor]: radioButton.unselected.pressed.icon.color,
        [stateLayerColor]: radioButton.unselected.pressed.stateLayer.color,
        [stateLayerOpacity]: radioButton.unselected.pressed.stateLayer.opacity,
      },
    },
    [`&${disabled}`]: {
      outline: "none",
      cursor: "not-allowed",
      vars: {
        [stateLayerColor]: "transparent",
        [stateLayerOpacity]: "0",
      },
    },
    [`&${disabled}${checked}`]: {
      vars: {
        [iconColor]: composite(
          radioButton.disabled.selected.icon.color,
          radioButton.disabled.selected.icon.opacity,
        ),
        [indicatorScale]: "1",
      },
    },
    [`&${disabled}${unchecked}`]: {
      vars: {
        [iconColor]: composite(
          radioButton.disabled.unselected.icon.color,
          radioButton.disabled.unselected.icon.opacity,
        ),
        [indicatorScale]: "0",
      },
    },
  },
});

export const radioButtonIconStyle = style({
  boxSizing: "border-box",
  position: "relative",
  zIndex: 1,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: `border-color ${stateTransitionDuration} ${stateTransitionTimingFunction}, color ${stateTransitionDuration} ${stateTransitionTimingFunction}`,
  borderWidth: iconOutlineWidth,
  borderStyle: "solid",
  borderRadius: "9999px",
  borderColor: iconColor,
  width: radioButton.icon.size,
  height: radioButton.icon.size,
  selectors: {
    "&::after": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: `translate(-50%, -50%) scale(${indicatorScale})`,
      transition: `transform ${stateTransitionDuration} ${stateTransitionTimingFunction}, background-color ${stateTransitionDuration} ${stateTransitionTimingFunction}`,
      borderRadius: "9999px",
      backgroundColor: iconColor,
      width: indicatorSize,
      height: indicatorSize,
      content: "",
    },
  },
});
