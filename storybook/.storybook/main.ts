import path from "node:path";
import { fileURLToPath } from "node:url";

import type { StorybookConfig } from "@storybook/react-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: ["storybook-addon-pseudo-states"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.dedupe = ["react", "react-dom"];
    const md3Alias = path.resolve(__dirname, "../../md3");
    const alias = config.resolve.alias;
    if (Array.isArray(alias)) {
      config.resolve.alias = [...alias, { find: "md3", replacement: md3Alias }];
    } else {
      const aliasObject = alias ?? {};
      config.resolve.alias = Object.assign({}, aliasObject, { md3: md3Alias });
    }
    config.server = config.server ?? {};
    config.server.fs = config.server.fs ?? {};
    config.server.fs.allow = [".."];
    config.plugins = config.plugins ?? [];
    config.plugins.unshift(vanillaExtractPlugin());
    return config;
  },
};

export default config;
