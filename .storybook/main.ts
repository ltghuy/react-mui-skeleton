import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const MUI_PACKAGE_REGEX = /node_modules\/(?!@mui)/;

export const framework = '@storybook/react';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  managerHead: head => `
    ${head}
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  `,
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // Speeds up storybook build time
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // Makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // Makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @mui packages
      propFilter: prop =>
        prop.parent ? !MUI_PACKAGE_REGEX.test(prop.parent.fileName) : true,
    },
  },
  async viteFinal(config) {
    return mergeConfig(config, {});
  },
};
export default config;
