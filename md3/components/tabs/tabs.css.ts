import { createVar, globalStyle, style } from "@vanilla-extract/css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";

import { shadowColor } from "../../theme/theme.css.js";
import { tabsToken } from "../../theme/token.js";

const disabled = "[data-disabled]";
const enabled = `:not(${disabled})`;
const active = "[data-active]";
const inactive = `:not(${active})`;
const withIcon = '[data-with-icon="true"]';

const hoveredActive = `&:hover${enabled}${active}`;
const hoveredInactive = `&:hover${enabled}${inactive}`;
const focusedActive = `&:focus-visible${enabled}${active}`;
const focusedInactive = `&:focus-visible${enabled}${inactive}`;
const pressedActive = `&:active${enabled}${active}`;
const pressedInactive = `&:active${enabled}${inactive}`;

const listContainerColor = createVar();
const listContainerShape = createVar();
const listContainerHeight = createVar();
const listContainerElevation = createVar();

const tabContainerHeight = createVar();
const tabLabelTextColor = createVar();
const tabIconColor = createVar();
const tabIconSize = createVar();
const tabStateLayerColor = createVar();
const tabStateLayerOpacity = createVar();
const tabLabelTextFontFamily = createVar();
const tabLabelTextLineHeight = createVar();
const tabLabelTextFontSize = createVar();
const tabLabelTextFontWeight = createVar();
const tabLabelTextLetterSpacing = createVar();
const tabWithIconGap = createVar();

const attributes = {
  list: {
    containerPadding: "0",
  },
  tab: {
    horizontalPadding: "16px",
    primaryWithIconGap: "8px",
    secondaryWithIconGap: "8px",
  },
  indicator: {
    transitionDuration: "250ms",
    transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)",
  },
  panel: {
    topPadding: "16px",
  },
} as const;

