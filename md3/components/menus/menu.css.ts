import { createVar, globalStyle, style } from "@vanilla-extract/css";
import { shadowColor } from "../../theme/theme.css.js";
import { withOpacity } from "../../utils/utils.js";
import { listToken } from "../../theme/token.js";
import { menuToken } from "../../theme/token.js";

const disabled = "[data-disabled]";
const enabled = `:not(${disabled})`;
const active = '[data-active="true"]';
const highlighted = "[data-highlighted]";

const hovered = `&:hover${enabled}`;
const highlightedState = `&${highlighted}${enabled}`;
const focused = `&:focus-visible${enabled}`;
const pressed = `&:active${enabled}`;

const menuItemContainerColor = createVar();
const menuItemStateLayerColor = createVar();
const menuItemStateLayerOpacity = createVar();
const menuItemMinHeight = createVar();
const menuItemLabelTextColor = createVar();
const menuItemSupportingTextColor = createVar();
const menuItemLeadingIconColor = createVar();
const menuItemTrailingIconColor = createVar();
const menuItemTrailingSupportingTextColor = createVar();

const attributes = {
  menu: {
    trailingContentBetweenSpace: "12px",
    itemLeadingSpace: "16px",
    itemTrailingSpace: "16px",
    itemTopSpace: "8px",
    itemBottomSpace: "8px",
  },
} as const;

export const menuPopupStyle = style({
  display: "flex",
  flexDirection: "column",
  borderRadius: menuToken.container.shape,
  boxShadow: menuToken.container.elevation,
  backgroundColor: menuToken.standard.container.color,
  padding: "0",
  vars: {
    [shadowColor]: menuToken.standard.container.shadowColor,
  },
});

export const menuItemStyle = style({
  boxSizing: "border-box",
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  transition: "background-color 50ms ease",
  outline: "none",
  border: "none",
  borderRadius: listToken.listItem.container.shape,
  backgroundColor: menuItemContainerColor,
  cursor: "pointer",
  paddingTop: attributes.menu.itemTopSpace,
  paddingRight: attributes.menu.itemTrailingSpace,
  paddingBottom: attributes.menu.itemBottomSpace,
  paddingLeft: attributes.menu.itemLeadingSpace,
  minHeight: menuItemMinHeight,
  textAlign: "left",
  vars: {
    [menuItemMinHeight]: listToken.listItem.oneLine.container.height,
    [menuItemContainerColor]: listToken.listItem.container.color,
    [menuItemStateLayerColor]: "transparent",
    [menuItemStateLayerOpacity]: "0",
    [menuItemLabelTextColor]: listToken.listItem.labelText.color,
    [menuItemSupportingTextColor]: listToken.listItem.supportingText.color,
    [menuItemLeadingIconColor]: listToken.listItem.leadingIcon.color,
    [menuItemTrailingIconColor]: listToken.listItem.trailingIcon.color,
    [menuItemTrailingSupportingTextColor]: listToken.listItem.trailingSupportingText.color,
  },
  selectors: {
    "&::before": {
      position: "absolute",
      inset: 0,
      opacity: menuItemStateLayerOpacity,
      borderRadius: "inherit",
      backgroundColor: menuItemStateLayerColor,
      pointerEvents: "none",
      content: "",
    },
    [`&${active}`]: {
      vars: {
        [menuItemStateLayerColor]: listToken.listItem.hover.stateLayer.color,
        [menuItemStateLayerOpacity]: listToken.listItem.hover.stateLayer.opacity,
      },
    },
    [`${menuPopupStyle}[data-density="-1"] &`]: {
      vars: {
        [menuItemMinHeight]: "52px",
      },
    },
    [`${menuPopupStyle}[data-density="-2"] &`]: {
      vars: {
        [menuItemMinHeight]: "48px",
      },
    },
    [`${menuPopupStyle}[data-density="-3"] &`]: {
      vars: {
        [menuItemMinHeight]: "44px",
      },
    },
    [`${hovered}, ${highlightedState}`]: {
      vars: {
        [menuItemStateLayerColor]: listToken.listItem.hover.stateLayer.color,
        [menuItemStateLayerOpacity]: listToken.listItem.hover.stateLayer.opacity,
        [menuItemLabelTextColor]: listToken.listItem.hover.labelText.color,
        [menuItemLeadingIconColor]: listToken.listItem.hover.leadingIcon.color,
        [menuItemTrailingIconColor]: listToken.listItem.hover.trailingIcon.color,
      },
    },
    [`${focused}`]: {
      outline: `${listToken.listItem.focusIndicator.thickness} solid ${listToken.listItem.focusIndicator.color}`,
      outlineOffset: listToken.listItem.focusIndicator.outlineOffset,
      vars: {
        [menuItemStateLayerColor]: listToken.listItem.focus.stateLayer.color,
        [menuItemStateLayerOpacity]: listToken.listItem.focus.stateLayer.opacity,
        [menuItemLabelTextColor]: listToken.listItem.focus.labelText.color,
        [menuItemLeadingIconColor]: listToken.listItem.focus.leadingIcon.color,
        [menuItemTrailingIconColor]: listToken.listItem.focus.trailingIcon.color,
      },
    },
    [`${pressed}`]: {
      vars: {
        [menuItemStateLayerColor]: listToken.listItem.pressed.stateLayer.color,
        [menuItemStateLayerOpacity]: listToken.listItem.pressed.stateLayer.opacity,
        [menuItemLabelTextColor]: listToken.listItem.pressed.labelText.color,
        [menuItemLeadingIconColor]: listToken.listItem.pressed.leadingIcon.color,
        [menuItemTrailingIconColor]: listToken.listItem.pressed.trailingIcon.color,
      },
    },
    [`&${disabled}`]: {
      outline: "none",
      cursor: "not-allowed",
      vars: {
        [menuItemStateLayerColor]: listToken.listItem.disabled.stateLayer.color,
        [menuItemStateLayerOpacity]: listToken.listItem.disabled.stateLayer.opacity,
        [menuItemLabelTextColor]: withOpacity(
          listToken.listItem.disabled.labelText.color,
          listToken.listItem.disabled.labelText.opacity,
        ),
        [menuItemSupportingTextColor]: withOpacity(
          listToken.listItem.disabled.supportingText.color,
          listToken.listItem.disabled.supportingText.opacity,
        ),
        [menuItemLeadingIconColor]: withOpacity(
          listToken.listItem.disabled.leadingIcon.color,
          listToken.listItem.disabled.leadingIcon.opacity,
        ),
        [menuItemTrailingIconColor]: withOpacity(
          listToken.listItem.disabled.trailingIcon.color,
          listToken.listItem.disabled.trailingIcon.opacity,
        ),
        [menuItemTrailingSupportingTextColor]: withOpacity(
          listToken.listItem.disabled.supportingText.color,
          listToken.listItem.disabled.supportingText.opacity,
        ),
      },
    },
  },
});

