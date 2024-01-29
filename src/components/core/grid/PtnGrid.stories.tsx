import { SxProps, Theme } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';

import { PtnPaper } from '../paper/PtnPaper';

import { PtnGrid } from './PtnGrid';

export default {
  title: 'Core/PtnGrid',
  component: PtnGrid,
} as Meta<typeof PtnGrid>;
type Story = StoryObj<typeof PtnGrid>;

const PAPER_SX: SxProps<Theme> = {
  padding: 2,
};

export const Default: Story = {
  args: {
    columns: 12,
    container: true,
    gap: 2,
    children: (
      <>
        <PtnGrid xs={12} sm={12}>
          <PtnPaper elevation={4} sx={PAPER_SX}>
            col = 12
          </PtnPaper>
        </PtnGrid>
        <PtnGrid xs={12} sm={3}>
          <PtnPaper elevation={4} sx={PAPER_SX}>
            col = 3
          </PtnPaper>
        </PtnGrid>
        <PtnGrid xs={12} sm={6}>
          <PtnPaper elevation={4} sx={PAPER_SX}>
            col = 6
          </PtnPaper>
        </PtnGrid>
        <PtnGrid xs={12} sm={3}>
          <PtnPaper elevation={4} sx={PAPER_SX}>
            col = 3
          </PtnPaper>
        </PtnGrid>
      </>
    ),
  },
};
