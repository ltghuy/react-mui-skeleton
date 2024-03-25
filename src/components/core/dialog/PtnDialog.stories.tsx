import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PtnDialog, PtnDialogProps } from './PtnDialog';
import { PtnStack } from '../stack/PtnStack';
import { PtnButton } from '../button/PtnButton';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';


export default {
  title: 'Core/PtnDialog',
  component: PtnDialog,
} as Meta<typeof PtnDialog>;
type Story = StoryObj<typeof PtnDialog>;

const PtnDialogController = (props: PtnDialogProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <PtnStack width={200}>
      <PtnButton variant='outlined' fullWidth={true} onClick={handleOpenDialog}>
        Open Dialog
      </PtnButton>
      <PtnDialog
        {...props}
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth={'xs'}
        fullWidth
      >
        <DialogTitle>Title</DialogTitle>
        <DialogContent>Dialog content</DialogContent>
        <DialogActions>
          <PtnButton variant='outlined' onClick={handleCloseDialog}>
            OK
          </PtnButton>
          <PtnButton variant='outlined' onClick={handleCloseDialog}>
            Cancel
          </PtnButton>
        </DialogActions>
      </PtnDialog>
    </PtnStack>
  );
};

export const Default: Story = {
  render: props => <PtnDialogController {...props} />,
  args: {
    fullScreen: false,
    disableEscapeKeyDown: true,
    scroll: 'body',
  },
};
