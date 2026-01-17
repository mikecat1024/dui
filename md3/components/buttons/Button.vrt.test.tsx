import { createRoot } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { page, userEvent } from "vitest/browser";

import EditIcon from "../../icons/edit.js";
import Button from "./Button.js";

const variants = ["filled", "elevated", "tonal", "outlined", "text"] as const;
const states = ["enabled", "hovered", "focused", "pressed", "disabled"] as const;
const iconOptions = ["no-icon", "with-icon"] as const;

type State = (typeof states)[number];

interface StateActionContext {
  user: ReturnType<typeof userEvent.setup>;
  button: ReturnType<typeof page.getByRole>;
}

const stateActions: Record<State, (context: StateActionContext) => Promise<void>> = {
  enabled: async () => undefined,
  hovered: async ({ user, button }) => {
    await user.hover(button);
  },
  focused: async ({ user }) => {
    await user.keyboard("{Tab}");
  },
  pressed: async ({ user }) => {
    await user.keyboard("{Tab}");
    await user.keyboard("{Space>}");
  },
  disabled: async () => undefined,
};

const vrtSelector = '[data-vrt-root="true"]';

beforeEach(() => {
  const container = document.createElement("div");
  container.setAttribute("data-vrt-root", "true");
  document.body.appendChild(container);
});

afterEach(() => {
  document.querySelectorAll(vrtSelector).forEach((node) => {
    node.remove();
  });
});

describe("Button VRT", () => {
  for (const variant of variants) {
    for (const state of states) {
      for (const iconOption of iconOptions) {
        test(`${variant} ${state} ${iconOption}`, async () => {
          const container = document.querySelector(vrtSelector);

          if (!container) {
            throw new Error("Expected VRT container to be initialized.");
          }

          const root = createRoot(container);
          const hasIcon = iconOption === "with-icon";
          root.render(
            <Button variant={variant} disabled={state === "disabled"}>
              {hasIcon && <EditIcon />}
              Button
            </Button>,
          );

          const button = page.getByRole("button", { name: "Button" });
          await expect.element(button).toBeVisible();

          const user = userEvent.setup();
          try {
            await stateActions[state]({ user, button });
            await expect(button).toMatchScreenshot(`button-${variant}-${state}-${iconOption}`);
          } finally {
            await user.cleanup();
            root.unmount();
          }
        });
      }
    }
  }
});
