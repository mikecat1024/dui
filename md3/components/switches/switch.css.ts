import { createVar, globalStyle, style } from "@vanilla-extract/css";
import { shadowColor } from "../../theme/theme.css.js";
import { composite } from "../../utils/utils.js";
import { switchToken } from "./token.js";

const disabled = "[data-disabled]";
const enabled = `:not(${disabled})`;
const checked = "[data-checked]";
const unchecked = "[data-unchecked]";
const withIcon = "[data-with-icon]";

const hovered = `&:hover${enabled}`;
const focused = `&[data-focused]${enabled}`;
const pressed = `&:active${enabled}`;

const trackColor = createVar();
const trackOutlineColor = createVar();
const handleColor = createVar();
const handleSize = createVar();
const handleInsetInlineStart = createVar();
const handleElevation = createVar();
const iconColor = createVar();
const stateLayerColor = createVar();
const stateLayerOpacity = createVar();

// attributes
const handleUncheckedInsetInlineStart = "8px";
const handleWithIconInsetInlineStart = "4px";
const handleCheckedInsetInlineStart = "24px";
const handlePressedUncheckedInsetInlineStart = "2px";
const handlePressedCheckedInsetInlineStart = "22px";
const stateTransitionDuration = "50ms";
const stateTransitionTimingFunction = "ease";

export const switchWrapperStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: switchToken.target.size,
});

export const switchStyle = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: `background-color ${stateTransitionDuration} ${stateTransitionTimingFunction}, box-shadow ${stateTransitionDuration} ${stateTransitionTimingFunction}`,
  outline: "none",
  border: "none",
  borderRadius: switchToken.track.shape,
  boxShadow: `inset 0 0 0 ${switchToken.track.outline.width} ${trackOutlineColor}`,
  backgroundColor: trackColor,
  cursor: "pointer",
  padding: 0,
  width: switchToken.track.width,
  height: switchToken.track.height,
  overflow: "visible",
  vars: {
    [shadowColor]: switchToken.handle.shadowColor,
    [trackColor]: switchToken.unselected.track.color,
    [trackOutlineColor]: switchToken.unselected.track.outline.color,
    [handleColor]: switchToken.unselected.handle.color,
    [handleSize]: switchToken.unselected.handle.width,
    [handleInsetInlineStart]: handleUncheckedInsetInlineStart,
    [handleElevation]: switchToken.handle.elevation,
    [iconColor]: switchToken.unselected.icon.color,
    [stateLayerColor]: "transparent",
    [stateLayerOpacity]: "0",
  },
  selectors: {
    "&::before": {
      position: "absolute",
      top: "50%",
      left: `calc(${handleInsetInlineStart} + ${handleSize} / 2)`,
      transform: "translate(-50%, -50%)",
      transition: `left ${stateTransitionDuration} ${stateTransitionTimingFunction}, opacity ${stateTransitionDuration} ${stateTransitionTimingFunction}, background-color ${stateTransitionDuration} ${stateTransitionTimingFunction}`,
      opacity: stateLayerOpacity,
      borderRadius: switchToken.stateLayer.shape,
      backgroundColor: stateLayerColor,
      pointerEvents: "none",
      width: switchToken.stateLayer.size,
      height: switchToken.stateLayer.size,
      content: "",
    },
    [`&${unchecked}`]: {
      vars: {
        [trackColor]: switchToken.unselected.track.color,
        [trackOutlineColor]: switchToken.unselected.track.outline.color,
        [handleColor]: switchToken.unselected.handle.color,
        [handleSize]: switchToken.unselected.handle.width,
        [handleInsetInlineStart]: handleUncheckedInsetInlineStart,
        [iconColor]: switchToken.unselected.icon.color,
      },
    },
    [`&${checked}`]: {
      vars: {
        [trackColor]: switchToken.selected.track.color,
        [trackOutlineColor]: "transparent",
        [handleColor]: switchToken.selected.handle.color,
        [handleSize]: switchToken.selected.handle.width,
        [handleInsetInlineStart]: handleCheckedInsetInlineStart,
        [iconColor]: switchToken.selected.icon.color,
      },
    },
    [`&${unchecked}${withIcon}`]: {
      vars: {
        [handleSize]: switchToken.withIcon.handle.width,
        [handleInsetInlineStart]: handleWithIconInsetInlineStart,
      },
    },
    [`${hovered}${unchecked}`]: {
      vars: {
        [trackColor]: switchToken.unselected.hover.track.color,
        [trackOutlineColor]: switchToken.unselected.hover.track.outline.color,
        [handleColor]: switchToken.unselected.hover.handle.color,
        [iconColor]: switchToken.unselected.hover.icon.color,
        [stateLayerColor]: switchToken.unselected.hover.stateLayer.color,
        [stateLayerOpacity]: switchToken.unselected.hover.stateLayer.opacity,
      },
    },
    [`${hovered}${checked}`]: {
      vars: {
        [trackColor]: switchToken.selected.hover.track.color,
        [trackOutlineColor]: "transparent",
        [handleColor]: switchToken.selected.hover.handle.color,
        [iconColor]: switchToken.selected.hover.icon.color,
        [stateLayerColor]: switchToken.selected.hover.stateLayer.color,
        [stateLayerOpacity]: switchToken.selected.hover.stateLayer.opacity,
      },
    },
    [`${focused}${unchecked}`]: {
      outline: `${switchToken.focus.indicator.thickness} solid ${switchToken.focus.indicator.color}`,
      outlineOffset: switchToken.focus.indicator.offset,
      vars: {
        [trackColor]: switchToken.unselected.focus.track.color,
        [trackOutlineColor]: switchToken.unselected.focus.track.outline.color,
        [handleColor]: switchToken.unselected.focus.handle.color,
        [iconColor]: switchToken.unselected.focus.icon.color,
        [stateLayerColor]: switchToken.unselected.focus.stateLayer.color,
        [stateLayerOpacity]: switchToken.unselected.focus.stateLayer.opacity,
      },
    },
    [`${focused}${checked}`]: {
      outline: `${switchToken.focus.indicator.thickness} solid ${switchToken.focus.indicator.color}`,
      outlineOffset: switchToken.focus.indicator.offset,
      vars: {
        [trackColor]: switchToken.selected.focus.track.color,
        [trackOutlineColor]: "transparent",
        [handleColor]: switchToken.selected.focus.handle.color,
        [iconColor]: switchToken.selected.focus.icon.color,
        [stateLayerColor]: switchToken.selected.focus.stateLayer.color,
        [stateLayerOpacity]: switchToken.selected.focus.stateLayer.opacity,
      },
    },
    [`${pressed}${unchecked}`]: {
      vars: {
        [trackColor]: switchToken.unselected.pressed.track.color,
        [trackOutlineColor]: switchToken.unselected.pressed.track.outline.color,
        [handleColor]: switchToken.unselected.pressed.handle.color,
        [handleSize]: switchToken.pressed.handle.width,
        [handleInsetInlineStart]: handlePressedUncheckedInsetInlineStart,
        [iconColor]: switchToken.unselected.pressed.icon.color,
        [stateLayerColor]: switchToken.unselected.pressed.stateLayer.color,
        [stateLayerOpacity]: switchToken.unselected.pressed.stateLayer.opacity,
      },
    },
    [`${pressed}${checked}`]: {
      vars: {
        [trackColor]: switchToken.selected.pressed.track.color,
        [trackOutlineColor]: "transparent",
        [handleColor]: switchToken.selected.pressed.handle.color,
        [handleSize]: switchToken.pressed.handle.width,
        [handleInsetInlineStart]: handlePressedCheckedInsetInlineStart,
        [iconColor]: switchToken.selected.pressed.icon.color,
        [stateLayerColor]: switchToken.selected.pressed.stateLayer.color,
        [stateLayerOpacity]: switchToken.selected.pressed.stateLayer.opacity,
      },
    },
    [`&${disabled}`]: {
      outline: "none",
      cursor: "not-allowed",
      vars: {
        [stateLayerColor]: "transparent",
        [stateLayerOpacity]: "0",
        [handleElevation]: switchToken.disabled.handle.elevation,
      },
    },
    [`&${disabled}${unchecked}`]: {
      vars: {
        [trackColor]: composite(
          switchToken.disabled.unselected.track.color,
          switchToken.disabled.track.opacity,
        ),
        [trackOutlineColor]: composite(
          switchToken.disabled.unselected.track.outline.color,
          switchToken.disabled.track.opacity,
        ),
        [handleColor]: composite(
          switchToken.disabled.unselected.handle.color,
          switchToken.disabled.unselected.handle.opacity,
        ),
        [iconColor]: composite(
          switchToken.disabled.unselected.icon.color,
          switchToken.disabled.unselected.icon.opacity,
        ),
      },
    },
    [`&${disabled}${checked}`]: {
      vars: {
        [trackColor]: composite(
          switchToken.disabled.selected.track.color,
          switchToken.disabled.track.opacity,
        ),
        [trackOutlineColor]: "transparent",
        [handleColor]: composite(
          switchToken.disabled.selected.handle.color,
          switchToken.disabled.selected.handle.opacity,
        ),
        [iconColor]: composite(
          switchToken.disabled.selected.icon.color,
          switchToken.disabled.selected.icon.opacity,
        ),
      },
    },
  },
});

