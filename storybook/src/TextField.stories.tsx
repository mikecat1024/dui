import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import TextField from "md3/components/text-fields/TextField";
import { filledTextField, outlinedTextField } from "md3/components/text-fields/token";
import CancelIcon from "md3/icons/cancel";
import SearchIcon from "md3/icons/search";

type TextFieldStoryArgs = ComponentProps<typeof TextField> & {
  label: string;
  placeholder: string;
  multiline: boolean;
};

const disabledArg = {
  control: false,
  table: {
    disable: true,
  },
} as const;

const renderTextField = (args: TextFieldStoryArgs) => {
  const {
    label,
    leadingIcon,
    trailingIcon,
    placeholder,
    multiline,
    variant = "filled",
    ...props
  } = args;
  const textFieldToken = variant === "outlined" ? outlinedTextField : filledTextField;

  return (
    <TextField
      variant={variant}
      multiline={multiline}
      label={label}
      slotProps={{
        control: { placeholder },
      }}
      leadingIcon={leadingIcon ? <SearchIcon size={textFieldToken.leadingIcon.size} /> : undefined}
      // TODO: Make this icon IconButton
      trailingIcon={
        trailingIcon ? <CancelIcon size={textFieldToken.trailingIcon.size} /> : undefined
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
    multiline: {
      control: "boolean",
    },
  },
  render: (args: TextFieldStoryArgs) => renderTextField(args),
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
