const path = require("path");

module.exports = {
  core: {
    builder: "webpack5",
  },

  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.styl$/,
      use: [
        "style-loader",
        "css-loader",
        "stylus-loader"
      ]
    });

    return config;
  }
};
