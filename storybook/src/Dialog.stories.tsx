import type { Meta, StoryObj } from "@storybook/react";

import Dialog from "md3/components/dialogs/Dialog";
import { dialog } from "md3/theme/token";
import EditIcon from "md3/icons/edit";

interface DialogStoryArgs {
  trigger: string;
  headline: string;
  supportingText: string;
  primaryActionLabel: string;
  secondaryActionLabel: string;
  divider: boolean;
  icon: boolean;
}

const meta = {
  title: "MD3/Dialog",
  args: {
    trigger: "Open dialog",
    headline: "Basic dialog title",
    supportingText:
      "A dialog is a type of modal window that appears in front of app content to provide critical information or request a decision.",
    primaryActionLabel: "OK",
    secondaryActionLabel: "Cancel",
    divider: false,
    icon: false,
  },
  argTypes: {
    icon: {
      control: "boolean",
    },
    divider: {
      control: "boolean",
    },
  },
  render: (args: DialogStoryArgs) => {
    const {
      trigger,
      headline,
      supportingText,
      primaryActionLabel,
      secondaryActionLabel,
      divider,
      icon,
    } = args;

    return (
      <Dialog.Root>
        <Dialog.Trigger>{trigger}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup>
            <Dialog.Content>
              {icon ? (
                <Dialog.Icon>
                  <EditIcon size={dialog.withIcon.icon.size} />
                </Dialog.Icon>
              ) : null}
              <Dialog.Title>{headline}</Dialog.Title>
              <Dialog.SupportingText>{supportingText}</Dialog.SupportingText>
              {divider ? <Dialog.Divider /> : null}
              <Dialog.SupportingText>{supportingText}</Dialog.SupportingText>
            </Dialog.Content>
            <Dialog.Actions>
              <Dialog.Action>{secondaryActionLabel}</Dialog.Action>
              <Dialog.Action>{primaryActionLabel}</Dialog.Action>
            </Dialog.Actions>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    );
  },
} satisfies Meta<DialogStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
