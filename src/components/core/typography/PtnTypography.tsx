import { forwardRef, useMemo } from 'react';
import { ColorPath } from '@models/core/utility/types';
import {
  SxProps,
  Theme,
  Typography,
  TypographyOwnProps,
  TypographyProps,
  useTheme,
} from '@mui/material';
import { checkIsPathColor } from '@utils/core/color/checkIsPathColor';
import { getValueByPath } from '@utils/core/mapping/valueByPath';

export interface PtnTypographyProps extends TypographyProps {
  color?: TypographyOwnProps['color'] | ColorPath;
  ellipsisLines?: number;
}

export const PtnTypography = forwardRef<
  HTMLParagraphElement | null,
  PtnTypographyProps
>(({ color, ellipsisLines, sx, ...others }, ref) => {
  const { palette } = useTheme();

  const ellipsisStyle: SxProps<Theme> = useMemo(() => {
    if (!ellipsisLines) {
      return {};
    }
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      wordBreak: 'break-word',
      display: '-webkit-box',
      WebkitLineClamp: ellipsisLines,
      WebkitBoxOrient: 'vertical',
    };
  }, [ellipsisLines]);

  const colorResoled = checkIsPathColor(color)
    ? getValueByPath(palette, color)
    : color;

  return (
    <Typography
      ref={ref}
      color={colorResoled}
      sx={{
        ...ellipsisStyle,
        ...sx,
      }}
      {...others}
    />
  );
});
