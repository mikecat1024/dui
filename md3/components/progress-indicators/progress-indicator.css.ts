import { keyframes, style } from "@vanilla-extract/css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { withOpacity } from "../../utils/utils.js";
import { progressIndicator } from "../../theme/token.js";

const attributes = {
  trackOpacity: "0.3",
  linearIndeterminateDuration: "1.8s",
  circularIndeterminateRotateDuration: "1.8s",
};

const linearIndeterminateAnimation = keyframes({
  "0%": {
    insetInlineStart: `calc(-1 * ${progressIndicator.linear.indeterminate.activeIndicator.wave.wavelength})`,
  },
  "100%": {
    insetInlineStart: "100%",
  },
});

const circularIndeterminateRotateAnimation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const progressIndicatorStyle = recipe({
  base: {
    color: "inherit",
  },
  variants: {
    variant: {
      linear: {
        display: "block",
        blockSize: progressIndicator.linear.height,
      },
      circular: {
        display: "inline-block",
        blockSize: progressIndicator.circular.size,
        inlineSize: progressIndicator.circular.size,
        lineHeight: 0,
      },
    },
  },
  defaultVariants: {
    variant: "linear",
  },
});

export const linearTrackStyle = style({
  position: "relative",
  display: "block",
  borderRadius: progressIndicator.linear.track.thickness,
  backgroundColor: withOpacity("currentColor", attributes.trackOpacity),
  blockSize: progressIndicator.linear.track.thickness,
  inlineSize: "100%",
  overflow: "hidden",
});

export const linearActiveIndicatorStyle = style({
  position: "absolute",
  insetBlockStart: 0,
  insetBlockEnd: 0,
  insetInlineStart: 0,
  opacity: "1",
  borderRadius: progressIndicator.linear.activeIndicator.thickness,
  backgroundColor: "currentColor",
  blockSize: progressIndicator.linear.activeIndicator.thickness,
});

export const linearIndeterminateActiveIndicatorStyle = style({
  inlineSize: progressIndicator.linear.indeterminate.activeIndicator.wave.wavelength,
  animation: `${linearIndeterminateAnimation} ${attributes.linearIndeterminateDuration} linear infinite`,
});

export const linearStopIndicatorStyle = style({
  position: "absolute",
  insetBlockStart: "50%",
  insetInlineEnd: progressIndicator.linear.stopIndicator.trailingSpace,
  transform: "translateY(-50%)",
  opacity: "1",
  borderRadius: "999px",
  backgroundColor: "currentColor",
  blockSize: progressIndicator.linear.stopIndicator.size,
  inlineSize: progressIndicator.linear.stopIndicator.size,
});

export const circularSvgStyle = style({
  transform: "rotate(-90deg)",
  blockSize: "100%",
  inlineSize: "100%",
});

export const circularIndeterminateSvgStyle = style({
  animation: `${circularIndeterminateRotateAnimation} ${attributes.circularIndeterminateRotateDuration} linear infinite`,
});

export const circularTrackCircleStyle = style({
  opacity: attributes.trackOpacity,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: progressIndicator.circular.track.thickness,
});

export const circularActiveCircleStyle = style({
  fill: "none",
  stroke: "currentColor",
  strokeWidth: progressIndicator.circular.activeIndicator.thickness,
  strokeLinecap: "round",
});

export type ProgressIndicatorVariants = RecipeVariants<typeof progressIndicatorStyle>;
