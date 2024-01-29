import { Meta, StoryObj } from '@storybook/react';

import { PtnImage } from './PtnImage';

export default {
  title: 'Core/PtnImage',
  component: PtnImage,
} as Meta<typeof PtnImage>;
type Story = StoryObj<typeof PtnImage>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/536/354',
  },
};
