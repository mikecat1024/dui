import { createVar, globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { composite, withOpacity } from "../../utils/utils.js";
import { divider } from "../../theme/token.js";
import { listToken } from "../../theme/token.js";

const selected = '[data-selected="true"]';
const disabled = '[data-disabled="true"]';
const enabled = `:not(${disabled})`;
const threeLine = '[data-line="threeLine"]';

const hovered = `&:hover${enabled}`;
const focused = `&:focus-visible${enabled}`;
const pressed = `&:active${enabled}`;

const listItemContainerColor = createVar();
const listItemStateLayerColor = createVar();
const listItemStateLayerOpacity = createVar();
const listItemLabelTextColor = createVar();
const listItemSupportingTextColor = createVar();
const listItemTrailingSupportingTextColor = createVar();
const listItemLeadingIconColor = createVar();
const listItemTrailingIconColor = createVar();
const listItemLeadingAvatarColor = createVar();
const listItemLeadingAvatarLabelColor = createVar();

const attributes = {
  listItem: {
    leadingSpace: "16px",
    trailingSpace: "16px",
    topSpace: "8px",
    bottomSpace: "8px",
    betweenSpace: "12px",
    leadingIconTopPadding: "8px",
    leadingIconTopPaddingLarge: "12px",
    trailingElementTopPaddingLarge: "12px",
  },
} as const;

export const listStyle = style({
  margin: 0,
  borderRadius: listToken.container.shape,
  backgroundColor: listToken.listItem.container.color,
  padding: 0,
  listStyle: "none",
});

export const listItemWrapperStyle = style({
  listStyle: "none",
});

export const listItemButtonStyle = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: attributes.listItem.betweenSpace,
  outline: "none",
  border: "none",
  borderRadius: listToken.listItem.container.shape,
  boxShadow: listToken.listItem.container.elevation,
  backgroundColor: listItemContainerColor,
  cursor: "pointer",
  paddingTop: attributes.listItem.topSpace,
  paddingRight: attributes.listItem.trailingSpace,
  paddingBottom: attributes.listItem.bottomSpace,
  paddingLeft: attributes.listItem.leadingSpace,
  width: "100%",
  minHeight: listToken.listItem.oneLine.container.height,
  textAlign: "left",
  vars: {
    [listItemContainerColor]: listToken.listItem.container.color,
    [listItemStateLayerColor]: "transparent",
    [listItemStateLayerOpacity]: "0",
    [listItemLabelTextColor]: listToken.listItem.labelText.color,
    [listItemSupportingTextColor]: listToken.listItem.supportingText.color,
    [listItemTrailingSupportingTextColor]: listToken.listItem.trailingSupportingText.color,
    [listItemLeadingIconColor]: listToken.listItem.leadingIcon.color,
    [listItemTrailingIconColor]: listToken.listItem.trailingIcon.unselectedColor,
    [listItemLeadingAvatarColor]: listToken.listItem.leadingAvatar.color,
    [listItemLeadingAvatarLabelColor]: listToken.listItem.leadingAvatar.labelColor,
  },
  selectors: {
    "&::before": {
      position: "absolute",
      inset: 0,
      opacity: listItemStateLayerOpacity,
      borderRadius: "inherit",
      backgroundColor: listItemStateLayerColor,
      pointerEvents: "none",
      content: "",
    },
    '&[data-line="twoLine"]': {
      minHeight: listToken.listItem.twoLine.container.height,
    },
    [`&${threeLine}`]: {
      minHeight: listToken.listItem.threeLine.container.height,
    },
    [`&${selected}`]: {
      borderRadius: listToken.listItem.selected.container.shape,
      vars: {
        [listItemContainerColor]: listToken.listItem.selected.container.color,
        [listItemLabelTextColor]: listToken.listItem.selected.labelText.color,
        [listItemSupportingTextColor]: listToken.listItem.selected.supportingText.color,
        [listItemTrailingSupportingTextColor]:
          listToken.listItem.selected.trailingSupportingText.color,
        [listItemLeadingIconColor]: listToken.listItem.selected.leadingIcon.color,
        [listItemTrailingIconColor]: listToken.listItem.selected.trailingIcon.color,
      },
    },
    [`${hovered}`]: {
      vars: {
        [listItemStateLayerColor]: listToken.listItem.hover.stateLayer.color,
        [listItemStateLayerOpacity]: listToken.listItem.hover.stateLayer.opacity,
        [listItemLabelTextColor]: listToken.listItem.hover.labelText.color,
        [listItemLeadingIconColor]: listToken.listItem.hover.leadingIcon.color,
        [listItemTrailingIconColor]: listToken.listItem.hover.trailingIcon.color,
      },
    },
    [`${hovered}${selected}`]: {
      vars: {
        [listItemStateLayerColor]: listToken.listItem.selected.hover.stateLayer.color,
        [listItemStateLayerOpacity]: listToken.listItem.selected.hover.stateLayer.opacity,
        [listItemLabelTextColor]: listToken.listItem.selected.hover.labelText.color,
        [listItemLeadingIconColor]: listToken.listItem.selected.hover.leadingIcon.color,
        [listItemTrailingIconColor]: listToken.listItem.selected.hover.trailingIcon.color,
      },
    },
    [`${focused}`]: {
      outline: `${listToken.listItem.focusIndicator.thickness} solid ${listToken.listItem.focusIndicator.color}`,
      outlineOffset: listToken.listItem.focusIndicator.outlineOffset,
      vars: {
        [listItemStateLayerColor]: listToken.listItem.focus.stateLayer.color,
        [listItemStateLayerOpacity]: listToken.listItem.focus.stateLayer.opacity,
        [listItemLabelTextColor]: listToken.listItem.focus.labelText.color,
        [listItemLeadingIconColor]: listToken.listItem.focus.leadingIcon.color,
        [listItemTrailingIconColor]: listToken.listItem.focus.trailingIcon.color,
      },
    },
    [`${focused}${selected}`]: {
      vars: {
        [listItemStateLayerColor]: listToken.listItem.selected.focus.stateLayer.color,
        [listItemStateLayerOpacity]: listToken.listItem.selected.focus.stateLayer.opacity,
        [listItemLabelTextColor]: listToken.listItem.selected.focus.labelText.color,
        [listItemLeadingIconColor]: listToken.listItem.selected.focus.leadingIcon.color,
        [listItemTrailingIconColor]: listToken.listItem.selected.focus.trailingIcon.color,
      },
    },
    [`${pressed}`]: {
      vars: {
        [listItemStateLayerColor]: listToken.listItem.pressed.stateLayer.color,
        [listItemStateLayerOpacity]: listToken.listItem.pressed.stateLayer.opacity,
        [listItemLabelTextColor]: listToken.listItem.pressed.labelText.color,
        [listItemLeadingIconColor]: listToken.listItem.pressed.leadingIcon.color,
        [listItemTrailingIconColor]: listToken.listItem.pressed.trailingIcon.color,
      },
    },
    [`${pressed}${selected}`]: {
      vars: {
        [listItemStateLayerColor]: listToken.listItem.selected.pressed.stateLayer.color,
        [listItemStateLayerOpacity]: listToken.listItem.selected.pressed.stateLayer.opacity,
        [listItemLabelTextColor]: listToken.listItem.selected.pressed.labelText.color,
        [listItemLeadingIconColor]: listToken.listItem.selected.pressed.leadingIcon.color,
        [listItemTrailingIconColor]: listToken.listItem.selected.pressed.trailingIcon.color,
      },
    },
    [`&${disabled}`]: {
      outline: "none",
      cursor: "not-allowed",
      vars: {
        [listItemStateLayerColor]: listToken.listItem.disabled.stateLayer.color,
        [listItemStateLayerOpacity]: listToken.listItem.disabled.stateLayer.opacity,
        [listItemLabelTextColor]: withOpacity(
          listToken.listItem.disabled.labelText.color,
          listToken.listItem.disabled.labelText.opacity,
        ),
        [listItemSupportingTextColor]: withOpacity(
          listToken.listItem.disabled.supportingText.color,
          listToken.listItem.disabled.supportingText.opacity,
        ),
        [listItemTrailingSupportingTextColor]: withOpacity(
          listToken.listItem.disabled.supportingText.color,
          listToken.listItem.disabled.supportingText.opacity,
        ),
        [listItemLeadingIconColor]: withOpacity(
          listToken.listItem.disabled.leadingIcon.color,
          listToken.listItem.disabled.leadingIcon.opacity,
        ),
        [listItemTrailingIconColor]: withOpacity(
          listToken.listItem.disabled.trailingIcon.color,
          listToken.listItem.disabled.trailingIcon.opacity,
        ),
      },
    },
    [`&${disabled}${selected}`]: {
      vars: {
        [listItemContainerColor]: composite(
          listToken.listItem.selected.disabled.container.color,
          listToken.listItem.selected.disabled.container.opacity,
        ),
        [listItemStateLayerColor]: listToken.listItem.selected.disabled.stateLayer.color,
        [listItemStateLayerOpacity]: listToken.listItem.selected.disabled.stateLayer.opacity,
        [listItemLabelTextColor]: withOpacity(
          listToken.listItem.selected.disabled.labelText.color,
          listToken.listItem.selected.disabled.labelText.opacity,
        ),
        [listItemSupportingTextColor]: withOpacity(
          listToken.listItem.selected.disabled.supportingText.color,
          listToken.listItem.selected.disabled.supportingText.opacity,
        ),
        [listItemTrailingSupportingTextColor]: withOpacity(
          listToken.listItem.selected.disabled.trailingSupportingText.color,
          listToken.listItem.selected.disabled.trailingSupportingText.opacity,
        ),
        [listItemLeadingIconColor]: withOpacity(
          listToken.listItem.selected.disabled.leadingIcon.color,
          listToken.listItem.selected.disabled.leadingIcon.opacity,
        ),
        [listItemTrailingIconColor]: withOpacity(
          listToken.listItem.selected.disabled.trailingIcon.color,
          listToken.listItem.selected.disabled.trailingIcon.opacity,
        ),
      },
    },
  },
});

