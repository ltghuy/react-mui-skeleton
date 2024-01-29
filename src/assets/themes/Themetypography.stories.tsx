import { PtnStack, PtnTypography } from '@components/core';
import { Meta } from '@storybook/react';

const ThemeTypography = () => <PtnStack>Theme/Typography</PtnStack>;
export default {
  title: 'Theme/Typography',
  component: ThemeTypography,
} as Meta<typeof ThemeTypography>;

export const Variant = () => (
  <PtnStack spacing={2} alignItems='start'>
    <PtnTypography variant='h1'>h1 - 18px 400 Raleway</PtnTypography>
    <PtnTypography variant='h2'>h2 - 16px 400 Raleway</PtnTypography>
    <PtnTypography variant='h3'>h3 - 14px 400 Raleway</PtnTypography>
    <PtnTypography variant='h4'>h4 - 12px 400 Raleway</PtnTypography>
    <PtnTypography variant='h5'>h5 - 12px 400 Open Sans</PtnTypography>
    <PtnTypography variant='h6'>h6 - 12px 700 Raleway</PtnTypography>
    <PtnTypography variant='subtitle1'>
      subtitle1 - 14px 700 Raleway
    </PtnTypography>
    <PtnTypography variant='subtitle2'>
      subtitle2 - 12px 700 Raleway
    </PtnTypography>
    <PtnTypography variant='body1'>body1 - 14px 400 Open Sans</PtnTypography>
    <PtnTypography variant='body2'>body2 - 12px 400 Raleway</PtnTypography>
    <PtnTypography variant='caption'>caption - 10px 400 Raleway</PtnTypography>
  </PtnStack>
);
