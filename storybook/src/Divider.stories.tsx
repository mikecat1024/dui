import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import Divider from "md3/components/dividers/Divider";

type DividerStoryArgs = ComponentProps<typeof Divider>;

const hiddenArg = {
  control: false,
  table: {
    disable: true,
  },
} as const;

const meta = {
  title: "MD3/Divider",
  component: Divider,
  args: {
    variant: "fullWidth",
  },
  argTypes: {
    children: hiddenArg,
    variant: hiddenArg,
  },
  render: (args: DividerStoryArgs) => {
    return (
      <div
        style={{
          width: "360px",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
        }}
      >
        <div style={{ padding: "16px" }}>List item</div>
        <Divider {...args} />
        <div style={{ padding: "16px" }}>List item</div>
      </div>
    );
  },
} satisfies Meta<DividerStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FullWidth: Story = {};

export const Inset: Story = {
  args: {
    variant: "inset",
  },
};

export const MiddleInset: Story = {
  args: {
    variant: "middleInset",
  },
};
