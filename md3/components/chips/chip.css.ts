import { createVar, globalStyle, style } from "@vanilla-extract/css";
import { shadowColor } from "../../theme/theme.css.js";
import { composite, withOpacity } from "../../utils/utils.js";
import { chip } from "./token.js";

const disabled = ':is(:disabled, [aria-disabled="true"])';
const enabled = `:not(${disabled})`;
const dragged = '[data-dragged="true"]';

const hovered = `&:hover${enabled}`;
const focused = `&:focus-visible${enabled}`;
const pressed = `&:active${enabled}`;
const draggedState = `&${dragged}`;
const hasLeadingIcon = '[data-leading-icon="true"]';
const hasTrailingIcon = '[data-trailing-icon="true"]';

const containerHeight = createVar();
const containerShape = createVar();
const containerColor = createVar();
const containerElevation = createVar();
const outlineColor = createVar();
const outlineWidth = createVar();
const labelTextColor = createVar();
const stateLayerColor = createVar();
const stateLayerOpacity = createVar();
const leadingIconColor = createVar();
const trailingIconColor = createVar();
const leadingIconSize = createVar();
const trailingIconSize = createVar();
const avatarSize = createVar();
const avatarShape = createVar();
const avatarOpacity = createVar();

// attributes
const leftPaddingWithLeadingIcon = "8px";
const leftPaddingWithoutLeadingIcon = "16px";
const inputLeftPaddingWithLeadingIcon = "4px";
const inputLeftPaddingWithoutLeadingIcon = "12px";
const rightPaddingWithTrailingIcon = "8px";
const rightPaddingWithoutTrailingIcon = "16px";
const paddingBetweenIconAndText = "8px";

const chipLabelText = {
  fontFamily: chip.assist.labelText.fontFamily,
  fontSize: chip.assist.labelText.fontSize,
  lineHeight: chip.assist.labelText.lineHeight,
  fontWeight: chip.assist.labelText.fontWeight,
  letterSpacing: chip.assist.labelText.letterSpacing,
};

const chipBaseStyle = style({
  boxSizing: "border-box",
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: paddingBetweenIconAndText,
  outline: "none",
  border: "none",
  borderRadius: containerShape,
  boxShadow: containerElevation,
  backgroundColor: containerColor,
  cursor: "pointer",
  height: containerHeight,
  whiteSpace: "nowrap",
  color: labelTextColor,
  ...chipLabelText,
  selectors: {
    "&::before": {
      position: "absolute",
      inset: 0,
      opacity: stateLayerOpacity,
      borderRadius: containerShape,
      backgroundColor: stateLayerColor,
      content: "",
    },
    "&::after": {
      position: "absolute",
      inset: 0,
      borderRadius: containerShape,
      boxShadow: `inset 0 0 0 ${outlineWidth} ${outlineColor}`,
      pointerEvents: "none",
      content: "",
    },
    [`&${hasTrailingIcon}`]: {
      paddingRight: rightPaddingWithTrailingIcon,
    },
    [`&:not(${hasTrailingIcon})`]: {
      paddingRight: rightPaddingWithoutTrailingIcon,
    },
    [`&${hasLeadingIcon}`]: {
      paddingLeft: leftPaddingWithLeadingIcon,
    },
    [`&:not(${hasLeadingIcon})`]: {
      paddingLeft: leftPaddingWithoutLeadingIcon,
    },
    [`&${disabled}`]: {
      cursor: "not-allowed",
    },
  },
});

export const chipLeadingIconStyle = style({
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  width: leadingIconSize,
  height: leadingIconSize,
  color: leadingIconColor,
});

globalStyle(`${chipLeadingIconStyle} svg`, {
  width: "100%",
  height: "100%",
});

export const chipTrailingIconStyle = style({
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  width: trailingIconSize,
  height: trailingIconSize,
  color: trailingIconColor,
});

globalStyle(`${chipTrailingIconStyle} svg`, {
  width: "100%",
  height: "100%",
});

export const chipAvatarStyle = style({
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  opacity: avatarOpacity,
  borderRadius: avatarShape,
  width: avatarSize,
  height: avatarSize,
  overflow: "hidden",
});

globalStyle(`${chipAvatarStyle} img`, {
  objectFit: "cover",
  width: "100%",
  height: "100%",
});

