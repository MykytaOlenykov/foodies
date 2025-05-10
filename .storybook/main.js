import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials", '@storybook/addon-viewport'],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [svgr()],
    });
  },
};
