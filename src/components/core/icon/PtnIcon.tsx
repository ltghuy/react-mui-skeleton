import { Icon, IconProps } from '@iconify/react';
import { ColorPath } from '@models/core/utility/types';
import { useTheme } from '@mui/material';
import { checkIsPathColor } from '@utils/core/color/checkIsPathColor';
import { getValueByPath } from '@utils/core/mapping/valueByPath';

export interface PtnIconProps extends Omit<IconProps, 'color'> {
  color?: ColorPath | string;
}

export const PtnIcon = ({ color, ...iconProps }: PtnIconProps) => {
  const { palette } = useTheme();

  const colorResoled = checkIsPathColor(color)
    ? getValueByPath(palette, color)
    : color;

  return <Icon color={colorResoled} fontSize='1.5rem' {...iconProps} />;
};
