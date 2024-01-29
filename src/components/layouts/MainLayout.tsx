import { Outlet } from 'react-router';
import {
  PtnAvatar,
  PtnIcon,
  PtnIconButton,
  PtnStack,
  PtnTooltip,
  PtnTypography,
} from '@components/core';
import { AppLogoSvg } from '@components/svgs';
import { useAuth } from '@hooks/core/useAuth';
import { useTheme } from '@mui/material';

const DRAWER_WIDTH = 280;

export const MainLayout = () => {
  const { user, logOut } = useAuth();
  const { palette } = useTheme();

  return (
    <PtnStack
      flex={1}
      direction='row'
      sx={{ backgroundColor: palette.background.default }}
    >
      <PtnStack
        width={DRAWER_WIDTH}
        padding={4}
        spacing={2}
        direction='column'
        justifyContent='space-between'
        sx={{ backgroundColor: palette.common.black }}
      >
        <PtnStack direction='row' alignItems='center' spacing={2}>
          <AppLogoSvg sx={{ fontSize: 32 }} />
          <PtnTypography
            variant='h6'
            color='primary.main'
            textAlign='center'
            fontWeight={700}
          >
            React Skeleton
          </PtnTypography>
        </PtnStack>

        <PtnStack
          direction='row'
          spacing={2}
          alignItems='center'
          justifyContent='space-between'
        >
          <PtnStack flex={1} direction='row' spacing={2} alignItems='center'>
            <PtnAvatar src={user?.picture}>{user?.name?.[0]}</PtnAvatar>
            <PtnTypography flex={1} color='common.white'>
              {user?.name}
            </PtnTypography>
          </PtnStack>
          <PtnTooltip arrow title='Logout'>
            <PtnIconButton color='primary' size='large' onClick={logOut}>
              <PtnIcon icon='fe:logout' />
            </PtnIconButton>
          </PtnTooltip>
        </PtnStack>
      </PtnStack>

      <PtnStack flexGrow={1} sx={{ overflowY: 'auto' }}>
        <Outlet />
      </PtnStack>
    </PtnStack>
  );
};