export const assistChipFlatStyle = style([
  chipBaseStyle,
  {
    vars: {
      [outlineWidth]: chip.assist.flat.outline.width,
      [outlineColor]: chip.assist.flat.outline.color,
      [containerHeight]: chip.assist.container.height,
      [containerShape]: chip.assist.container.shape,
      [containerColor]: "transparent",
      [containerElevation]: chip.assist.flat.container.elevation,
      [labelTextColor]: chip.assist.labelText.color,
      [stateLayerColor]: "transparent",
      [stateLayerOpacity]: "0",
      [leadingIconColor]: chip.assist.withIcon.icon.color,
      [trailingIconColor]: chip.assist.withIcon.icon.color,
      [leadingIconSize]: chip.assist.withIcon.icon.size,
      [trailingIconSize]: chip.assist.withIcon.icon.size,
    },
    selectors: {
      [`&${hasLeadingIcon}`]: {
        paddingLeft: leftPaddingWithLeadingIcon,
      },
      [`&:not(${hasLeadingIcon})`]: {
        paddingLeft: leftPaddingWithoutLeadingIcon,
      },
      [hovered]: {
        vars: {
          [labelTextColor]: chip.assist.hover.labelText.color,
          [stateLayerColor]: chip.assist.hover.stateLayer.color,
          [stateLayerOpacity]: chip.assist.hover.stateLayer.opacity,
          [leadingIconColor]: chip.assist.withIcon.hover.icon.color,
          [trailingIconColor]: chip.assist.withIcon.hover.icon.color,
        },
      },
      [focused]: {
        outline: `${chip.assist.focus.indicator.thickness} solid ${chip.assist.focus.indicator.color}`,
        outlineOffset: chip.assist.focus.indicator.outline.offset,
        vars: {
          [outlineColor]: chip.assist.flat.focus.outline.color,
          [labelTextColor]: chip.assist.focus.labelText.color,
          [stateLayerColor]: chip.assist.focus.stateLayer.color,
          [stateLayerOpacity]: chip.assist.focus.stateLayer.opacity,
          [leadingIconColor]: chip.assist.withIcon.focus.icon.color,
          [trailingIconColor]: chip.assist.withIcon.focus.icon.color,
        },
      },
      [pressed]: {
        vars: {
          [labelTextColor]: chip.assist.pressed.labelText.color,
          [stateLayerColor]: chip.assist.pressed.stateLayer.color,
          [stateLayerOpacity]: chip.assist.pressed.stateLayer.opacity,
          [leadingIconColor]: chip.assist.withIcon.pressed.icon.color,
          [trailingIconColor]: chip.assist.withIcon.pressed.icon.color,
        },
      },
      [draggedState]: {
        vars: {
          [containerElevation]: chip.assist.dragged.container.elevation,
          [labelTextColor]: chip.assist.dragged.labelText.color,
          [stateLayerColor]: chip.assist.dragged.stateLayer.color,
          [stateLayerOpacity]: chip.assist.dragged.stateLayer.opacity,
          [leadingIconColor]: chip.assist.withIcon.dragged.icon.color,
          [trailingIconColor]: chip.assist.withIcon.dragged.icon.color,
        },
      },
      [`&${disabled}`]: {
        vars: {
          [outlineColor]: withOpacity(
            chip.assist.flat.disabled.outline.color,
            chip.assist.flat.disabled.outline.opacity,
          ),
          [labelTextColor]: composite(
            chip.assist.disabled.labelText.color,
            chip.assist.disabled.labelText.opacity,
          ),
          [leadingIconColor]: composite(
            chip.assist.withIcon.disabled.icon.color,
            chip.assist.withIcon.disabled.icon.opacity,
          ),
          [trailingIconColor]: composite(
            chip.assist.withIcon.disabled.icon.color,
            chip.assist.withIcon.disabled.icon.opacity,
          ),
          [stateLayerOpacity]: "0",
        },
      },
    },
  },
]);

