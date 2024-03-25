import { Meta, StoryObj } from '@storybook/react';
import { PtnIcon } from '../icon/PtnIcon';
import { PtnButton } from './PtnButton';

export default {
  title: 'Core/PtnButton',
  component: PtnButton,
} as Meta<typeof PtnButton>;

type Story = StoryObj<typeof PtnButton>;

export const Contained: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
  },
};

export const Text: Story = {
  args: {
    children: 'Button',
    variant: 'text',
    color: 'primary',
    size: 'medium',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outlined',
    color: 'primary',
    size: 'medium',
  },
};

export const StartIcon: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    color: 'primary',
    size: 'medium',
    startIcon: <PtnIcon icon='fe:arrow-up' />,
  },
};

export const EndIcon: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    color: 'primary',
    size: 'medium',
    endIcon: <PtnIcon icon='fe:arrow-up' />,
  },
};
