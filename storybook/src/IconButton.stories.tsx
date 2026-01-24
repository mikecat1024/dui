import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import IconButton from "md3/components/icon-buttons/IconButton";
import EditIcon from "md3/icons/edit";

type IconButtonStoryArgs = ComponentProps<typeof IconButton>;

const variantControl = {
  control: false,
  table: {
    disable: true,
  },
} as const;

const meta = {
  title: "MD3/IconButton",
  component: IconButton,
  args: {
    "aria-label": "Edit",
    variant: "filled",
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
  render: (args: IconButtonStoryArgs) => (
    <IconButton {...args}>
      <EditIcon />
    </IconButton>
  ),
} satisfies Meta<IconButtonStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    variant: "standard",
  },
  argTypes: {
    variant: variantControl,
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
  },
  argTypes: {
    variant: variantControl,
  },
};

export const Tonal: Story = {
  args: {
    variant: "tonal",
  },
  argTypes: {
    variant: variantControl,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
  argTypes: {
    variant: variantControl,
  },
};