export const assistChipElevatedStyle = style([
  chipBaseStyle,
  {
    vars: {
      [outlineWidth]: "0",
      [outlineColor]: "transparent",
      [containerHeight]: chip.assist.container.height,
      [containerShape]: chip.assist.container.shape,
      [containerColor]: chip.assist.elevated.container.color,
      [containerElevation]: chip.assist.elevated.container.elevation,
      [labelTextColor]: chip.assist.labelText.color,
      [stateLayerColor]: "transparent",
      [stateLayerOpacity]: "0",
      [leadingIconColor]: chip.assist.withIcon.icon.color,
      [trailingIconColor]: chip.assist.withIcon.icon.color,
      [leadingIconSize]: chip.assist.withIcon.icon.size,
      [trailingIconSize]: chip.assist.withIcon.icon.size,
      [shadowColor]: chip.assist.elevated.container.shadowColor,
    },
    selectors: {
      [`&${hasLeadingIcon}`]: {
        paddingLeft: leftPaddingWithLeadingIcon,
      },
      [`&:not(${hasLeadingIcon})`]: {
        paddingLeft: leftPaddingWithoutLeadingIcon,
      },
      [hovered]: {
        vars: {
          [containerElevation]: chip.assist.elevated.hover.container.elevation,
          [labelTextColor]: chip.assist.hover.labelText.color,
          [stateLayerColor]: chip.assist.hover.stateLayer.color,
          [stateLayerOpacity]: chip.assist.hover.stateLayer.opacity,
          [leadingIconColor]: chip.assist.withIcon.hover.icon.color,
          [trailingIconColor]: chip.assist.withIcon.hover.icon.color,
        },
      },
      [focused]: {
        outline: `${chip.assist.focus.indicator.thickness} solid ${chip.assist.focus.indicator.color}`,
        outlineOffset: chip.assist.focus.indicator.outline.offset,
        vars: {
          [containerElevation]: chip.assist.elevated.focus.container.elevation,
          [labelTextColor]: chip.assist.focus.labelText.color,
          [stateLayerColor]: chip.assist.focus.stateLayer.color,
          [stateLayerOpacity]: chip.assist.focus.stateLayer.opacity,
          [leadingIconColor]: chip.assist.withIcon.focus.icon.color,
          [trailingIconColor]: chip.assist.withIcon.focus.icon.color,
        },
      },
      [pressed]: {
        vars: {
          [containerElevation]: chip.assist.elevated.pressed.container.elevation,
          [labelTextColor]: chip.assist.pressed.labelText.color,
          [stateLayerColor]: chip.assist.pressed.stateLayer.color,
          [stateLayerOpacity]: chip.assist.pressed.stateLayer.opacity,
          [leadingIconColor]: chip.assist.withIcon.pressed.icon.color,
          [trailingIconColor]: chip.assist.withIcon.pressed.icon.color,
        },
      },
      [draggedState]: {
        vars: {
          [containerElevation]: chip.assist.dragged.container.elevation,
          [labelTextColor]: chip.assist.dragged.labelText.color,
          [stateLayerColor]: chip.assist.dragged.stateLayer.color,
          [stateLayerOpacity]: chip.assist.dragged.stateLayer.opacity,
          [leadingIconColor]: chip.assist.withIcon.dragged.icon.color,
          [trailingIconColor]: chip.assist.withIcon.dragged.icon.color,
        },
      },
      [`&${disabled}`]: {
        vars: {
          [containerElevation]: chip.assist.elevated.disabled.container.elevation,
          [containerColor]: composite(
            chip.assist.elevated.disabled.container.color,
            chip.assist.elevated.disabled.container.opacity,
          ),
          [labelTextColor]: composite(
            chip.assist.disabled.labelText.color,
            chip.assist.disabled.labelText.opacity,
            containerColor,
          ),
          [leadingIconColor]: composite(
            chip.assist.withIcon.disabled.icon.color,
            chip.assist.withIcon.disabled.icon.opacity,
            containerColor,
          ),
          [trailingIconColor]: composite(
            chip.assist.withIcon.disabled.icon.color,
            chip.assist.withIcon.disabled.icon.opacity,
            containerColor,
          ),
          [stateLayerOpacity]: "0",
        },
      },
    },
  },
]);

