import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  test: {
    include: ["components/**/*.vrt.test.tsx"],
    testTimeout: 30000,
    hookTimeout: 30000,
    browser: {
      enabled: true,
      provider: playwright({
        contextOptions: {
          deviceScaleFactor: 2,
        },
      }),
      headless: true,
      expect: {
        toMatchScreenshot: {
          comparatorName: "pixelmatch",
          comparatorOptions: {
            threshold: 0,
            allowedMismatchedPixelRatio: 0,
          },
        },
      },
      instances: [
        {
          browser: "chromium",
          viewport: { width: 800, height: 600 },
        },
      ],
    },
  },
});
