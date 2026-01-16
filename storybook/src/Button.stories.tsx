import type { Meta, StoryObj } from "@storybook/react";

import Button from "md3/components/button/Button";

const meta: Meta<typeof Button> = {
  title: "MD3/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    children: "Button",
  },
};

export const Elevated: Story = {
  args: {
    children: "Button",
  },
};

export const Tonal: Story = {
  args: {
    children: "Button",
  },
};

export const Outlined: Story = {
  args: {
    children: "Button",
  },
};

export const Text: Story = {
  args: {
    children: "Button",
  },
};
