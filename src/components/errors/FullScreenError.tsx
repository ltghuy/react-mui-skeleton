import { PtnButton, PtnStack, PtnTypography } from '@components/core';

export interface FullScreenErrorProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
}
export const FullScreenError = ({
  title = 'Sorry!',
  description = 'We could not load the page this time, Please try again',
  buttonText = 'Retry',
  onClick,
}: FullScreenErrorProps) => {
  return (
    <PtnStack
      flex={1}
      spacing={3}
      alignItems='center'
      justifyContent='center'
      width='100%'
      height='100%'
    >
      <PtnStack alignItems='center' spacing={1.5}>
        <PtnTypography variant='h5' color='error.main' textAlign='center'>
          {title}
        </PtnTypography>
        <PtnTypography variant='body1' textAlign='center'>
          {description}
        </PtnTypography>
      </PtnStack>

      {onClick && (
        <PtnButton variant='outlined' onClick={onClick}>
          {buttonText}
        </PtnButton>
      )}
    </PtnStack>
  );
};
