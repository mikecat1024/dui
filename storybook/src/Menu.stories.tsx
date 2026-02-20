import type { Meta, StoryObj } from "@storybook/react";

import Button from "md3/components/buttons/Button";
import Menu from "md3/components/menus/Menu";
import { menuToken } from "md3/theme/token";
import EditIcon from "md3/icons/edit";

interface MenuStoryArgs {
  trigger: string;
  disabled: boolean;
  density: 0 | -1 | -2 | -3;
}

const meta = {
  title: "MD3/Menu",
  args: {
    trigger: "Open menu",
    disabled: false,
    density: 0,
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    density: {
      control: "inline-radio",
      options: [0, -1, -2, -3],
    },
  },
  render: (args: MenuStoryArgs) => {
    const { trigger, disabled, density } = args;

    return (
      <Menu.Root>
        <Menu.Trigger render={<Button variant="filled" />}>{trigger}</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={8}>
            <Menu.Popup density={density}>
              <Menu.Item leadingIcon={<EditIcon size={menuToken.menuItem.leadingIcon.size} />}>
                Edit
              </Menu.Item>
              <Menu.Item
                leadingIcon={<EditIcon size={menuToken.menuItem.leadingIcon.size} />}
                trailingSupportingText="⌘E"
              >
                Rename
              </Menu.Item>
              <Menu.Item
                disabled={disabled}
                trailingIcon={<EditIcon size={menuToken.menuItem.trailingIcon.size} />}
              >
                Duplicate
              </Menu.Item>
              <Menu.Item
                supportingText="More options"
                trailingIcon={<EditIcon size={menuToken.menuItem.trailingIcon.size} />}
              >
                Advanced
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
    );
  },
} satisfies Meta<MenuStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
