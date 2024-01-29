import { Button, ButtonProps, ButtonTypeMap } from '@mui/material';

export type PtnButtonProps<
  RootComponent extends React.ElementType = ButtonTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  AdditionalProps = {}
> = ButtonProps<RootComponent, AdditionalProps>;
export const PtnButton = Button;
