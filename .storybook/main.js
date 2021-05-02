module.exports = {
  stories: ["../src/**/*.stories.(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@react-theming/storybook-addon",
    "storybook-dark-mode",
    "@storybook/addon-a11y",
  ],
};
