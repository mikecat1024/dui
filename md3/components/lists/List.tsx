import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { joinClassNames } from "../../utils/utils.js";
import {
  listDividerBorderStyle,
  listDividerStyle,
  listItemButtonStyle,
  listItemLabelStyle,
  listItemLeadingAvatarStyle,
  listItemLeadingIconStyle,
  listItemLeadingStyle,
  listItemSupportingTextStyle,
  listItemTextStyle,
  listItemTrailingIconStyle,
  listItemTrailingStyle,
  listItemTrailingSupportingTextStyle,
  listItemWrapperStyle,
  listStyle,
} from "./list.css.js";

type ListItemLine = "oneLine" | "twoLine" | "threeLine";

type ListRootProps = ComponentPropsWithoutRef<"ul">;

interface ListItemProps extends Omit<ComponentPropsWithoutRef<"button">, "children"> {
  children: ReactNode;
  line: ListItemLine;
  selected?: boolean;
  supportingText?: ReactNode;
  trailingSupportingText?: ReactNode;
  leadingIcon?: ReactNode;
  leadingAvatar?: ReactNode;
  trailingIcon?: ReactNode;
}

type ListDividerVariant = "fullWidth" | "inset";

interface ListDividerProps extends ComponentPropsWithoutRef<"hr"> {
  variant?: ListDividerVariant;
}

function ListRoot({ className, ...props }: ListRootProps) {
  return <ul className={joinClassNames(listStyle, className)} data-slot="root" {...props} />;
}

function ListItem({
  className,
  children,
  line,
  selected = false,
  supportingText,
  trailingSupportingText,
  leadingIcon,
  leadingAvatar,
  trailingIcon,
  type,
  disabled = false,
  ...props
}: ListItemProps) {
  return (
    <li className={listItemWrapperStyle}>
      <button
        {...props}
        type={type ?? "button"}
        className={joinClassNames(listItemButtonStyle, className)}
        data-line={line}
        data-selected={selected ? "true" : undefined}
        data-disabled={disabled ? "true" : undefined}
        disabled={disabled}
      >
        {leadingAvatar || leadingIcon ? (
          <span className={listItemLeadingStyle}>
            {leadingAvatar ? (
              <span className={listItemLeadingAvatarStyle}>{leadingAvatar}</span>
            ) : (
              <span className={listItemLeadingIconStyle} aria-hidden>
                {leadingIcon}
              </span>
            )}
          </span>
        ) : null}
        <span className={listItemTextStyle}>
          <span className={listItemLabelStyle}>{children}</span>
          {supportingText ? (
            <span className={listItemSupportingTextStyle}>{supportingText}</span>
          ) : null}
        </span>
        {trailingSupportingText || trailingIcon ? (
          <span className={listItemTrailingStyle}>
            {trailingSupportingText ? (
              <span className={listItemTrailingSupportingTextStyle}>{trailingSupportingText}</span>
            ) : null}
            {trailingIcon ? (
              <span className={listItemTrailingIconStyle} aria-hidden>
                {trailingIcon}
              </span>
            ) : null}
          </span>
        ) : null}
      </button>
    </li>
  );
}

function ListDivider({ className, variant, ...props }: ListDividerProps) {
  return (
    <hr
      {...props}
      className={joinClassNames(
        listDividerBorderStyle({ variant: variant ?? "fullWidth" }),
        listDividerStyle,
        className,
      )}
      data-slot="root"
    />
  );
}

ListRoot.displayName = "List.Root";
ListItem.displayName = "List.Item";
ListDivider.displayName = "List.Divider";

const List = {
  Root: ListRoot,
  Item: ListItem,
  Divider: ListDivider,
};

export default List;
