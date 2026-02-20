import { globalStyle, style } from "@vanilla-extract/css";
import { md, shadowColor } from "../../theme/theme.css.js";
import { dialog } from "../../theme/token.js";

const attributes = {
  container: {
    shape: "28px",
    minWidth: "280px",
    maxWidth: "560px",
  },
  alignment: {
    withIcon: "center",
    withoutIcon: "start",
  },
  padding: {
    topLeftRightBottom: "24px",
    betweenButtons: "8px",
    betweenTitleAndBody: "16px",
    betweenIconAndTitle: "16px",
    betweenBodyAndActions: "24px",
  },
} as const;

export const dialogBackdropStyle = style({
  position: "fixed",
  inset: 0,
  opacity: "0.32",
  backgroundColor: md.sys.color.scrim,
});

export const dialogPopupStyle = style({
  boxSizing: "border-box",
  position: "fixed",
  top: "50%",
  left: "50%",
  display: "grid",
  rowGap: attributes.padding.betweenBodyAndActions,
  transform: "translate(-50%, -50%)",
  borderRadius: dialog.container.shape,
  boxShadow: dialog.container.elevation,
  backgroundColor: dialog.container.color,
  padding: attributes.padding.topLeftRightBottom,
  minWidth: attributes.container.minWidth,
  maxWidth: attributes.container.maxWidth,
  overflowY: "auto",

  vars: {
    [shadowColor]: md.sys.color.shadow,
  },
});

export const dialogIconStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  justifySelf: attributes.alignment.withIcon,
  width: dialog.withIcon.icon.size,
  height: dialog.withIcon.icon.size,
  color: dialog.withIcon.icon.color,
});

export const dialogContentStyle = style({
  display: "grid",
  justifyItems: "stretch",
  rowGap: attributes.padding.betweenTitleAndBody,
  textAlign: "start",
});

globalStyle(`${dialogContentStyle} > *`, {
  marginBlock: 0,
});

export const dialogHeadlineStyle = style({
  margin: 0,
  textAlign: attributes.alignment.withoutIcon,
  lineHeight: dialog.headline.lineHeight,
  letterSpacing: dialog.headline.tracking,
  color: dialog.headline.color,
  fontFamily: dialog.headline.font,
  fontSize: dialog.headline.size,
  fontWeight: dialog.headline.weight,
});

globalStyle(`${dialogIconStyle} + ${dialogHeadlineStyle}`, {
  textAlign: attributes.alignment.withIcon,
});

export const dialogSupportingTextStyle = style({
  margin: 0,
  lineHeight: dialog.supportingText.lineHeight,
  letterSpacing: dialog.supportingText.tracking,
  color: dialog.supportingText.color,
  fontFamily: dialog.supportingText.font,
  fontSize: dialog.supportingText.size,
  fontWeight: dialog.supportingText.weight,
});

export const dialogDividerStyle = style({
  inlineSize: "auto",
});

export const dialogActionsStyle = style({
  display: "flex",
  justifyContent: "flex-end",
  columnGap: attributes.padding.betweenButtons,
});
