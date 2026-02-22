import { style, styleVariants } from "@vanilla-extract/css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";

import { badge } from "../../theme/token.js";

const attributes = {
  largeBadgeMaxCharacterCountInlineSize: "34px",
  largeBadgePaddingBetweenBadgeAndTextContainer: "4px",
  smallBadgeOffsetInlineStart: "6px",
  smallBadgeOffsetBlockStart: "0px",
  largeBadgeOffsetInlineStart: "12px",
  largeBadgeOffsetBlockStart: "-2px",
};

export const badgeContainerStyle = style({
  position: "relative",
  display: "inline-flex",
});

export const anchoredBadgeStyle = styleVariants({
  small: {
    position: "absolute",
    insetBlockStart: attributes.smallBadgeOffsetBlockStart,
    insetInlineStart: `calc(100% - ${attributes.smallBadgeOffsetInlineStart})`,
  },
  large: {
    position: "absolute",
    insetBlockStart: attributes.largeBadgeOffsetBlockStart,
    insetInlineStart: `calc(100% - ${attributes.largeBadgeOffsetInlineStart})`,
  },
});

export const badgeStyle = recipe({
  base: {
    boxSizing: "border-box",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: badge.shape,
    verticalAlign: "top",
    whiteSpace: "nowrap",
  },
  variants: {
    variant: {
      small: {
        borderRadius: badge.shape,
        backgroundColor: badge.color,
        blockSize: badge.size,
        minBlockSize: badge.size,
        inlineSize: badge.size,
        minInlineSize: badge.size,
      },
      large: {
        borderRadius: badge.large.shape,
        backgroundColor: badge.large.color,
        paddingInline: attributes.largeBadgePaddingBetweenBadgeAndTextContainer,
        blockSize: badge.large.size,
        minInlineSize: badge.large.size,
        maxInlineSize: attributes.largeBadgeMaxCharacterCountInlineSize,
        lineHeight: badge.large.labelText.lineHeight,
        letterSpacing: badge.large.labelText.tracking,
        color: badge.large.labelText.color,
        fontFamily: badge.large.labelText.font,
        fontSize: badge.large.labelText.size,
        fontWeight: badge.large.labelText.weight,
      },
    },
  },
  defaultVariants: {
    variant: "small",
  },
});

export type BadgeVariants = RecipeVariants<typeof badgeStyle>;
