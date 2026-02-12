import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import Switch from "md3/components/switches/Switch";

type SwitchStoryArgs = ComponentProps<typeof Switch>;

const disabledArg = {
  control: false,
  table: {
    disable: true,
  },
} as const;

const meta = {
  title: "MD3/Switch",
  component: Switch,
  args: {
    disabled: false,
  },
  argTypes: {
    onCheckedChange: disabledArg,
    withIcon: disabledArg,
  },
  render: (args: SwitchStoryArgs) => {
    return (
      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        <Switch {...args} withIcon={false} />
        <Switch {...args} withIcon />
      </div>
    );
  },
} satisfies Meta<SwitchStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