export const filterChipFlatStyle = style([
  chipBaseStyle,
  {
    vars: {
      [outlineWidth]: chip.filter.flat.unselected.outline.width,
      [outlineColor]: chip.filter.flat.unselected.outline.color,
      [containerHeight]: chip.filter.container.height,
      [containerShape]: chip.filter.container.shape,
      [containerColor]: "transparent",
      [containerElevation]: chip.filter.flat.container.elevation,
      [labelTextColor]: chip.filter.unselected.labelText.color,
      [stateLayerColor]: "transparent",
      [stateLayerOpacity]: "0",
      [leadingIconColor]: chip.filter.withLeadingIcon.unselected.leadingIcon.color,
      [trailingIconColor]: chip.filter.withTrailingIcon.unselected.trailingIcon.color,
      [leadingIconSize]: chip.filter.withIcon.icon.size,
      [trailingIconSize]: chip.filter.withIcon.icon.size,
    },
    selectors: {
      [hovered]: {
        vars: {
          [labelTextColor]: chip.filter.unselected.hover.labelText.color,
          [stateLayerColor]: chip.filter.unselected.hover.stateLayer.color,
          [stateLayerOpacity]: chip.filter.unselected.hover.stateLayer.opacity,
          [leadingIconColor]: chip.filter.withLeadingIcon.unselected.hover.leadingIcon.color,
          [trailingIconColor]: chip.filter.withTrailingIcon.unselected.hover.trailingIcon.color,
        },
      },
      [focused]: {
        outline: `${chip.filter.focus.indicator.thickness} solid ${chip.filter.focus.indicator.color}`,
        outlineOffset: chip.filter.focus.indicator.outline.offset,
        vars: {
          [outlineColor]: chip.filter.flat.unselected.focus.outline.color,
          [labelTextColor]: chip.filter.unselected.focus.labelText.color,
          [stateLayerColor]: chip.filter.unselected.focus.stateLayer.color,
          [stateLayerOpacity]: chip.filter.unselected.focus.stateLayer.opacity,
          [leadingIconColor]: chip.filter.withLeadingIcon.unselected.focus.leadingIcon.color,
          [trailingIconColor]: chip.filter.withTrailingIcon.unselected.focus.trailingIcon.color,
        },
      },
      [pressed]: {
        vars: {
          [labelTextColor]: chip.filter.unselected.pressed.labelText.color,
          [stateLayerColor]: chip.filter.unselected.pressed.stateLayer.color,
          [stateLayerOpacity]: chip.filter.unselected.pressed.stateLayer.opacity,
          [leadingIconColor]: chip.filter.withLeadingIcon.unselected.pressed.leadingIcon.color,
          [trailingIconColor]: chip.filter.withTrailingIcon.unselected.pressed.trailingIcon.color,
        },
      },
      [draggedState]: {
        vars: {
          [containerElevation]: chip.filter.dragged.container.elevation,
          [labelTextColor]: chip.filter.unselected.dragged.labelText.color,
          [stateLayerColor]: chip.filter.unselected.dragged.stateLayer.color,
          [stateLayerOpacity]: chip.filter.unselected.dragged.stateLayer.opacity,
          [leadingIconColor]: chip.filter.withLeadingIcon.unselected.dragged.leadingIcon.color,
          [trailingIconColor]: chip.filter.withTrailingIcon.unselected.dragged.trailingIcon.color,
        },
      },
      [`&${disabled}`]: {
        vars: {
          [outlineColor]: withOpacity(
            chip.filter.flat.disabled.unselected.outline.color,
            chip.filter.flat.disabled.unselected.outline.opacity,
          ),
          [labelTextColor]: composite(
            chip.filter.disabled.labelText.color,
            chip.filter.disabled.labelText.opacity,
          ),
          [leadingIconColor]: composite(
            chip.filter.withLeadingIcon.disabled.leadingIcon.color,
            chip.filter.withLeadingIcon.disabled.leadingIcon.opacity,
          ),
          [trailingIconColor]: composite(
            chip.filter.withTrailingIcon.disabled.trailingIcon.color,
            chip.filter.withTrailingIcon.disabled.trailingIcon.opacity,
          ),
          [stateLayerOpacity]: "0",
        },
      },
    },
  },
]);

