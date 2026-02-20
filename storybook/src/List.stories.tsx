import type { Meta, StoryObj } from "@storybook/react";

import List from "md3/components/lists/List";
import { listToken } from "md3/theme/token";
import EditIcon from "md3/icons/edit";
import SearchIcon from "md3/icons/search";

interface ListStoryArgs {
  disabled: boolean;
  selected: boolean;
}

const meta = {
  title: "MD3/List",
  args: {
    disabled: false,
    selected: true,
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    selected: {
      control: "boolean",
    },
  },
  render: (args: ListStoryArgs) => {
    const { disabled, selected } = args;

    return (
      <List.Root>
        <List.Item
          line="oneLine"
          leadingIcon={<SearchIcon size={listToken.listItem.leadingIcon.size} />}
          trailingIcon={<EditIcon size={listToken.listItem.trailingIcon.size} />}
        >
          Inbox
        </List.Item>
        <List.Divider variant="inset" />
        <List.Item
          line="twoLine"
          supportingText="Supporting text"
          trailingSupportingText="9:41"
          trailingIcon={<EditIcon size={listToken.listItem.trailingIcon.size} />}
        >
          Two-line item
        </List.Item>
        <List.Item
          line="threeLine"
          selected={selected}
          supportingText={
            <>
              Three-line supporting text, first row.
              <br />
              Second row to make this item render as three lines.
            </>
          }
          leadingAvatar="A"
          trailingIcon={<EditIcon size={listToken.listItem.trailingIcon.size} />}
        >
          Three-line item
        </List.Item>
        <List.Item
          line="twoLine"
          disabled={disabled}
          supportingText="Disabled supporting text"
          leadingIcon={<SearchIcon size={listToken.listItem.leadingIcon.size} />}
        >
          Disabled item
        </List.Item>
      </List.Root>
    );
  },
} satisfies Meta<ListStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
