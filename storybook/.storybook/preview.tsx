import type { Preview } from "@storybook/react";
import { light } from "md3/theme/theme.css.js";

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
      <div className={light}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
