import { MemoryRouter } from 'react-router';
import { Meta, StoryObj } from '@storybook/react';

import { PtnLink } from './PtnLink';

export default {
  title: 'Core/PtnLink',
  component: PtnLink,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta<typeof PtnLink>;
type Story = StoryObj<typeof PtnLink>;

export const Default: Story = {
  args: {
    children: 'Default',
    to: '#',
  },
};
