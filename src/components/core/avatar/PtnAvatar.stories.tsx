import { Meta, StoryObj } from '@storybook/react';

import { PtnAvatar } from './PtnAvatar';

export default {
  title: 'Core/PtnAvatar',
  component: PtnAvatar,
} as Meta<typeof PtnAvatar>;
type Story = StoryObj<typeof PtnAvatar>;

export const Default: Story = {
  args: {},
};

export const Text: Story = {
  args: {
    children: 'TR',
  },
};

export const Image: Story = {
  args: { children: 'TR', src: 'https://i.pravatar.cc/300' },
};

export const Rounded: Story = {
  args: {
    children: 'TR',
    variant: 'rounded',
    src: 'https://i.pravatar.cc/300',
  },
};
