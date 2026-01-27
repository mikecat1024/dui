import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { useArgs } from "storybook/preview-api";

import Checkbox from "md3/components/checkbox/Checkbox";

type CheckboxStoryArgs = ComponentProps<typeof Checkbox> & {
  "data-invalid"?: boolean;
};

const meta = {
  title: "MD3/Checkbox",
  component: Checkbox,
  args: {
    checked: false,
    indeterminate: false,
    disabled: false,
  },
  argTypes: {
    onCheckedChange: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  render: (args: CheckboxStoryArgs) => {
    const [{ checked = false, indeterminate = false }, updateArgs] = useArgs<CheckboxStoryArgs>();
    const { ...props } = args;
    const checkboxId = "storybook-checkbox";

    return (
      <Checkbox
        {...props}
        id={checkboxId}
        checked={checked}
        indeterminate={indeterminate}
        onCheckedChange={(nextChecked) =>
          updateArgs({ checked: nextChecked, indeterminate: false })
        }
      />
    );
  },
} satisfies Meta<CheckboxStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