export const filterChipElevatedStyle = style([
  chipBaseStyle,
  {
    vars: {
      [outlineWidth]: "0",
      [outlineColor]: "transparent",
      [containerHeight]: chip.filter.container.height,
      [containerShape]: chip.filter.container.shape,
      [containerColor]: chip.filter.elevated.unselected.container.color,
      [containerElevation]: chip.filter.elevated.container.elevation,
      [labelTextColor]: chip.filter.unselected.labelText.color,
      [stateLayerColor]: "transparent",
      [stateLayerOpacity]: "0",
      [leadingIconColor]: chip.filter.withLeadingIcon.unselected.leadingIcon.color,
      [trailingIconColor]: chip.filter.withTrailingIcon.unselected.trailingIcon.color,
      [leadingIconSize]: chip.filter.withIcon.icon.size,
      [trailingIconSize]: chip.filter.withIcon.icon.size,
      [shadowColor]: chip.filter.elevated.container.shadowColor,
    },
    selectors: {
      [hovered]: {
        vars: {
          [containerElevation]: chip.filter.elevated.hover.container.elevation,
          [labelTextColor]: chip.filter.unselected.hover.labelText.color,
          [stateLayerColor]: chip.filter.unselected.hover.stateLayer.color,
          [stateLayerOpacity]: chip.filter.unselected.hover.stateLayer.opacity,
          [leadingIconColor]: chip.filter.withLeadingIcon.unselected.hover.leadingIcon.color,
          [trailingIconColor]: chip.filter.withTrailingIcon.unselected.hover.trailingIcon.color,
        },
      },
      [focused]: {
        outline: `${chip.filter.focus.indicator.thickness} solid ${chip.filter.focus.indicator.color}`,
        outlineOffset: chip.filter.focus.indicator.outline.offset,
        vars: {
          [containerElevation]: chip.filter.elevated.focus.container.elevation,
          [labelTextColor]: chip.filter.unselected.focus.labelText.color,
          [stateLayerColor]: chip.filter.unselected.focus.stateLayer.color,
          [stateLayerOpacity]: chip.filter.unselected.focus.stateLayer.opacity,
          [leadingIconColor]: chip.filter.withLeadingIcon.unselected.focus.leadingIcon.color,
          [trailingIconColor]: chip.filter.withTrailingIcon.unselected.focus.trailingIcon.color,
        },
      },
      [pressed]: {
        vars: {
          [containerElevation]: chip.filter.elevated.pressed.container.elevation,
          [labelTextColor]: chip.filter.unselected.pressed.labelText.color,
          [stateLayerColor]: chip.filter.unselected.pressed.stateLayer.color,
          [stateLayerOpacity]: chip.filter.unselected.pressed.stateLayer.opacity,
          [leadingIconColor]: chip.filter.withLeadingIcon.unselected.pressed.leadingIcon.color,
          [trailingIconColor]: chip.filter.withTrailingIcon.unselected.pressed.trailingIcon.color,
        },
      },
      [draggedState]: {
        vars: {
          [containerElevation]: chip.filter.dragged.container.elevation,
          [labelTextColor]: chip.filter.unselected.dragged.labelText.color,
          [stateLayerColor]: chip.filter.unselected.dragged.stateLayer.color,
          [stateLayerOpacity]: chip.filter.unselected.dragged.stateLayer.opacity,
          [leadingIconColor]: chip.filter.withLeadingIcon.unselected.dragged.leadingIcon.color,
          [trailingIconColor]: chip.filter.withTrailingIcon.unselected.dragged.trailingIcon.color,
        },
      },
      [`&${disabled}`]: {
        vars: {
          [containerElevation]: chip.filter.elevated.disabled.container.elevation,
          [containerColor]: composite(
            chip.filter.elevated.disabled.container.color,
            chip.filter.elevated.disabled.container.opacity,
          ),
          [labelTextColor]: composite(
            chip.filter.disabled.labelText.color,
            chip.filter.disabled.labelText.opacity,
            containerColor,
          ),
          [leadingIconColor]: composite(
            chip.filter.withLeadingIcon.disabled.leadingIcon.color,
            chip.filter.withLeadingIcon.disabled.leadingIcon.opacity,
            containerColor,
          ),
          [trailingIconColor]: composite(
            chip.filter.withTrailingIcon.disabled.trailingIcon.color,
            chip.filter.withTrailingIcon.disabled.trailingIcon.opacity,
            containerColor,
          ),
          [stateLayerOpacity]: "0",
        },
      },
    },
  },
]);

