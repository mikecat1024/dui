import type { Meta, StoryObj } from "@storybook/react";

import EditIcon from "md3/icons/edit";
import Tabs from "md3/components/tabs/Tabs";
import { tabsToken } from "md3/theme/token";

interface TabsStoryArgs {
  variant: "primary" | "secondary";
  withIcon: boolean;
}

const variantControl = {
  control: false,
  table: {
    disable: true,
  },
} as const;

const meta = {
  title: "MD3/Tabs",
  args: {
    variant: "primary",
    withIcon: false,
  },
  argTypes: {
    withIcon: {
      control: "boolean",
    },
  },
  render: (args: TabsStoryArgs) => {
    const iconSize =
      args.variant === "primary"
        ? tabsToken.primary.withIcon.icon.size
        : tabsToken.secondary.withIcon.icon.size;
    const icon = args.withIcon ? <EditIcon size={iconSize} /> : undefined;

    return (
      <div style={{ maxWidth: "360px" }}>
        <Tabs.Root defaultValue="overview">
          <Tabs.List variant={args.variant}>
            <Tabs.Tab value="overview" icon={icon}>
              Overview
            </Tabs.Tab>
            <Tabs.Tab value="analytics" icon={icon}>
              Analytics
            </Tabs.Tab>
            <Tabs.Tab value="settings" icon={icon}>
              Settings
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="overview">Overview content</Tabs.Panel>
          <Tabs.Panel value="analytics">Analytics content</Tabs.Panel>
          <Tabs.Panel value="settings">Settings content</Tabs.Panel>
        </Tabs.Root>
      </div>
    );
  },
} satisfies Meta<TabsStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  argTypes: {
    variant: variantControl,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  argTypes: {
    variant: variantControl,
  },
};
