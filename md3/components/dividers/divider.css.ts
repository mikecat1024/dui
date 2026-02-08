import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { divider } from "./token.js";

const attributes = {
  dividerFullWidth: "100%",
  dividerInsetLeftMargin: "16px",
  dividerInsetRightMargin: "0",
  dividerMiddleInsetLeftMargin: "16px",
  dividerMiddleInsetRightMargin: "16px",
  spaceBetweenDividerAndSupportingText: "4px",
};

export const dividerStyle = recipe({
  base: {
    margin: `${attributes.spaceBetweenDividerAndSupportingText} 0`,
    border: "none",
    backgroundColor: divider.specs.dividerColor,
    blockSize: divider.specs.dividerThickness,
  },
  variants: {
    variant: {
      fullWidth: {
        inlineSize: attributes.dividerFullWidth,
      },
      inset: {
        marginInlineStart: attributes.dividerInsetLeftMargin,
        marginInlineEnd: attributes.dividerInsetRightMargin,
      },
      middleInset: {
        marginInlineStart: attributes.dividerMiddleInsetLeftMargin,
        marginInlineEnd: attributes.dividerMiddleInsetRightMargin,
      },
    },
  },
  defaultVariants: {
    variant: "fullWidth",
  },
});

export type DividerVariants = RecipeVariants<typeof dividerStyle>;
