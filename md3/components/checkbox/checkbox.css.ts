import { createVar, globalStyle, style } from "@vanilla-extract/css";
import { composite } from "../../utils/utils.js";
import { checkbox } from "../../theme/token.js";

const disabled = "[data-disabled]";
const enabled = `:not(${disabled})`;
const checked = "[data-checked]";
const indeterminate = "[data-indeterminate]";
const checkedOrIndeterminate = `:is(${checked}, ${indeterminate})`;
const unchecked = "[data-unchecked]";
const invalid = "[data-invalid]";

const hovered = `&:hover${enabled}`;
const focused = `&[data-focused]${enabled}`;
const pressed = `&:active${enabled}`;

const containerColor = createVar();
const outlineColor = createVar();
const outlineWidth = createVar();
const iconColor = createVar();
const stateLayerColor = createVar();
const stateLayerOpacity = createVar();

export const checkboxWrapperStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px",
});

export const checkboxRootStyle = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  padding: 0,
  width: checkbox.stateLayer.size,
  height: checkbox.stateLayer.size,
  vars: {
    [outlineWidth]: checkbox.unselected.outline.width,
    [outlineColor]: checkbox.unselected.outline.color,
    [containerColor]: "transparent",
    [iconColor]: checkbox.unselected.icon.color,
    [stateLayerColor]: "transparent",
    [stateLayerOpacity]: "0",
  },
  selectors: {
    "&::before": {
      position: "absolute",
      inset: 0,
      opacity: stateLayerOpacity,
      borderRadius: checkbox.stateLayer.shape,
      backgroundColor: stateLayerColor,
      content: "",
    },
    "&::after": {
      boxSizing: "border-box",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderWidth: outlineWidth,
      borderStyle: "solid",
      borderRadius: checkbox.container.shape,
      borderColor: outlineColor,
      backgroundColor: containerColor,
      width: checkbox.container.size,
      height: checkbox.container.size,
      content: "",
    },
    [`&${disabled}`]: {
      outline: "none",
      cursor: "not-allowed",
      vars: {
        [stateLayerColor]: "transparent",
        [stateLayerOpacity]: "0",
      },
    },
    [`&${checkedOrIndeterminate}`]: {
      vars: {
        [outlineWidth]: checkbox.selected.outline.width,
        [outlineColor]: "transparent",
        [containerColor]: checkbox.selected.container.color,
        [iconColor]: checkbox.selected.icon.color,
      },
    },
    [`&${invalid}${unchecked}`]: {
      vars: {
        [outlineColor]: checkbox.unselected.error.outline.color,
      },
    },
    [`&${invalid}${checkedOrIndeterminate}`]: {
      vars: {
        [outlineWidth]: checkbox.selected.outline.width,
        [outlineColor]: "transparent",
        [containerColor]: checkbox.selected.error.container.color,
        [iconColor]: checkbox.selected.error.icon.color,
      },
    },
    [`${hovered}${unchecked}:not(${invalid})`]: {
      vars: {
        [outlineWidth]: checkbox.unselected.hover.outline.width,
        [outlineColor]: checkbox.unselected.hover.outline.color,
        [iconColor]: checkbox.unselected.hover.icon.color,
        [stateLayerColor]: checkbox.unselected.hover.stateLayer.color,
        [stateLayerOpacity]: checkbox.unselected.hover.stateLayer.opacity,
      },
    },
    [`${hovered}${checkedOrIndeterminate}:not(${invalid})`]: {
      vars: {
        [outlineWidth]: checkbox.selected.hover.outline.width,
        [outlineColor]: "transparent",
        [containerColor]: checkbox.selected.hover.container.color,
        [iconColor]: checkbox.selected.hover.icon.color,
        [stateLayerColor]: checkbox.selected.hover.stateLayer.color,
        [stateLayerOpacity]: checkbox.selected.hover.stateLayer.opacity,
      },
    },
    [`${hovered}${unchecked}${invalid}`]: {
      vars: {
        [outlineWidth]: checkbox.unselected.error.hover.outline.width,
        [outlineColor]: checkbox.unselected.error.hover.outline.color,
        [iconColor]: checkbox.unselected.hover.icon.color,
        [stateLayerColor]: checkbox.error.hover.stateLayer.color,
        [stateLayerOpacity]: checkbox.error.hover.stateLayer.opacity,
      },
    },
    [`${hovered}${checkedOrIndeterminate}${invalid}`]: {
      vars: {
        [outlineWidth]: checkbox.selected.error.hover.outline.width,
        [outlineColor]: "transparent",
        [containerColor]: checkbox.selected.error.hover.container.color,
        [iconColor]: checkbox.selected.error.hover.icon.color,
        [stateLayerColor]: checkbox.error.hover.stateLayer.color,
        [stateLayerOpacity]: checkbox.error.hover.stateLayer.opacity,
      },
    },
    [`${focused}${unchecked}:not(${invalid})`]: {
      outline: `${checkbox.focus.indicator.thickness} solid ${checkbox.focus.indicator.color}`,
      outlineOffset: checkbox.focus.indicator.outline.offset,
      vars: {
        [outlineWidth]: checkbox.unselected.focus.outline.width,
        [outlineColor]: checkbox.unselected.focus.outline.color,
        [iconColor]: checkbox.unselected.focus.icon.color,
        [stateLayerColor]: checkbox.unselected.focus.stateLayer.color,
        [stateLayerOpacity]: checkbox.unselected.focus.stateLayer.opacity,
      },
    },
    [`${focused}${checkedOrIndeterminate}:not(${invalid})`]: {
      outline: `${checkbox.focus.indicator.thickness} solid ${checkbox.focus.indicator.color}`,
      outlineOffset: checkbox.focus.indicator.outline.offset,
      vars: {
        [outlineWidth]: checkbox.selected.focus.outline.width,
        [outlineColor]: "transparent",
        [containerColor]: checkbox.selected.focus.container.color,
        [iconColor]: checkbox.selected.focus.icon.color,
        [stateLayerColor]: checkbox.selected.focus.stateLayer.color,
        [stateLayerOpacity]: checkbox.selected.focus.stateLayer.opacity,
      },
    },
    [`${focused}${unchecked}${invalid}`]: {
      outline: `${checkbox.focus.indicator.thickness} solid ${checkbox.focus.indicator.color}`,
      outlineOffset: checkbox.focus.indicator.outline.offset,
      vars: {
        [outlineWidth]: checkbox.unselected.error.focus.outline.width,
        [outlineColor]: checkbox.unselected.error.focus.outline.color,
        [iconColor]: checkbox.unselected.focus.icon.color,
        [stateLayerColor]: checkbox.error.focus.stateLayer.color,
        [stateLayerOpacity]: checkbox.error.focus.stateLayer.opacity,
      },
    },
    [`${focused}${checkedOrIndeterminate}${invalid}`]: {
      outline: `${checkbox.focus.indicator.thickness} solid ${checkbox.focus.indicator.color}`,
      outlineOffset: checkbox.focus.indicator.outline.offset,
      vars: {
        [outlineWidth]: checkbox.selected.error.focus.outline.width,
        [outlineColor]: "transparent",
        [containerColor]: checkbox.selected.error.focus.container.color,
        [iconColor]: checkbox.selected.error.focus.icon.color,
        [stateLayerColor]: checkbox.error.focus.stateLayer.color,
        [stateLayerOpacity]: checkbox.error.focus.stateLayer.opacity,
      },
    },
    [`${pressed}${unchecked}:not(${invalid})`]: {
      vars: {
        [outlineWidth]: checkbox.unselected.pressed.outline.width,
        [outlineColor]: checkbox.unselected.pressed.outline.color,
        [iconColor]: checkbox.unselected.pressed.icon.color,
        [stateLayerColor]: checkbox.unselected.pressed.stateLayer.color,
        [stateLayerOpacity]: checkbox.unselected.pressed.stateLayer.opacity,
      },
    },
    [`${pressed}${checkedOrIndeterminate}:not(${invalid})`]: {
      vars: {
        [outlineWidth]: checkbox.selected.pressed.outline.width,
        [outlineColor]: "transparent",
        [containerColor]: checkbox.selected.pressed.container.color,
        [iconColor]: checkbox.selected.pressed.icon.color,
        [stateLayerColor]: checkbox.selected.pressed.stateLayer.color,
        [stateLayerOpacity]: checkbox.selected.pressed.stateLayer.opacity,
      },
    },
    [`${pressed}${unchecked}${invalid}`]: {
      vars: {
        [outlineWidth]: checkbox.unselected.error.pressed.outline.width,
        [outlineColor]: checkbox.unselected.error.pressed.outline.color,
        [iconColor]: checkbox.unselected.pressed.icon.color,
        [stateLayerColor]: checkbox.error.pressed.stateLayer.color,
        [stateLayerOpacity]: checkbox.error.pressed.stateLayer.opacity,
      },
    },
    [`${pressed}${checkedOrIndeterminate}${invalid}`]: {
      vars: {
        [outlineWidth]: checkbox.selected.error.pressed.outline.width,
        [outlineColor]: "transparent",
        [containerColor]: checkbox.selected.error.pressed.container.color,
        [iconColor]: checkbox.selected.error.pressed.icon.color,
        [stateLayerColor]: checkbox.error.pressed.stateLayer.color,
        [stateLayerOpacity]: checkbox.error.pressed.stateLayer.opacity,
      },
    },
    [`&${disabled}${unchecked}`]: {
      vars: {
        [outlineWidth]: checkbox.unselected.disabled.outline.width,
        [outlineColor]: composite(
          checkbox.unselected.disabled.outline.color,
          checkbox.unselected.disabled.container.opacity,
        ),
        [containerColor]: "transparent",
        [iconColor]: composite(
          checkbox.disabled.unselected.icon.color,
          checkbox.disabled.unselected.icon.opacity,
        ),
      },
    },
    [`&${disabled}${checkedOrIndeterminate}`]: {
      vars: {
        [outlineWidth]: checkbox.selected.disabled.container.outline.width,
        [outlineColor]: "transparent",
        [containerColor]: composite(
          checkbox.selected.disabled.container.color,
          checkbox.selected.disabled.container.opacity,
        ),
        [iconColor]: composite(
          checkbox.disabled.selected.icon.color,
          checkbox.disabled.selected.icon.opacity,
          containerColor,
        ),
      },
    },
  },
});

export const checkboxIndicatorStyle = style({
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: checkbox.container.size,
  height: checkbox.container.size,
  color: iconColor,
});

export const checkboxCheckmarkStyle = style({
  selectors: {
    [`${checkboxIndicatorStyle}[data-indeterminate] &`]: {
      opacity: 0,
    },
  },
});

export const checkboxIndeterminateStyle = style({
  selectors: {
    [`${checkboxIndicatorStyle}:not([data-indeterminate]) &`]: {
      opacity: 0,
    },
  },
});

globalStyle(`${checkboxIndicatorStyle} svg`, {
  display: "block",
  width: checkbox.icon.size,
  height: checkbox.icon.size,
});
