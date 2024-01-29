import { Meta, StoryObj } from '@storybook/react';

import { PtnBox } from './PtnBox';

export default {
  title: 'Core/PtnBox',
  component: PtnBox,
} as Meta<typeof PtnBox>;
type Story = StoryObj<typeof PtnBox>;

export const Default: Story = {
  args: {
    width: 100,
    height: 100,
    sx: {
      backgroundColor: 'red',
    },
  },
};
