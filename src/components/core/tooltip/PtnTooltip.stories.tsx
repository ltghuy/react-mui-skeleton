import { Meta, StoryObj } from '@storybook/react';

import { PtnIcon } from '../icon/PtnIcon';
import { PtnIconButton } from '../icon-button/PtnIconButton';

import { PtnTooltip } from './PtnTooltip';

export default {
  title: 'Core/PtnTooltip',
  component: PtnTooltip,
} as Meta<typeof PtnTooltip>;
type Story = StoryObj<typeof PtnTooltip>;

export const Default: Story = {
  args: {
    title: 'Tooltip',
    children: (
      <PtnIconButton>
        <PtnIcon icon='fe:heart' />
      </PtnIconButton>
    ),
  },
};

export const Arrow: Story = {
  args: {
    title: 'Arrow tooltip',
    arrow: true,
    children: (
      <PtnIconButton>
        <PtnIcon icon='fe:heart' />
      </PtnIconButton>
    ),
  },
};

export const Placement: Story = {
  args: {
    title: 'Left tooltip',
    placement: 'left',
    arrow: true,
    children: (
      <PtnIconButton>
        <PtnIcon icon='fe:heart' />
      </PtnIconButton>
    ),
  },
};
