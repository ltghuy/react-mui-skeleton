import { Meta, StoryObj } from '@storybook/react';

import { PtnCircularProgress } from './PtnCircularProgress';

export default {
  title: 'Core/PtnCircularProgress',
  component: PtnCircularProgress,
} as Meta<typeof PtnCircularProgress>;
type Story = StoryObj<typeof PtnCircularProgress>;

export const Default: Story = {
  args: {},
};

export const Colors: Story = {
  args: {
    color: 'primary',
  },
};
