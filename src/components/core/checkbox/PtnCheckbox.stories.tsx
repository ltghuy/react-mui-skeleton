import { Meta, StoryObj } from '@storybook/react';

import { PtnCheckbox } from './PtnCheckbox';

export default {
  title: 'Core/PtnCheckbox',
  component: PtnCheckbox,
} as Meta<typeof PtnCheckbox>;
type Story = StoryObj<typeof PtnCheckbox>;

export const Default: Story = {
  args: {
    checked: true,
    color: 'primary',
  },
};

export const Colors: Story = {
  args: {
    checked: true,
    color: 'success',
  },
};