export const listItemLeadingStyle = style({
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  color: listItemLeadingIconColor,
  selectors: {
    [`${listItemButtonStyle}${threeLine} &`]: {
      alignSelf: "flex-start",
      paddingTop: attributes.listItem.leadingIconTopPaddingLarge,
    },
  },
});

export const listItemLeadingIconStyle = style({
  paddingTop: attributes.listItem.leadingIconTopPadding,
  width: listToken.listItem.leadingIcon.size,
  height: listToken.listItem.leadingIcon.size,
  selectors: {
    [`${listItemButtonStyle}${threeLine} &`]: {
      paddingTop: 0,
    },
  },
});

globalStyle(`${listItemLeadingIconStyle} svg`, {
  width: "100%",
  height: "100%",
});

export const listItemLeadingAvatarStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: listToken.listItem.leadingAvatar.shape,
  backgroundColor: listItemLeadingAvatarColor,
  width: listToken.listItem.leadingAvatar.size,
  height: listToken.listItem.leadingAvatar.size,
  lineHeight: listToken.listItem.leadingAvatar.labelText.lineHeight,
  letterSpacing: listToken.listItem.leadingAvatar.labelText.letterSpacing,
  color: listItemLeadingAvatarLabelColor,
  fontFamily: listToken.listItem.leadingAvatar.labelText.fontFamily,
  fontSize: listToken.listItem.leadingAvatar.labelText.fontSize,
  fontWeight: listToken.listItem.leadingAvatar.labelText.fontWeight,
});

