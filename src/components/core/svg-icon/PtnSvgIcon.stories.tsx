import { Meta, StoryObj } from '@storybook/react';

import { PtnSvgIcon } from './PtnSvgIcon';

export default {
  title: 'Core/PtnSvgIcon',
  component: PtnSvgIcon,
} as Meta<typeof PtnSvgIcon>;
type Story = StoryObj<typeof PtnSvgIcon>;

const SVG = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='h-6 w-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 4.5v15m7.5-7.5h-15'
    />
  </svg>
);

export const Default: Story = {
  args: {
    children: SVG,
  },
};

export const Color: Story = {
  args: {
    color: 'primary',
    children: SVG,
  },
};
