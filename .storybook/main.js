import vue from '@vitejs/plugin-vue';
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  async viteFinal(config) {
    config.plugins.push(vue());

    // Add PostCSS for Tailwind
    config.css = {
      postcss: {
        plugins: [
          tailwindcss(),
          autoprefixer(),
        ],
      },
    };

    return config;
  },
};

export default config;
