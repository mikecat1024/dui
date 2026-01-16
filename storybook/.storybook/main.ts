import path from "node:path";
import { fileURLToPath } from "node:url";

import type { StorybookConfig } from "@storybook/react-vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    // Allow workspace packages and avoid duplicate React copies.
    config.resolve = config.resolve ?? {};
    config.resolve.dedupe = ["react", "react-dom"];
    config.resolve.alias = {
      ...config.resolve.alias,
      md3: path.resolve(__dirname, "../../md3"),
    };
    config.server = config.server ?? {};
    config.server.fs = config.server.fs ?? {};
    config.server.fs.allow = [".."];
    return config;
  },
};

export default config;