export const tabsListStyle = recipe({
  base: {
    boxSizing: "border-box",
    position: "relative",
    display: "inline-flex",
    alignItems: "stretch",
    border: "none",
    borderRadius: listContainerShape,
    boxShadow: listContainerElevation,
    backgroundColor: listContainerColor,
    padding: attributes.list.containerPadding,
    minHeight: listContainerHeight,
    vars: {
      [listContainerColor]: tabsToken.primary.container.color,
      [listContainerShape]: tabsToken.primary.container.shape,
      [listContainerHeight]: tabsToken.primary.container.height,
      [listContainerElevation]: tabsToken.primary.container.elevation,
    },
  },
  variants: {
    variant: {
      primary: {
        vars: {
          [listContainerColor]: tabsToken.primary.container.color,
          [listContainerShape]: tabsToken.primary.container.shape,
          [listContainerHeight]: tabsToken.primary.container.height,
          [listContainerElevation]: tabsToken.primary.container.elevation,
        },
      },
      secondary: {
        vars: {
          [listContainerColor]: tabsToken.secondary.container.color,
          [listContainerShape]: tabsToken.secondary.container.shape,
          [listContainerHeight]: tabsToken.secondary.container.height,
          [listContainerElevation]: tabsToken.secondary.container.elevation,
          [shadowColor]: tabsToken.secondary.container.shadowColor,
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const tabsListIndicatorStyle = recipe({
  base: {
    boxSizing: "border-box",
    position: "absolute",
    bottom: 0,
    left: "var(--active-tab-left)",
    transition: `left ${attributes.indicator.transitionDuration} ${attributes.indicator.transitionTimingFunction}, width ${attributes.indicator.transitionDuration} ${attributes.indicator.transitionTimingFunction}`,
    pointerEvents: "none",
  },
  variants: {
    variant: {
      primary: {
        left: `calc(var(--active-tab-left) + ${attributes.tab.horizontalPadding})`,
        borderRadius: tabsToken.primary.activeIndicator.shape,
        backgroundColor: tabsToken.primary.activeIndicator.color,
        width: `max(0px, calc(var(--active-tab-width) - (${attributes.tab.horizontalPadding} * 2)))`,
        height: tabsToken.primary.activeIndicator.height,
      },
      secondary: {
        borderRadius: "0",
        backgroundColor: tabsToken.secondary.activeIndicator.color,
        width: "var(--active-tab-width)",
        height: tabsToken.secondary.activeIndicator.height,
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const tabsTabStyle = recipe({
  base: {
    boxSizing: "border-box",
    position: "relative",
    zIndex: 0,
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: tabWithIconGap,
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    paddingRight: attributes.tab.horizontalPadding,
    paddingLeft: attributes.tab.horizontalPadding,
    height: tabContainerHeight,
    lineHeight: tabLabelTextLineHeight,
    letterSpacing: tabLabelTextLetterSpacing,
    color: tabLabelTextColor,
    fontFamily: tabLabelTextFontFamily,
    fontSize: tabLabelTextFontSize,
    fontWeight: tabLabelTextFontWeight,
    selectors: {
      "&::before": {
        boxSizing: "border-box",
        position: "absolute",
        inset: 0,
        opacity: tabStateLayerOpacity,
        borderRadius: "inherit",
        backgroundColor: tabStateLayerColor,
        pointerEvents: "none",
        content: "",
      },
      [`&${disabled}`]: {
        cursor: "not-allowed",
        vars: {
          [tabStateLayerOpacity]: "0",
        },
      },
    },
  },
  variants: {
    variant: {
      primary: {
        vars: {
          [tabContainerHeight]: tabsToken.primary.container.height,
          [tabLabelTextColor]: tabsToken.primary.withLabelText.inactive.labelText.color,
          [tabIconColor]: tabsToken.primary.withIcon.inactive.icon.color,
          [tabIconSize]: tabsToken.primary.withIcon.icon.size,
          [tabStateLayerColor]: "transparent",
          [tabStateLayerOpacity]: "0",
          [tabLabelTextFontFamily]: tabsToken.primary.withLabelText.labelText.fontFamily,
          [tabLabelTextLineHeight]: tabsToken.primary.withLabelText.labelText.lineHeight,
          [tabLabelTextFontSize]: tabsToken.primary.withLabelText.labelText.fontSize,
          [tabLabelTextFontWeight]: tabsToken.primary.withLabelText.labelText.fontWeight,
          [tabLabelTextLetterSpacing]: tabsToken.primary.withLabelText.labelText.letterSpacing,
          [tabWithIconGap]: attributes.tab.primaryWithIconGap,
        },
        selectors: {
          [`&${active}`]: {
            vars: {
              [tabLabelTextColor]: tabsToken.primary.withLabelText.active.labelText.color,
              [tabIconColor]: tabsToken.primary.withIcon.active.icon.color,
            },
          },
          [`&${withIcon}`]: {
            flexDirection: "column",
            vars: {
              [tabContainerHeight]: tabsToken.primary.withIconAndLabelText.container.height,
            },
          },
          [hoveredActive]: {
            vars: {
              [tabLabelTextColor]: tabsToken.primary.withLabelText.active.hover.labelText.color,
              [tabIconColor]: tabsToken.primary.withIcon.active.hover.icon.color,
              [tabStateLayerColor]: tabsToken.primary.active.hover.stateLayer.color,
              [tabStateLayerOpacity]: tabsToken.primary.active.hover.stateLayer.opacity,
            },
          },
          [hoveredInactive]: {
            vars: {
              [tabLabelTextColor]: tabsToken.primary.withLabelText.inactive.hover.labelText.color,
              [tabIconColor]: tabsToken.primary.withIcon.inactive.hover.icon.color,
              [tabStateLayerColor]: tabsToken.primary.inactive.hover.stateLayer.color,
              [tabStateLayerOpacity]: tabsToken.primary.inactive.hover.stateLayer.opacity,
            },
          },
          [focusedActive]: {
            outline: `${tabsToken.primary.focusIndicator.thickness} solid ${tabsToken.primary.focusIndicator.color}`,
            outlineOffset: tabsToken.primary.focusIndicator.outlineOffset,
            vars: {
              [tabLabelTextColor]: tabsToken.primary.withLabelText.active.focus.labelText.color,
              [tabIconColor]: tabsToken.primary.withIcon.active.focus.icon.color,
              [tabStateLayerColor]: tabsToken.primary.active.focus.stateLayer.color,
              [tabStateLayerOpacity]: tabsToken.primary.active.focus.stateLayer.opacity,
            },
          },
          [focusedInactive]: {
            outline: `${tabsToken.primary.focusIndicator.thickness} solid ${tabsToken.primary.focusIndicator.color}`,
            outlineOffset: tabsToken.primary.focusIndicator.outlineOffset,
            vars: {
              [tabLabelTextColor]: tabsToken.primary.withLabelText.inactive.focus.labelText.color,
              [tabIconColor]: tabsToken.primary.withIcon.inactive.focus.icon.color,
              [tabStateLayerColor]: tabsToken.primary.inactive.focus.stateLayer.color,
              [tabStateLayerOpacity]: tabsToken.primary.inactive.focus.stateLayer.opacity,
            },
          },
          [pressedActive]: {
            vars: {
              [tabLabelTextColor]: tabsToken.primary.withLabelText.active.pressed.labelText.color,
              [tabIconColor]: tabsToken.primary.withIcon.active.pressed.icon.color,
              [tabStateLayerColor]: tabsToken.primary.active.pressed.stateLayer.color,
              [tabStateLayerOpacity]: tabsToken.primary.active.pressed.stateLayer.opacity,
            },
          },
          [pressedInactive]: {
            vars: {
              [tabLabelTextColor]: tabsToken.primary.withLabelText.inactive.pressed.labelText.color,
              [tabIconColor]: tabsToken.primary.withIcon.inactive.pressed.icon.color,
              [tabStateLayerColor]: tabsToken.primary.inactive.pressed.stateLayer.color,
              [tabStateLayerOpacity]: tabsToken.primary.inactive.pressed.stateLayer.opacity,
            },
          },
        },
      },
      secondary: {
        vars: {
          [tabContainerHeight]: tabsToken.secondary.container.height,
          [tabLabelTextColor]: tabsToken.secondary.labelText.inactive.color,
          [tabIconColor]: tabsToken.secondary.withIcon.inactive.icon.color,
          [tabIconSize]: tabsToken.secondary.withIcon.icon.size,
          [tabStateLayerColor]: "transparent",
          [tabStateLayerOpacity]: "0",
          [tabLabelTextFontFamily]: tabsToken.secondary.labelText.fontFamily,
          [tabLabelTextLineHeight]: tabsToken.secondary.labelText.lineHeight,
          [tabLabelTextFontSize]: tabsToken.secondary.labelText.fontSize,
          [tabLabelTextFontWeight]: tabsToken.secondary.labelText.fontWeight,
          [tabLabelTextLetterSpacing]: tabsToken.secondary.labelText.letterSpacing,
          [tabWithIconGap]: attributes.tab.secondaryWithIconGap,
        },
        selectors: {
          [`&${active}`]: {
            vars: {
              [tabLabelTextColor]: tabsToken.secondary.labelText.active.color,
              [tabIconColor]: tabsToken.secondary.withIcon.active.icon.color,
            },
          },
          [hoveredActive]: {
            vars: {
              [tabLabelTextColor]: tabsToken.secondary.labelText.hover.color,
              [tabIconColor]: tabsToken.secondary.withIcon.hover.icon.color,
              [tabStateLayerColor]: tabsToken.secondary.hover.stateLayer.color,
              [tabStateLayerOpacity]: tabsToken.secondary.hover.stateLayer.opacity,
            },
          },
          [hoveredInactive]: {
            vars: {
              [tabLabelTextColor]: tabsToken.secondary.labelText.hover.color,
              [tabIconColor]: tabsToken.secondary.withIcon.hover.icon.color,
              [tabStateLayerColor]: tabsToken.secondary.hover.stateLayer.color,
              [tabStateLayerOpacity]: tabsToken.secondary.hover.stateLayer.opacity,
            },
          },
          [focusedActive]: {
            outline: `${tabsToken.secondary.focusIndicator.thickness} solid ${tabsToken.secondary.focusIndicator.color}`,
            outlineOffset: tabsToken.secondary.focusIndicator.outlineOffset,
            vars: {
              [tabLabelTextColor]: tabsToken.secondary.labelText.focus.color,
              [tabIconColor]: tabsToken.secondary.withIcon.focus.icon.color,
              [tabStateLayerColor]: tabsToken.secondary.focus.stateLayer.color,
              [tabStateLayerOpacity]: tabsToken.secondary.focus.stateLayer.opacity,
            },
          },
          [focusedInactive]: {
            outline: `${tabsToken.secondary.focusIndicator.thickness} solid ${tabsToken.secondary.focusIndicator.color}`,
            outlineOffset: tabsToken.secondary.focusIndicator.outlineOffset,
            vars: {
              [tabLabelTextColor]: tabsToken.secondary.labelText.focus.color,
              [tabIconColor]: tabsToken.secondary.withIcon.focus.icon.color,
              [tabStateLayerColor]: tabsToken.secondary.focus.stateLayer.color,
              [tabStateLayerOpacity]: tabsToken.secondary.focus.stateLayer.opacity,
            },
          },
          [pressedActive]: {
            vars: {
              [tabLabelTextColor]: tabsToken.secondary.labelText.pressed.color,
              [tabIconColor]: tabsToken.secondary.withIcon.pressed.icon.color,
              [tabStateLayerColor]: tabsToken.secondary.pressed.stateLayer.color,
              [tabStateLayerOpacity]: tabsToken.secondary.pressed.stateLayer.opacity,
            },
          },
          [pressedInactive]: {
            vars: {
              [tabLabelTextColor]: tabsToken.secondary.labelText.pressed.color,
              [tabIconColor]: tabsToken.secondary.withIcon.pressed.icon.color,
              [tabStateLayerColor]: tabsToken.secondary.pressed.stateLayer.color,
              [tabStateLayerOpacity]: tabsToken.secondary.pressed.stateLayer.opacity,
            },
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const tabsTabIconStyle = style({
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: tabIconSize,
  height: tabIconSize,
  color: tabIconColor,
});

globalStyle(`${tabsTabIconStyle} svg`, {
  width: "100%",
  height: "100%",
});

export const tabsTabLabelStyle = style({
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  color: "inherit",
});

export const tabsTabLabelContainerStyle = style({
  boxSizing: "border-box",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
});

export const tabsPanelStyle = style({
  boxSizing: "border-box",
  paddingTop: attributes.panel.topPadding,
});

export type TabsListVariants = RecipeVariants<typeof tabsListStyle>;
export type TabsTabVariants = RecipeVariants<typeof tabsTabStyle>;
