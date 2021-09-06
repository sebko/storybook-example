module.exports = {
  stories: ["../src/**/*.stories.(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-links",
    "@react-theming/storybook-addon",
    "storybook-dark-mode",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
  ],
  typescript: {
    // also valid 'react-docgen-typescript' | false
    reactDocgen: "react-docgen",
  },
};
