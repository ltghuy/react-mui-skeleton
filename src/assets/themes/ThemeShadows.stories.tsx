import { PtnPaper, PtnStack, PtnTypography } from '@components/core';
import { styled, useTheme } from '@mui/material';
import { Meta } from '@storybook/react';

const ThemeShadows = () => <PtnStack>Theme/Shadows</PtnStack>;

export default {
  title: 'Theme/Shadows',
  component: ThemeShadows,
} as Meta<typeof ThemeShadows>;

export const AllShadows = () => {
  const theme = useTheme();
  return (
    <PtnStack
      gap={4}
      flexWrap='wrap'
      direction='row'
      sx={{
        backgroundColor: 'common.white',
        p: 4,
      }}
    >
      {theme.shadows.map((_shadow, index) => (
        <ShadowCard key={index} variant='elevation' elevation={index}>
          <PtnTypography>{index}</PtnTypography>
        </ShadowCard>
      ))}
    </PtnStack>
  );
};

const ShadowCard = styled(PtnPaper)(() => ({
  width: '50px',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'background.default',
}));
