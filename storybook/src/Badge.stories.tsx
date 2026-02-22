import type { Meta, StoryObj } from "@storybook/react";
import Badge from "md3/components/badges/Badge";
import IconButton from "md3/components/icon-buttons/IconButton";
import SearchIcon from "md3/icons/search";
import { iconButton } from "md3/theme/token";

const meta = {
  title: "MD3/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: false,
      table: {
        disable: true,
      },
    },
    children: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

const attributes = {
  iconSize: iconButton.small.icon.size,
};

export const Default: Story = {
  render: () => {
    return (
      <div style={{ display: "grid", alignItems: "center", gap: "16px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
          <Badge variant="small" />
          <Badge variant="large" badgeContent={1} />
          <Badge variant="large" badgeContent={8} />
          <Badge variant="large" badgeContent={999} />
          <Badge variant="large" badgeContent={1000} />
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "20px" }}>
          <Badge variant="small">
            <SearchIcon size={attributes.iconSize} />
          </Badge>
          <Badge variant="large" badgeContent={1}>
            <SearchIcon size={attributes.iconSize} />
          </Badge>
          <Badge variant="large" badgeContent={23}>
            <SearchIcon size={attributes.iconSize} />
          </Badge>
          <Badge variant="large" badgeContent={1000}>
            <SearchIcon size={attributes.iconSize} />
          </Badge>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "20px" }}>
          <IconButton variant="standard" aria-label="Edit">
            <Badge variant="small">
              <SearchIcon />
            </Badge>
          </IconButton>
          <IconButton variant="standard" aria-label="Edit">
            <Badge variant="large" badgeContent={1}>
              <SearchIcon />
            </Badge>
          </IconButton>
          <IconButton variant="standard" aria-label="Edit">
            <Badge variant="large" badgeContent={23}>
              <SearchIcon />
            </Badge>
          </IconButton>
          <IconButton variant="standard" aria-label="Edit">
            <Badge variant="large" badgeContent={1000}>
              <SearchIcon />
            </Badge>
          </IconButton>
        </div>
      </div>
    );
  },
};
