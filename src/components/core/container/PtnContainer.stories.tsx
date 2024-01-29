import { Meta, StoryObj } from '@storybook/react';

import { PtnPaper } from '../paper/PtnPaper';
import { PtnTypography } from '../typography/PtnTypography';

import { PtnContainer } from './PtnContainer';

export default {
  title: 'Core/PtnContainer',
  component: PtnContainer,
} as Meta<typeof PtnContainer>;
type Story = StoryObj<typeof PtnContainer>;

export const Default: Story = {
  decorators: Story => (
    <PtnPaper variant='outlined' sx={{ padding: 2 }}>
      <Story />
    </PtnPaper>
  ),

  args: {
    maxWidth: 'lg',
    children: (
      <PtnPaper elevation={1} sx={{ padding: 2 }}>
        <PtnTypography textTransform='uppercase'>Body</PtnTypography>
      </PtnPaper>
    ),
  },
};
