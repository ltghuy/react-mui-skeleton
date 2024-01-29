import { Meta, StoryObj } from '@storybook/react';

import { PtnIcon } from '../icon/PtnIcon';
import { PtnIconButton } from '../icon-button/PtnIconButton';
import { PtnTypography } from '../typography/PtnTypography';

import { PtnToolbar } from './PtnToolbar';

export default {
  title: 'Core/PtnToolbar',
  component: PtnToolbar,
} as Meta<typeof PtnToolbar>;
type Story = StoryObj<typeof PtnToolbar>;

export const Default: Story = {
  args: {
    children: (
      <PtnToolbar>
        <PtnIconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <PtnIcon icon='fe:heart' />
        </PtnIconButton>
        <PtnTypography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Toolbar
        </PtnTypography>
      </PtnToolbar>
    ),
  },
};
