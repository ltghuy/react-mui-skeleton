import { Meta, StoryObj } from '@storybook/react';

import { PtnStack } from '../stack/PtnStack';
import { PtnTypography } from '../typography/PtnTypography';

import { PtnDrawer } from './PtnDrawer';

export default {
  title: 'Core/PtnDrawer',
  component: PtnDrawer,
} as Meta<typeof PtnDrawer>;
type Story = StoryObj<typeof PtnDrawer>;

export const Default: Story = {
  args: {
    open: true,
    variant: 'persistent',
    elevation: 4,
    children: (
      <PtnStack padding={8}>
        <PtnTypography textTransform='uppercase'>Drawer</PtnTypography>
      </PtnStack>
    ),
  },
};
