import type { Preview } from "@storybook/react";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { light } from "md3/theme/theme.css.js";

function StoryThemeWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.body.classList.add(light);
    return () => {
      document.body.classList.remove(light);
    };
  }, []);

  return <div className={light}>{children}</div>;
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <StoryThemeWrapper>
        <Story />
      </StoryThemeWrapper>
    ),
  ],
};

export default preview;
