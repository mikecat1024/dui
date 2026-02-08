import type { Meta, StoryObj } from "@storybook/react";

import ProgressIndicator from "md3/components/progress-indicators/ProgressIndicator";

const disabledArg = {
  control: false,
  table: {
    disable: true,
  },
} as const;

const meta = {
  title: "MD3/ProgressIndicator",
  component: ProgressIndicator,
  argTypes: {
    variant: disabledArg,
    className: disabledArg,
    style: disabledArg,
    children: disabledArg,
  },
} satisfies Meta<typeof ProgressIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Linear: Story = {
  render: () => {
    return (
      <div
        style={{
          color: "#6750A4",
          display: "grid",
          gap: "20px",
          inlineSize: "320px",
        }}
      >
        <ProgressIndicator variant="linear" value={40} max={100} />
        <ProgressIndicator variant="linear" indeterminate />
        <ProgressIndicator variant="linear" value={60} max={100} showStopIndicator />
      </div>
    );
  },
  argTypes: {
    indeterminate: disabledArg,
    showStopIndicator: disabledArg,
    value: disabledArg,
    max: disabledArg,
  },
};

export const Circular: Story = {
  render: () => {
    return (
      <div
        style={{
          color: "#6750A4",
          display: "flex",
          gap: "24px",
          alignItems: "center",
        }}
      >
        <ProgressIndicator variant="circular" value={40} max={100} />
        <ProgressIndicator variant="circular" indeterminate />
      </div>
    );
  },
  argTypes: {
    indeterminate: disabledArg,
    showStopIndicator: disabledArg,
    value: disabledArg,
    max: disabledArg,
  },
};
