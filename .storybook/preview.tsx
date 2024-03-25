import type { Preview } from '@storybook/react';
import React from 'react';
import { AppThemeProvider } from '../src/contexts/AppThemeProvider';
import { THEME_NAMES } from '../src/models/core/theme/types';

export const globalTypes = {
  themeName: {
    name: 'Theme',
    title: 'Theme',
    description: 'Theme for your components',
    defaultValue: 'light' as THEME_NAMES,
    toolbar: {
      icon: 'switchalt',
      dynamicTitle: true,
      items: [
        { value: 'light' as THEME_NAMES, left: '☀️', title: 'Light mode' },
        { value: 'dark' as THEME_NAMES, left: '🌙', title: 'Dark mode' },
      ],
    },
  },
};

export const withMuiTheme = (Story, context) => {
  return (
    <AppThemeProvider
      settings={{
        themeName: context.globals.themeName,
        isCustomScrollbar: false,
      }}
    >
      <Story />
    </AppThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    // controls: {
    //   matchers: {
    //     color: /(background)$/i,
    //   },
    // },
  },
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Ptnggered action upon clicking this component',
    },
  },
  decorators: [withMuiTheme],
};

export default preview;
