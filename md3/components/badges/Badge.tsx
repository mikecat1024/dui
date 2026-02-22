import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { joinClassNames } from "../../utils/utils.js";
import {
  anchoredBadgeStyle,
  badgeContainerStyle,
  badgeStyle,
  type BadgeVariants,
} from "./badge.css.js";

type BadgeProps = ComponentPropsWithoutRef<"span"> &
  BadgeVariants & {
    badgeContent?: ReactNode;
  };

const maxCharacterCount = 999;

function normalizeLargeBadgeLabel(badgeContent: ReactNode) {
  if (typeof badgeContent === "number") {
    return badgeContent >= 1000 ? `${maxCharacterCount}+` : badgeContent;
  }

  if (typeof badgeContent === "string") {
    const trimmedChildren = badgeContent.trim();
    if (/^\d+$/.test(trimmedChildren) && Number(trimmedChildren) >= 1000) {
      return `${maxCharacterCount}+`;
    }
  }

  return badgeContent;
}

export default function Badge({
  className,
  variant,
  badgeContent,
  children,
  ...props
}: BadgeProps) {
  const resolvedVariant = variant ?? "small";
  const hasBadgeAnchor =
    children !== undefined &&
    children !== null &&
    (badgeContent !== undefined || resolvedVariant === "small");
  const normalizedBadgeContent =
    resolvedVariant === "large" ? normalizeLargeBadgeLabel(badgeContent) : undefined;

  if (hasBadgeAnchor) {
    return (
      <span className={joinClassNames(badgeContainerStyle, className)} {...props} data-slot="root">
        {children}
        <span
          className={joinClassNames(
            badgeStyle({ variant: resolvedVariant }),
            anchoredBadgeStyle[resolvedVariant],
          )}
          data-slot="badge"
        >
          {normalizedBadgeContent}
        </span>
      </span>
    );
  }

  return (
    <span
      className={joinClassNames(badgeStyle({ variant: resolvedVariant }), className)}
      {...props}
      data-slot="root"
    >
      {normalizedBadgeContent}
    </span>
  );
}

Badge.displayName = "Badge";
