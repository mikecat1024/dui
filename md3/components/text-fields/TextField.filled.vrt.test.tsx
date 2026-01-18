import { createRoot } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { page, userEvent } from "vitest/browser";

import CancelIcon from "../../icons/cancel.js";
import SearchIcon from "../../icons/search.js";
import { light } from "../../theme/theme.css.js";
import TextField from "./TextField.js";
import { filledTextField } from "./token.js";

const states = ["enabled", "hovered", "focused", "disabled"] as const;
const multilineOptions = ["multiline", "singleline"] as const;
const validityOptions = ["valid", "invalid"] as const;
const leadingIconOptions = ["no-leading-icon", "leading-icon"] as const;
const trailingIconOptions = ["no-trailing-icon", "trailing-icon"] as const;
const prefixTextOptions = ["no-prefix", "prefix"] as const;
const suffixTextOptions = ["no-suffix", "suffix"] as const;
const supportingTextOptions = ["no-supporting-text", "supporting-text"] as const;

type State = (typeof states)[number];

interface StateActionContext {
  user: ReturnType<typeof userEvent.setup>;
  input: ReturnType<typeof page.getByRole>;
}

const stateActions: Record<State, (context: StateActionContext) => Promise<void>> = {
  enabled: async () => undefined,
  hovered: async ({ user, input }) => {
    await user.hover(input);
  },
  focused: async ({ user, input }) => {
    await user.click(input);
  },
  disabled: async () => undefined,
};

const vrtSelector = '[data-vrt-root="true"]';

const label = "Label";
const rootLabel = "TextField Root";
const placeholder = "Placeholder";
const defaultValue = "Value";
const prefixValue = "Prefix";
const suffixValue = "Suffix";
const supportingValue = "Supporting text";

beforeEach(() => {
  const container = document.createElement("div");
  container.setAttribute("data-vrt-root", "true");
  container.setAttribute("role", "group");
  container.setAttribute("aria-label", rootLabel);
  container.classList.add(light);
  document.body.appendChild(container);
});

afterEach(() => {
  document.querySelectorAll(vrtSelector).forEach((node) => {
    node.remove();
  });
});

describe("TextField VRT (filled)", () => {
  for (const multilineOption of multilineOptions) {
    for (const state of states) {
      for (const validity of validityOptions) {
        for (const leadingIconOption of leadingIconOptions) {
          for (const trailingIconOption of trailingIconOptions) {
            for (const prefixTextOption of prefixTextOptions) {
              for (const suffixTextOption of suffixTextOptions) {
                for (const supportingTextOption of supportingTextOptions) {
                  test(`${multilineOption} ${state} ${validity} ${leadingIconOption} ${trailingIconOption} ${prefixTextOption} ${suffixTextOption} ${supportingTextOption}`, async () => {
                    const container = document.querySelector(vrtSelector);

                    if (!container) {
                      throw new Error("Expected VRT container to be initialized.");
                    }

                    const root = createRoot(container);
                    const hasLeadingIcon = leadingIconOption === "leading-icon";
                    const hasTrailingIcon = trailingIconOption === "trailing-icon";
                    const hasPrefixText = prefixTextOption === "prefix";
                    const hasSuffixText = suffixTextOption === "suffix";
                    const hasSupportingText = supportingTextOption === "supporting-text";
                    const multiline = multilineOption === "multiline";

                    const textFieldProps = {
                      variant: "filled" as const,
                      multiline,
                      disabled: state === "disabled",
                      invalid: validity === "invalid",
                      label,
                      slotProps: {
                        control: { placeholder, defaultValue },
                      },
                      ...(hasLeadingIcon
                        ? { leadingIcon: <SearchIcon size={filledTextField.leadingIcon.size} /> }
                        : {}),
                      ...(hasTrailingIcon
                        ? {
                            trailingIcon: <CancelIcon size={filledTextField.trailingIcon.size} />,
                          }
                        : {}),
                      ...(hasPrefixText ? { prefixText: prefixValue } : {}),
                      ...(hasSuffixText ? { suffixText: suffixValue } : {}),
                      ...(hasSupportingText ? { supportingText: supportingValue } : {}),
                    };

                    root.render(<TextField {...textFieldProps} />);

                    const input = page.getByRole("textbox", { name: label });
                    await expect.element(input).toBeVisible();

                    const fieldRoot = page.getByRole("group", { name: rootLabel });
                    await expect.element(fieldRoot).toBeVisible();

                    const user = userEvent.setup();
                    try {
                      await stateActions[state]({ user, input });
                      await expect
                        .element(fieldRoot)
                        .toMatchScreenshot(
                          `text-field-filled-${multilineOption}-${state}-${validity}-${leadingIconOption}-${trailingIconOption}-${prefixTextOption}-${suffixTextOption}-${supportingTextOption}`,
                        );
                    } finally {
                      await user.cleanup();
                      root.unmount();
                    }
                  });
                }
              }
            }
          }
        }
      }
    }
  }
});