export const inputChipStyle = style([
  chipBaseStyle,
  {
    vars: {
      [outlineWidth]: chip.input.unselected.outline.width,
      [outlineColor]: chip.input.unselected.outline.color,
      [containerHeight]: chip.input.container.height,
      [containerShape]: chip.input.container.shape,
      [containerColor]: "transparent",
      [containerElevation]: chip.input.container.elevation,
      [labelTextColor]: chip.input.unselected.labelText.color,
      [stateLayerColor]: "transparent",
      [stateLayerOpacity]: "0",
      [leadingIconColor]: chip.input.withLeadingIcon.unselected.leadingIcon.color,
      [trailingIconColor]: chip.input.withTrailingIcon.unselected.trailingIcon.color,
      [leadingIconSize]: chip.input.withLeadingIcon.leadingIcon.size,
      [trailingIconSize]: chip.input.withTrailingIcon.trailingIcon.size,
      [avatarSize]: chip.input.withAvatar.avatar.size,
      [avatarShape]: chip.input.withAvatar.avatar.shape,
      [avatarOpacity]: "1",
    },
    selectors: {
      [`&${hasLeadingIcon}`]: {
        paddingLeft: inputLeftPaddingWithLeadingIcon,
      },
      [`&:not(${hasLeadingIcon})`]: {
        paddingLeft: inputLeftPaddingWithoutLeadingIcon,
      },
      [hovered]: {
        vars: {
          [labelTextColor]: chip.input.unselected.hover.labelText.color,
          [stateLayerColor]: chip.input.unselected.hover.stateLayer.color,
          [stateLayerOpacity]: chip.input.unselected.hover.stateLayer.opacity,
          [leadingIconColor]: chip.input.withLeadingIcon.unselected.hover.leadingIcon.color,
          [trailingIconColor]: chip.input.withTrailingIcon.unselected.hover.trailingIcon.color,
        },
      },
      [focused]: {
        outline: `${chip.input.focus.indicator.thickness} solid ${chip.input.focus.indicator.color}`,
        outlineOffset: chip.input.focus.indicator.outline.offset,
        vars: {
          [outlineColor]: chip.input.unselected.focus.outline.color,
          [labelTextColor]: chip.input.unselected.focus.labelText.color,
          [stateLayerColor]: chip.input.unselected.focus.stateLayer.color,
          [stateLayerOpacity]: chip.input.unselected.focus.stateLayer.opacity,
          [leadingIconColor]: chip.input.withLeadingIcon.unselected.focus.leadingIcon.color,
          [trailingIconColor]: chip.input.withTrailingIcon.unselected.focus.trailingIcon.color,
        },
      },
      [pressed]: {
        vars: {
          [labelTextColor]: chip.input.unselected.pressed.labelText.color,
          [stateLayerColor]: chip.input.unselected.pressed.stateLayer.color,
          [stateLayerOpacity]: chip.input.unselected.pressed.stateLayer.opacity,
          [leadingIconColor]: chip.input.withLeadingIcon.unselected.pressed.leadingIcon.color,
          [trailingIconColor]: chip.input.withTrailingIcon.unselected.pressed.trailingIcon.color,
        },
      },
      [draggedState]: {
        vars: {
          [containerElevation]: chip.input.dragged.container.elevation,
          [labelTextColor]: chip.input.unselected.dragged.labelText.color,
          [stateLayerColor]: chip.input.unselected.dragged.stateLayer.color,
          [stateLayerOpacity]: chip.input.unselected.dragged.stateLayer.opacity,
          [leadingIconColor]: chip.input.withLeadingIcon.unselected.dragged.leadingIcon.color,
          [trailingIconColor]: chip.input.withTrailingIcon.unselected.dragged.trailingIcon.color,
        },
      },
      [`&${disabled}`]: {
        vars: {
          [outlineColor]: withOpacity(
            chip.input.disabled.unselected.outline.color,
            chip.input.disabled.unselected.outline.opacity,
          ),
          [labelTextColor]: composite(
            chip.input.disabled.labelText.color,
            chip.input.disabled.labelText.opacity,
          ),
          [leadingIconColor]: composite(
            chip.input.withLeadingIcon.disabled.leadingIcon.color,
            chip.input.withLeadingIcon.disabled.leadingIcon.opacity,
          ),
          [trailingIconColor]: composite(
            chip.input.withTrailingIcon.disabled.trailingIcon.color,
            chip.input.withTrailingIcon.disabled.trailingIcon.opacity,
          ),
          [avatarOpacity]: chip.input.withAvatar.disabled.avatar.opacity,
          [stateLayerOpacity]: "0",
        },
      },
    },
  },
]);

