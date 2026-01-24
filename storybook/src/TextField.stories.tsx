import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { useArgs } from "storybook/preview-api";

import IconButton from "md3/components/icon-buttons/IconButton";
import TextField from "md3/components/text-fields/TextField";
import { filledTextField, outlinedTextField } from "md3/components/text-fields/token";
import CancelIcon from "md3/icons/cancel";
import SearchIcon from "md3/icons/search";

type TextFieldStoryArgs = ComponentProps<typeof TextField> & {
  label: string;
  placeholder: string;
  multiline: boolean;
  value: string;
};

const disabledArg = {
  control: false,
  table: {
    disable: true,
  },
} as const;

const renderTextField = (
  args: TextFieldStoryArgs,
  updateArgs: (next: Partial<TextFieldStoryArgs>) => void,
) => {
  const {
    label,
    leadingIcon,
    trailingIcon,
    placeholder,
    multiline,
    variant = "filled",
    value,
    ...props
  } = args;
  const textFieldToken = variant === "outlined" ? outlinedTextField : filledTextField;

  return (
    <TextField
      variant={variant}
      multiline={multiline}
      label={label}
      slotProps={{
        control: {
          placeholder,
          value,
          onChange: (event) => updateArgs({ value: event.currentTarget.value }),
        },
      }}
      leadingIcon={leadingIcon ? <SearchIcon size={textFieldToken.leadingIcon.size} /> : undefined}
      trailingIcon={
        trailingIcon ? (
          <IconButton
            variant="standard"
            aria-label="Clear"
            onClick={() => updateArgs({ value: "" })}
          >
            <CancelIcon size={textFieldToken.trailingIcon.size} />
          </IconButton>
        ) : undefined
      }
      {...props}
    />
  );
};

const meta = {
  title: "MD3/TextField",
  component: TextField,
  args: {
    label: "Label text",
    supportingText: "Supporting text",
    placeholder: "Placeholder",
    prefixText: "",
    suffixText: "",
    value: "",
    disabled: false,
    invalid: false,
    leadingIcon: false,
    trailingIcon: false,
    multiline: false,
    variant: "filled",
  },
  argTypes: {
    variant: disabledArg,
    slotProps: disabledArg,
    leadingIcon: {
      control: "boolean",
    },
    trailingIcon: {
      control: "boolean",
    },
    prefixText: {
      control: "text",
    },
    suffixText: {
      control: "text",
    },
    value: {
      control: "text",
    },
    multiline: {
      control: "boolean",
    },
  },
  render: (args: TextFieldStoryArgs) => {
    const [{ value }, updateArgs] = useArgs<TextFieldStoryArgs>();
    return renderTextField({ ...args, value }, updateArgs);
  },
} satisfies Meta<TextFieldStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: "filled",
    invalid: true,
  },
  argTypes: {
    variant: disabledArg,
    slotProps: disabledArg,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
  argTypes: {
    variant: disabledArg,
    slotProps: disabledArg,
  },
};
