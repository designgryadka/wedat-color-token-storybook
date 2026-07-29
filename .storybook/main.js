/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.js"],
  framework: {
    name: "@storybook/html-vite",
    options: {}
  },
  docs: { autodocs: false }
};

export default config;