export const menuItemLeadingIconStyle = style({
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  width: listToken.listItem.leadingIcon.size,
  height: listToken.listItem.leadingIcon.size,
  color: menuItemLeadingIconColor,
});

globalStyle(`${menuItemLeadingIconStyle} svg`, {
  width: "100%",
  height: "100%",
});

export const menuItemTextStyle = style({
  display: "flex",
  flex: "1",
  flexDirection: "column",
  minWidth: "0",
});

export const menuItemLabelStyle = style({
  lineHeight: listToken.listItem.labelText.lineHeight,
  letterSpacing: listToken.listItem.labelText.letterSpacing,
  color: menuItemLabelTextColor,
  fontFamily: listToken.listItem.labelText.fontFamily,
  fontSize: listToken.listItem.labelText.fontSize,
  fontWeight: listToken.listItem.labelText.fontWeight,
});

export const menuItemSupportingTextStyle = style({
  lineHeight: listToken.listItem.supportingText.lineHeight,
  letterSpacing: listToken.listItem.supportingText.letterSpacing,
  color: menuItemSupportingTextColor,
  fontFamily: listToken.listItem.supportingText.fontFamily,
  fontSize: listToken.listItem.supportingText.fontSize,
  fontWeight: listToken.listItem.supportingText.fontWeight,
});

export const menuItemTrailingStyle = style({
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  gap: attributes.menu.trailingContentBetweenSpace,
  marginLeft: "auto",
});

export const menuItemTrailingSupportingTextStyle = style({
  lineHeight: listToken.listItem.trailingSupportingText.lineHeight,
  letterSpacing: listToken.listItem.trailingSupportingText.letterSpacing,
  color: menuItemTrailingSupportingTextColor,
  fontFamily: listToken.listItem.trailingSupportingText.fontFamily,
  fontSize: listToken.listItem.trailingSupportingText.fontSize,
  fontWeight: listToken.listItem.trailingSupportingText.fontWeight,
});

export const menuItemTrailingIconStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: listToken.listItem.trailingIcon.size,
  height: listToken.listItem.trailingIcon.size,
  color: menuItemTrailingIconColor,
});

globalStyle(`${menuItemTrailingIconStyle} svg`, {
  width: "100%",
  height: "100%",
});