export const listItemTextStyle = style({
  display: "flex",
  flex: "1",
  flexDirection: "column",
  minWidth: "0",
});

export const listItemLabelStyle = style({
  lineHeight: listToken.listItem.labelText.lineHeight,
  letterSpacing: listToken.listItem.labelText.letterSpacing,
  color: listItemLabelTextColor,
  fontFamily: listToken.listItem.labelText.fontFamily,
  fontSize: listToken.listItem.labelText.fontSize,
  fontWeight: listToken.listItem.labelText.fontWeight,
});

export const listItemSupportingTextStyle = style({
  display: "block",
  overflow: "hidden",
  textOverflow: "ellipsis",
  lineHeight: listToken.listItem.supportingText.lineHeight,
  letterSpacing: listToken.listItem.supportingText.letterSpacing,
  whiteSpace: "nowrap",
  color: listItemSupportingTextColor,
  fontFamily: listToken.listItem.supportingText.fontFamily,
  fontSize: listToken.listItem.supportingText.fontSize,
  fontWeight: listToken.listItem.supportingText.fontWeight,
  selectors: {
    [`${listItemButtonStyle}${threeLine} &`]: {
      display: "-webkit-box",
      whiteSpace: "normal",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
    },
  },
});

export const listItemTrailingStyle = style({
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  gap: attributes.listItem.betweenSpace,
  marginLeft: "auto",
  selectors: {
    [`${listItemButtonStyle}${threeLine} &`]: {
      alignSelf: "flex-start",
      paddingTop: attributes.listItem.trailingElementTopPaddingLarge,
    },
  },
});

export const listItemTrailingSupportingTextStyle = style({
  lineHeight: listToken.listItem.trailingSupportingText.lineHeight,
  letterSpacing: listToken.listItem.trailingSupportingText.letterSpacing,
  color: listItemTrailingSupportingTextColor,
  fontFamily: listToken.listItem.trailingSupportingText.fontFamily,
  fontSize: listToken.listItem.trailingSupportingText.fontSize,
  fontWeight: listToken.listItem.trailingSupportingText.fontWeight,
});

export const listItemTrailingIconStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: listToken.listItem.trailingIcon.size,
  height: listToken.listItem.trailingIcon.size,
  color: listItemTrailingIconColor,
});

globalStyle(`${listItemTrailingIconStyle} svg`, {
  width: "100%",
  height: "100%",
});

export const listDividerStyle = style({
  marginTop: "0",
  marginBottom: "0",
});

export const listDividerBorderStyle = recipe({
  base: {
    border: "none",
    backgroundColor: divider.specs.dividerColor,
    blockSize: divider.specs.dividerThickness,
  },
  variants: {
    variant: {
      fullWidth: {
        inlineSize: "100%",
      },
      inset: {
        marginInlineStart: "16px",
        marginInlineEnd: "16px",
      },
    },
  },
  defaultVariants: {
    variant: "fullWidth",
  },
});
