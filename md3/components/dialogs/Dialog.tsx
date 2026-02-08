import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { type ComponentPropsWithoutRef } from "react";

import { joinClassNames, mergeClasses } from "../../utils/utils.js";
import Button from "../buttons/Button.js";
import Divider from "../dividers/Divider.js";
import {
  dialogActionsStyle,
  dialogBackdropStyle,
  dialogContentStyle,
  dialogDividerStyle,
  dialogHeadlineStyle,
  dialogIconStyle,
  dialogPopupStyle,
  dialogSupportingTextStyle,
} from "./dialog.css.js";

type DialogButtonVariant = ComponentPropsWithoutRef<typeof Button>["variant"];
type DialogRootProps = ComponentPropsWithoutRef<typeof BaseDialog.Root>;
interface DialogTriggerProps extends ComponentPropsWithoutRef<typeof BaseDialog.Trigger> {
  buttonVariant?: DialogButtonVariant;
}
type DialogPortalProps = ComponentPropsWithoutRef<typeof BaseDialog.Portal>;
type DialogBackdropProps = ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>;
type DialogPopupProps = ComponentPropsWithoutRef<typeof BaseDialog.Popup>;
type DialogContentProps = ComponentPropsWithoutRef<"div">;
type DialogIconProps = ComponentPropsWithoutRef<"div">;
type DialogTitleProps = ComponentPropsWithoutRef<typeof BaseDialog.Title>;
type DialogSupportingTextProps = ComponentPropsWithoutRef<typeof BaseDialog.Description>;
type DialogDividerProps = ComponentPropsWithoutRef<typeof Divider>;
type DialogActionsProps = ComponentPropsWithoutRef<"div">;
interface DialogActionProps extends ComponentPropsWithoutRef<typeof BaseDialog.Close> {
  buttonVariant?: DialogButtonVariant;
}

function DialogRoot({ children, ...props }: DialogRootProps) {
  return <BaseDialog.Root {...props}>{children}</BaseDialog.Root>;
}

function DialogTrigger({ buttonVariant = "filled", render, ...props }: DialogTriggerProps) {
  return <BaseDialog.Trigger {...props} render={render ?? <Button variant={buttonVariant} />} />;
}

function DialogPortal({ children, ...props }: DialogPortalProps) {
  return <BaseDialog.Portal {...props}>{children}</BaseDialog.Portal>;
}

function DialogBackdrop({ className, ...props }: DialogBackdropProps) {
  return (
    <BaseDialog.Backdrop {...props} className={mergeClasses([dialogBackdropStyle, className])} />
  );
}

function DialogPopup({ className, ...props }: DialogPopupProps) {
  return (
    <BaseDialog.Popup
      {...props}
      className={mergeClasses([dialogPopupStyle, className])}
      data-slot="root"
    />
  );
}

function DialogContent({ className, ...props }: DialogContentProps) {
  return <div {...props} className={joinClassNames(dialogContentStyle, className)} />;
}

function DialogIcon({ className, ...props }: DialogIconProps) {
  return <div {...props} className={joinClassNames(dialogIconStyle, className)} />;
}

function DialogTitle({ className, ...props }: DialogTitleProps) {
  return <BaseDialog.Title {...props} className={mergeClasses([dialogHeadlineStyle, className])} />;
}

function DialogSupportingText({ className, ...props }: DialogSupportingTextProps) {
  return (
    <BaseDialog.Description
      {...props}
      className={mergeClasses([dialogSupportingTextStyle, className])}
    />
  );
}

function DialogDivider({ className, variant = "fullWidth", ...props }: DialogDividerProps) {
  return (
    <Divider
      {...props}
      variant={variant}
      className={joinClassNames(dialogDividerStyle, className)}
    />
  );
}

function DialogActions({ className, ...props }: DialogActionsProps) {
  return <div {...props} className={joinClassNames(dialogActionsStyle, className)} />;
}

function DialogAction({ buttonVariant = "text", render, ...props }: DialogActionProps) {
  return <BaseDialog.Close {...props} render={render ?? <Button variant={buttonVariant} />} />;
}

DialogRoot.displayName = "Dialog.Root";
DialogTrigger.displayName = "Dialog.Trigger";
DialogPortal.displayName = "Dialog.Portal";
DialogBackdrop.displayName = "Dialog.Backdrop";
DialogPopup.displayName = "Dialog.Popup";
DialogContent.displayName = "Dialog.Content";
DialogIcon.displayName = "Dialog.Icon";
DialogTitle.displayName = "Dialog.Title";
DialogSupportingText.displayName = "Dialog.SupportingText";
DialogDivider.displayName = "Dialog.Divider";
DialogActions.displayName = "Dialog.Actions";
DialogAction.displayName = "Dialog.Action";

const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Backdrop: DialogBackdrop,
  Popup: DialogPopup,
  Content: DialogContent,
  Icon: DialogIcon,
  Title: DialogTitle,
  SupportingText: DialogSupportingText,
  Divider: DialogDivider,
  Actions: DialogActions,
  Action: DialogAction,
};

export default Dialog;
