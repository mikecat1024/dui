import { Menu as BaseMenu } from "@base-ui/react/menu";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { mergeClasses } from "../../utils/utils.js";
import {
  menuItemLabelStyle,
  menuItemLeadingIconStyle,
  menuItemStyle,
  menuItemSupportingTextStyle,
  menuItemTextStyle,
  menuItemTrailingIconStyle,
  menuItemTrailingStyle,
  menuItemTrailingSupportingTextStyle,
  menuPopupStyle,
} from "./menu.css.js";

type MenuRootProps = ComponentPropsWithoutRef<typeof BaseMenu.Root>;
type MenuTriggerProps = ComponentPropsWithoutRef<typeof BaseMenu.Trigger>;
type MenuPortalProps = ComponentPropsWithoutRef<typeof BaseMenu.Portal>;
type MenuPositionerProps = ComponentPropsWithoutRef<typeof BaseMenu.Positioner>;
type MenuDensity = 0 | -1 | -2 | -3;

interface MenuPopupProps extends ComponentPropsWithoutRef<typeof BaseMenu.Popup> {
  density?: MenuDensity;
}

interface MenuItemProps extends Omit<ComponentPropsWithoutRef<typeof BaseMenu.Item>, "children"> {
  children: ReactNode;
  leadingIcon?: ReactNode;
  supportingText?: ReactNode;
  trailingSupportingText?: ReactNode;
  trailingIcon?: ReactNode;
  active?: boolean;
}

type MenuSeparatorProps = ComponentPropsWithoutRef<typeof BaseMenu.Separator>;

function MenuRoot({ children, ...props }: MenuRootProps) {
  return <BaseMenu.Root {...props}>{children}</BaseMenu.Root>;
}

function MenuTrigger({ children, ...props }: MenuTriggerProps) {
  return <BaseMenu.Trigger {...props}>{children}</BaseMenu.Trigger>;
}

function MenuPortal({ children, ...props }: MenuPortalProps) {
  return <BaseMenu.Portal {...props}>{children}</BaseMenu.Portal>;
}

function MenuPositioner({ children, ...props }: MenuPositionerProps) {
  return <BaseMenu.Positioner {...props}>{children}</BaseMenu.Positioner>;
}

function MenuPopup({ className, density = 0, ...props }: MenuPopupProps) {
  return (
    <BaseMenu.Popup
      {...props}
      className={mergeClasses([menuPopupStyle, className])}
      data-density={String(density)}
      data-slot="root"
    />
  );
}

function MenuItem({
  className,
  children,
  leadingIcon,
  supportingText,
  trailingSupportingText,
  trailingIcon,
  active = false,
  ...props
}: MenuItemProps) {
  return (
    <BaseMenu.Item
      {...props}
      className={mergeClasses([menuItemStyle, className])}
      data-active={active ? "true" : undefined}
    >
      {leadingIcon ? (
        <span className={menuItemLeadingIconStyle} aria-hidden>
          {leadingIcon}
        </span>
      ) : null}
      <span className={menuItemTextStyle}>
        <span className={menuItemLabelStyle}>{children}</span>
        {supportingText ? (
          <span className={menuItemSupportingTextStyle}>{supportingText}</span>
        ) : null}
      </span>
      {trailingSupportingText || trailingIcon ? (
        <span className={menuItemTrailingStyle}>
          {trailingSupportingText ? (
            <span className={menuItemTrailingSupportingTextStyle}>{trailingSupportingText}</span>
          ) : null}
          {trailingIcon ? (
            <span className={menuItemTrailingIconStyle} aria-hidden>
              {trailingIcon}
            </span>
          ) : null}
        </span>
      ) : null}
    </BaseMenu.Item>
  );
}

function MenuSeparator({ className, ...props }: MenuSeparatorProps) {
  if (className === undefined) {
    return <BaseMenu.Separator {...props} />;
  }

  return <BaseMenu.Separator {...props} className={className} />;
}

MenuRoot.displayName = "Menu.Root";
MenuTrigger.displayName = "Menu.Trigger";
MenuPortal.displayName = "Menu.Portal";
MenuPositioner.displayName = "Menu.Positioner";
MenuPopup.displayName = "Menu.Popup";
MenuItem.displayName = "Menu.Item";
MenuSeparator.displayName = "Menu.Separator";

const Menu = {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  Portal: MenuPortal,
  Positioner: MenuPositioner,
  Popup: MenuPopup,
  Item: MenuItem,
  Separator: MenuSeparator,
};

export default Menu;
