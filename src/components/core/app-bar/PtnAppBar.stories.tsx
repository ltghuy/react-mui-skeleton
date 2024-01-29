import { Meta, StoryObj } from '@storybook/react';

import { PtnButton } from '../button/PtnButton';
import { PtnIcon } from '../icon/PtnIcon';
import { PtnIconButton } from '../icon-button/PtnIconButton';
import { PtnToolbar } from '../tool-bar/PtnToolbar';
import { PtnTypography } from '../typography/PtnTypography';

import { PtnAppBar } from './PtnAppBar';

export default {
  title: 'Core/PtnAppBar',
  component: PtnAppBar,
} as Meta<typeof PtnAppBar>;
type Story = StoryObj<typeof PtnAppBar>;

export const Default: Story = {
  args: {
    variant: 'elevation',
    children: (
      <PtnToolbar>
        <PtnIconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <PtnIcon icon='fe:bar' />
        </PtnIconButton>
        <PtnTypography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          App Bar
        </PtnTypography>
        <PtnButton color='inherit'>Login</PtnButton>
      </PtnToolbar>
    ),
  },
};