export const switchThumbStyle = style({
  position: "absolute",
  zIndex: 1,
  top: "50%",
  left: handleInsetInlineStart,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transform: "translateY(-50%)",
  transition: `left ${stateTransitionDuration} ${stateTransitionTimingFunction}, width ${stateTransitionDuration} ${stateTransitionTimingFunction}, height ${stateTransitionDuration} ${stateTransitionTimingFunction}, background-color ${stateTransitionDuration} ${stateTransitionTimingFunction}, box-shadow ${stateTransitionDuration} ${stateTransitionTimingFunction}, color ${stateTransitionDuration} ${stateTransitionTimingFunction}`,
  borderRadius: switchToken.handle.shape,
  boxShadow: handleElevation,
  backgroundColor: handleColor,
  width: handleSize,
  height: handleSize,
  color: iconColor,
});

const switchThumbIconBaseStyle = style({
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  width: switchToken.selected.icon.size,
  height: switchToken.selected.icon.size,
});

export const switchThumbSelectedIconStyle = style([switchThumbIconBaseStyle]);
export const switchThumbUnselectedIconStyle = style([switchThumbIconBaseStyle]);

globalStyle(`${switchThumbIconBaseStyle} svg`, {
  width: "100%",
  height: "100%",
});

globalStyle(`${switchStyle}${withIcon}${checked} ${switchThumbSelectedIconStyle}`, {
  display: "inline-flex",
});

globalStyle(`${switchStyle}${withIcon}${unchecked} ${switchThumbUnselectedIconStyle}`, {
  display: "inline-flex",
});
