import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import Button from "md3/components/buttons/Button";
import EditIcon from "md3/icons/edit";

type ButtonStoryArgs = ComponentProps<typeof Button> & {
  icon?: boolean;
};

const defaultLabel = "Edit";
const iconControl = {
  control: "boolean",
} as const;
const variantControl = {
  control: false,
  table: {
    disable: true,
  },
} as const;

const meta = {
  title: "MD3/Button",
  component: Button,
  args: {
    children: defaultLabel,
    icon: false,
  },
  render: (args: ButtonStoryArgs) => {
    const { children, icon, ...props } = args;

    return (
      <Button {...props}>
        {icon && <EditIcon />}
        {children}
      </Button>
    );
  },
  argTypes: {
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    icon: iconControl,
  },
} satisfies Meta<ButtonStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: "filled",
  },
  argTypes: {
    variant: variantControl,
    icon: iconControl,
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
  },
  argTypes: {
    variant: variantControl,
    icon: iconControl,
  },
};

export const Tonal: Story = {
  args: {
    variant: "tonal",
  },
  argTypes: {
    variant: variantControl,
    icon: iconControl,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
  argTypes: {
    variant: variantControl,
    icon: iconControl,
  },
};

export const Text: Story = {
  args: {
    variant: "text",
  },
  argTypes: {
    variant: variantControl,
    icon: iconControl,
  },
};
