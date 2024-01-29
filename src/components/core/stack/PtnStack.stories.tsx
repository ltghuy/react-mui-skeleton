import { Meta, StoryObj } from '@storybook/react';

import { PtnPaper } from '../paper/PtnPaper';

import { PtnStack } from './PtnStack';

export default {
  title: 'Core/PtnStack',
  component: PtnStack,
  args: {
    children: (
      <>
        <PtnPaper
          sx={{
            width: '100px',
            height: '100px',
          }}
        />
        <PtnPaper
          sx={{
            width: '100px',
            height: '100px',
          }}
        />
      </>
    ),
  },
} as Meta<typeof PtnStack>;
type Story = StoryObj<typeof PtnStack>;

export const Row: Story = {
  args: {
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    spacing: 2,
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    spacing: 2,
  },
};
