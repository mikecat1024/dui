import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { useArgs } from "storybook/preview-api";

import RadioButtons from "md3/components/ratio-buttons/RadioButtons";

type RadioButtonsStoryArgs = ComponentProps<typeof RadioButtons.Root>;

const meta: Meta<RadioButtonsStoryArgs> = {
  title: "MD3/RadioButtons",
  component: RadioButtons.Root,
  render: () => {
    const [{ disabled = false, value = "one" }, updateArgs] = useArgs<RadioButtonsStoryArgs>();

    return (
      <RadioButtons.Root
        value={value}
        disabled={disabled}
        onValueChange={(nextValue) => updateArgs({ value: String(nextValue) })}
        style={{ display: "inline-flex", gap: "8px" }}
      >
        <RadioButtons.Item value="one" aria-label="one" />
        <RadioButtons.Item value="two" aria-label="two" />
        <RadioButtons.Item value="three" aria-label="three" />
      </RadioButtons.Root>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
