import { Meta, StoryObj } from '@storybook/react';

import { PtnPaper } from '../paper/PtnPaper';

import { PtnTypography } from './PtnTypography';

const MOCK_TEXT = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
export default {
  title: 'Core/PtnTypography',
  component: PtnTypography,
  args: {
    children: MOCK_TEXT,
  },
} as Meta<typeof PtnTypography>;
type Story = StoryObj<typeof PtnTypography>;
export const Variant: Story = {
  args: {
    variant: 'h4',
    color: 'text.primary',
  },
};

export const Colors: Story = {
  args: {
    variant: 'h4',
    color: 'primary.main',
  },
};

export const ColorsVariant: Story = {
  args: {
    variant: 'h4',
    color: 'primary.main',
  },
};

export const EllipsisLines: Story = {
  args: {
    variant: 'h4',
    color: 'text.primary',
    ellipsisLines: 2,
  },
  decorators: [
    Story => (
      <PtnPaper
        sx={{
          width: '400px',
          padding: 1,
        }}
      >
        <Story />
      </PtnPaper>
    ),
  ],
};
