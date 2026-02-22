import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { createContext, useContext, type ComponentPropsWithoutRef, type ReactNode } from "react";

import { mergeClasses } from "../../utils/utils.js";
import {
  tabsListIndicatorStyle,
  tabsListStyle,
  tabsPanelStyle,
  tabsTabIconStyle,
  tabsTabLabelContainerStyle,
  tabsTabLabelStyle,
  tabsTabStyle,
} from "./tabs.css.js";

type TabsVariant = "primary" | "secondary";

const TabsVariantContext = createContext<TabsVariant>("primary");

type TabsRootProps = ComponentPropsWithoutRef<typeof BaseTabs.Root>;

type TabsListProps = ComponentPropsWithoutRef<typeof BaseTabs.List> & {
  variant?: TabsVariant;
};

interface TabsTabProps extends Omit<ComponentPropsWithoutRef<typeof BaseTabs.Tab>, "children"> {
  children: ReactNode;
  icon?: ReactNode;
}

type TabsPanelProps = ComponentPropsWithoutRef<typeof BaseTabs.Panel>;

function TabsRoot({ children, ...props }: TabsRootProps) {
  return (
    <BaseTabs.Root {...props} data-slot="root">
      {children}
    </BaseTabs.Root>
  );
}

function TabsList({ className, variant = "primary", children, ...props }: TabsListProps) {
  const mergedClassName = mergeClasses([tabsListStyle({ variant }), className]);

  return (
    <TabsVariantContext.Provider value={variant}>
      <BaseTabs.List {...props} className={mergedClassName} data-slot="root">
        {children}
        <BaseTabs.Indicator className={tabsListIndicatorStyle({ variant })} />
      </BaseTabs.List>
    </TabsVariantContext.Provider>
  );
}

function TabsTab({ className, icon, children, ...props }: TabsTabProps) {
  const variant = useContext(TabsVariantContext);
  const mergedClassName = mergeClasses([tabsTabStyle({ variant }), className]);

  return (
    <BaseTabs.Tab
      {...props}
      className={mergedClassName}
      data-with-icon={icon ? "true" : undefined}
      data-variant={variant}
    >
      {icon ? (
        <span className={tabsTabIconStyle} aria-hidden>
          {icon}
        </span>
      ) : null}
      <span className={tabsTabLabelContainerStyle}>
        <span className={tabsTabLabelStyle}>{children}</span>
      </span>
    </BaseTabs.Tab>
  );
}

function TabsPanel({ className, ...props }: TabsPanelProps) {
  const mergedClassName = mergeClasses([tabsPanelStyle, className]);

  return <BaseTabs.Panel {...props} className={mergedClassName} data-slot="root" />;
}

TabsRoot.displayName = "Tabs.Root";
TabsList.displayName = "Tabs.List";
TabsTab.displayName = "Tabs.Tab";
TabsPanel.displayName = "Tabs.Panel";

const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Tab: TabsTab,
  Panel: TabsPanel,
};

export default Tabs;