export const suggestionChipFlatStyle = style([
  chipBaseStyle,
  {
    vars: {
      [outlineWidth]: chip.suggestion.flat.outline.width,
      [outlineColor]: chip.suggestion.flat.outline.color,
      [containerHeight]: chip.suggestion.container.height,
      [containerShape]: chip.suggestion.container.shape,
      [containerColor]: "transparent",
      [containerElevation]: chip.suggestion.flat.container.elevation,
      [labelTextColor]: chip.suggestion.labelText.color,
      [stateLayerColor]: "transparent",
      [stateLayerOpacity]: "0",
      [leadingIconColor]: chip.suggestion.withLeadingIcon.leadingIcon.color,
      [trailingIconColor]: chip.suggestion.withLeadingIcon.leadingIcon.color,
      [leadingIconSize]: chip.suggestion.withLeadingIcon.leadingIcon.size,
      [trailingIconSize]: chip.suggestion.withLeadingIcon.leadingIcon.size,
    },
    selectors: {
      [hovered]: {
        vars: {
          [labelTextColor]: chip.suggestion.hover.labelText.color,
          [stateLayerColor]: chip.suggestion.hover.stateLayer.color,
          [stateLayerOpacity]: chip.suggestion.hover.stateLayer.opacity,
          [leadingIconColor]: chip.suggestion.withLeadingIcon.hover.leadingIcon.color,
          [trailingIconColor]: chip.suggestion.withLeadingIcon.hover.leadingIcon.color,
        },
      },
      [focused]: {
        outline: `${chip.suggestion.focus.indicator.thickness} solid ${chip.suggestion.focus.indicator.color}`,
        outlineOffset: chip.suggestion.focus.indicator.outline.offset,
        vars: {
          [outlineColor]: chip.suggestion.flat.focus.outline.color,
          [labelTextColor]: chip.suggestion.focus.labelText.color,
          [stateLayerColor]: chip.suggestion.focus.stateLayer.color,
          [stateLayerOpacity]: chip.suggestion.focus.stateLayer.opacity,
          [leadingIconColor]: chip.suggestion.withLeadingIcon.focus.leadingIcon.color,
          [trailingIconColor]: chip.suggestion.withLeadingIcon.focus.leadingIcon.color,
        },
      },
      [pressed]: {
        vars: {
          [labelTextColor]: chip.suggestion.pressed.labelText.color,
          [stateLayerColor]: chip.suggestion.pressed.stateLayer.color,
          [stateLayerOpacity]: chip.suggestion.pressed.stateLayer.opacity,
          [leadingIconColor]: chip.suggestion.withLeadingIcon.pressed.leadingIcon.color,
          [trailingIconColor]: chip.suggestion.withLeadingIcon.pressed.leadingIcon.color,
        },
      },
      [draggedState]: {
        vars: {
          [containerElevation]: chip.suggestion.dragged.container.elevation,
          [labelTextColor]: chip.suggestion.dragged.labelText.color,
          [stateLayerColor]: chip.suggestion.dragged.stateLayer.color,
          [stateLayerOpacity]: chip.suggestion.dragged.stateLayer.opacity,
          [leadingIconColor]: chip.suggestion.withLeadingIcon.dragged.leadingIcon.color,
          [trailingIconColor]: chip.suggestion.withLeadingIcon.dragged.leadingIcon.color,
        },
      },
      [`&${disabled}`]: {
        vars: {
          [outlineColor]: withOpacity(
            chip.suggestion.flat.disabled.outline.color,
            chip.suggestion.flat.disabled.outline.opacity,
          ),
          [labelTextColor]: composite(
            chip.suggestion.disabled.labelText.color,
            chip.suggestion.disabled.labelText.opacity,
          ),
          [leadingIconColor]: composite(
            chip.suggestion.withLeadingIcon.disabled.leadingIcon.color,
            chip.suggestion.withLeadingIcon.disabled.leadingIcon.opacity,
          ),
          [trailingIconColor]: composite(
            chip.suggestion.withLeadingIcon.disabled.leadingIcon.color,
            chip.suggestion.withLeadingIcon.disabled.leadingIcon.opacity,
          ),
          [stateLayerOpacity]: "0",
        },
      },
    },
  },
]);

