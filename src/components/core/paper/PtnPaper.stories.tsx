import { Meta, StoryObj } from '@storybook/react';

import { PtnPaper } from './PtnPaper';

export default {
  title: 'Core/PtnPaper',
  component: PtnPaper,
  args: {
    sx: { height: '100px', width: '100px' },
  },
} as Meta<typeof PtnPaper>;
type Story = StoryObj<typeof PtnPaper>;

export const Elevation: Story = {
  args: {
    elevation: 5,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Square: Story = {
  args: { variant: 'outlined', square: true },
};
