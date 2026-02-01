import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import Chip from "md3/components/chips/Chip";
import { chip } from "md3/components/chips/token";
import CancelIcon from "md3/icons/cancel";
import EditIcon from "md3/icons/edit";

type ChipStoryArgs = Omit<
  ComponentProps<typeof Chip>,
  "leadingIcon" | "trailingIcon" | "data-dragged"
> & {
  leadingIcon?: boolean;
  trailingIcon?: boolean;
  dragged?: boolean;
};

const disabledArg = {
  control: false,
  table: {
    disable: true,
  },
} as const;

const meta: Meta<ChipStoryArgs> = {
  title: "MD3/Chip",
  args: {
    children: "",
    variant: "assist",
    elevated: false,
    dragged: false,
    disabled: false,
    leadingIcon: false,
    trailingIcon: false,
  },
  argTypes: {
    variant: disabledArg,
    leadingIcon: {
      control: "boolean",
    },
    trailingIcon: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<ChipStoryArgs>;

export const Assist: Story = {
  render: (args: ChipStoryArgs) => {
    const { leadingIcon, trailingIcon: _, dragged, children, ...props } = args;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <Chip
          {...props}
          variant="assist"
          elevated={false}
          data-dragged={dragged ?? false}
          leadingIcon={leadingIcon ? <EditIcon size={chip.assist.withIcon.icon.size} /> : undefined}
        >
          {children || "Assist chip"}
        </Chip>
        <Chip
          {...props}
          variant="assist"
          elevated={true}
          data-dragged={dragged ?? false}
          leadingIcon={leadingIcon ? <EditIcon size={chip.assist.withIcon.icon.size} /> : undefined}
        >
          {children || "Elevated assist chip"}
        </Chip>
      </div>
    );
  },
  argTypes: {
    variant: disabledArg,
    elevated: disabledArg,
    trailingIcon: disabledArg,
  },
};

export const Filter: Story = {
  render: (args: ChipStoryArgs) => {
    const { leadingIcon, trailingIcon, dragged, children, ...props } = args;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <Chip
          {...props}
          variant="filter"
          elevated={false}
          data-dragged={dragged ?? false}
          leadingIcon={leadingIcon ? <EditIcon size={chip.filter.withIcon.icon.size} /> : undefined}
          trailingIcon={
            trailingIcon ? <CancelIcon size={chip.filter.withIcon.icon.size} /> : undefined
          }
        >
          {children || "Filter chip"}
        </Chip>
        <Chip
          {...props}
          variant="filter"
          elevated
          data-dragged={dragged ?? false}
          leadingIcon={leadingIcon ? <EditIcon size={chip.filter.withIcon.icon.size} /> : undefined}
          trailingIcon={
            trailingIcon ? <CancelIcon size={chip.filter.withIcon.icon.size} /> : undefined
          }
        >
          {children || "Elevated filter chip"}
        </Chip>
      </div>
    );
  },
  argTypes: {
    variant: disabledArg,
    elevated: disabledArg,
  },
};

export const Input: Story = {
  render: (args: ChipStoryArgs) => {
    const { leadingIcon, trailingIcon: _, dragged, children, ...props } = args;

    return (
      <Chip
        {...props}
        variant="input"
        elevated={false}
        data-dragged={dragged ?? false}
        leadingIcon={
          leadingIcon ? <EditIcon size={chip.input.withLeadingIcon.leadingIcon.size} /> : undefined
        }
        trailingIcon={<CancelIcon size={chip.input.withTrailingIcon.trailingIcon.size} />}
      >
        {children || "Input chip"}
      </Chip>
    );
  },
  argTypes: {
    variant: disabledArg,
    elevated: disabledArg,
    trailingIcon: disabledArg,
  },
};

export const Suggestion: Story = {
  render: (args: ChipStoryArgs) => {
    const { leadingIcon, trailingIcon: _, dragged, children, ...props } = args;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
        }}
      >
        <Chip
          {...props}
          variant="suggestion"
          elevated={false}
          data-dragged={dragged ?? false}
          leadingIcon={
            leadingIcon ? (
              <EditIcon size={chip.suggestion.withLeadingIcon.leadingIcon.size} />
            ) : undefined
          }
        >
          {children || "Suggestion chip"}
        </Chip>
        <Chip
          {...props}
          variant="suggestion"
          elevated
          data-dragged={dragged ?? false}
          leadingIcon={
            leadingIcon ? (
              <EditIcon size={chip.suggestion.withLeadingIcon.leadingIcon.size} />
            ) : undefined
          }
        >
          {children || "Elevated suggestion chip"}
        </Chip>
      </div>
    );
  },
  argTypes: {
    variant: disabledArg,
    elevated: disabledArg,
    trailingIcon: disabledArg,
  },
};