export const suggestionChipElevatedStyle = style([
  chipBaseStyle,
  {
    vars: {
      [outlineWidth]: "0",
      [outlineColor]: "transparent",
      [containerHeight]: chip.suggestion.container.height,
      [containerShape]: chip.suggestion.container.shape,
      [containerColor]: chip.suggestion.elevated.container.color,
      [containerElevation]: chip.suggestion.elevated.container.elevation,
      [labelTextColor]: chip.suggestion.labelText.color,
      [stateLayerColor]: "transparent",
      [stateLayerOpacity]: "0",
      [leadingIconColor]: chip.suggestion.withLeadingIcon.leadingIcon.color,
      [trailingIconColor]: chip.suggestion.withLeadingIcon.leadingIcon.color,
      [leadingIconSize]: chip.suggestion.withLeadingIcon.leadingIcon.size,
      [trailingIconSize]: chip.suggestion.withLeadingIcon.leadingIcon.size,
      [shadowColor]: chip.suggestion.elevated.container.shadowColor,
    },
    selectors: {
      [hovered]: {
        vars: {
          [containerElevation]: chip.suggestion.elevated.hover.container.elevation,
          [labelTextColor]: chip.suggestion.hover.labelText.color,
          [stateLayerColor]: chip.suggestion.hover.stateLayer.color,
          [stateLayerOpacity]: chip.suggestion.hover.stateLayer.opacity,
          [leadingIconColor]: chip.suggestion.withLeadingIcon.hover.leadingIcon.color,
          [trailingIconColor]: chip.suggestion.withLeadingIcon.hover.leadingIcon.color,
        },
      },
      [focused]: {
        outline: `${chip.suggestion.focus.indicator.thickness} solid ${chip.suggestion.focus.indicator.color}`,
        outlineOffset: chip.suggestion.focus.indicator.outline.offset,
        vars: {
          [containerElevation]: chip.suggestion.elevated.focus.container.elevation,
          [labelTextColor]: chip.suggestion.focus.labelText.color,
          [stateLayerColor]: chip.suggestion.focus.stateLayer.color,
          [stateLayerOpacity]: chip.suggestion.focus.stateLayer.opacity,
          [leadingIconColor]: chip.suggestion.withLeadingIcon.focus.leadingIcon.color,
          [trailingIconColor]: chip.suggestion.withLeadingIcon.focus.leadingIcon.color,
        },
      },
      [pressed]: {
        vars: {
          [containerElevation]: chip.suggestion.elevated.pressed.container.elevation,
          [labelTextColor]: chip.suggestion.pressed.labelText.color,
          [stateLayerColor]: chip.suggestion.pressed.stateLayer.color,
          [stateLayerOpacity]: chip.suggestion.pressed.stateLayer.opacity,
          [leadingIconColor]: chip.suggestion.withLeadingIcon.pressed.leadingIcon.color,
          [trailingIconColor]: chip.suggestion.withLeadingIcon.pressed.leadingIcon.color,
        },
      },
      [draggedState]: {
        vars: {
          [containerElevation]: chip.suggestion.dragged.container.elevation,
          [labelTextColor]: chip.suggestion.dragged.labelText.color,
          [stateLayerColor]: chip.suggestion.dragged.stateLayer.color,
          [stateLayerOpacity]: chip.suggestion.dragged.stateLayer.opacity,
          [leadingIconColor]: chip.suggestion.withLeadingIcon.dragged.leadingIcon.color,
          [trailingIconColor]: chip.suggestion.withLeadingIcon.dragged.leadingIcon.color,
        },
      },
      [`&${disabled}`]: {
        vars: {
          [containerElevation]: chip.suggestion.elevated.disabled.container.elevation,
          [containerColor]: composite(
            chip.suggestion.elevated.disabled.container.color,
            chip.suggestion.elevated.disabled.container.opacity,
          ),
          [labelTextColor]: composite(
            chip.suggestion.disabled.labelText.color,
            chip.suggestion.disabled.labelText.opacity,
            containerColor,
          ),
          [leadingIconColor]: composite(
            chip.suggestion.withLeadingIcon.disabled.leadingIcon.color,
            chip.suggestion.withLeadingIcon.disabled.leadingIcon.opacity,
            containerColor,
          ),
          [trailingIconColor]: composite(
            chip.suggestion.withLeadingIcon.disabled.leadingIcon.color,
            chip.suggestion.withLeadingIcon.disabled.leadingIcon.opacity,
            containerColor,
          ),
          [stateLayerOpacity]: "0",
        },
      },
    },
  },
]);
