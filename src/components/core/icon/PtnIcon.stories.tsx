import { Meta, StoryObj } from '@storybook/react';

import { PtnIcon } from './PtnIcon';

export default {
  title: 'Core/PtnIcon',
  component: PtnIcon,
} as Meta<typeof PtnIcon>;
type Story = StoryObj<typeof PtnIcon>;

export const Default: Story = {
  args: {
    icon: 'fe:heart',
  },
};

export const ColorCss: Story = {
  args: {
    icon: 'fe:heart',
    color: 'red',
  },
};

export const ColorPath: Story = {
  args: {
    icon: 'fe:heart',
    color: 'primary.main',
  },
};

export const Size: Story = {
  args: {
    icon: 'fe:heart',
    color: 'primary.main',
    fontSize: 50,
  },
};

export const Animation: Story = {
  args: {
    icon: 'svg-spinners:blocks-wave',
    color: 'primary.main',
    fontSize: 50,
  },
};
