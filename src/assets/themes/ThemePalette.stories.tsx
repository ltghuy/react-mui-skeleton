import { useCallback } from 'react';
import { PtnPaper, PtnStack, PtnTypography } from '@components/core';
import { PaletteColorOptions, PaletteOptions, useTheme } from '@mui/material';
import { Meta } from '@storybook/react';

const ThemePalette = () => <PtnStack>Theme/Palette</PtnStack>;

type ColorItem = {
  name: string;
  color: string;
};

const GROUP_COLOR: (keyof PaletteOptions)[] = [
  'primary',
  'secondary',
  'text',
  'success',
  'warning',
  'error',
  'info',
  'divider',
  'common',
  'background',
  'action',
  'grey',
];

export default {
  title: 'Theme/Palette',
  component: ThemePalette,
} as Meta<typeof ThemePalette>;

export const Light = () => {
  const { palette } = useTheme();

  const getColors = useCallback(
    (group: keyof PaletteOptions) => {
      const result: ColorItem[] = [];
      const color = palette[group];
      if (color) {
        if (typeof color === 'string') {
          result.push({
            name: group,
            color,
          });
        } else {
          Object.keys(color).forEach(childKey => {
            const childValue = color[childKey as keyof PaletteColorOptions];
            if (childValue && typeof childValue === 'string') {
              result.push({
                name: `${group}.${childKey}`,
                color: childValue,
              });
            }
          });
        }
      }
      return result;
    },
    [palette]
  );

  const renderGroupColors = (group: keyof PaletteOptions) => {
    const colors = getColors(group);
    return (
      <PtnStack key={group} direction='column' spacing={2}>
        <PtnTypography variant='h5'>{group.toUpperCase()}</PtnTypography>
        <PtnStack gap={2} flexWrap='wrap' direction='row'>
          {colors.map(color => (
            <ColorPaletteCard key={color.name} colorItem={color} />
          ))}
        </PtnStack>
      </PtnStack>
    );
  };

  return (
    <PtnStack direction='column' spacing={6}>
      {GROUP_COLOR.map(renderGroupColors)}
    </PtnStack>
  );
};

interface ColorPaletteCardProps {
  colorItem: ColorItem;
}
const ColorPaletteCard = ({
  colorItem: { name, color },
}: ColorPaletteCardProps) => {
  const { palette } = useTheme();
  return (
    <PtnPaper
      key={name}
      variant='elevation'
      elevation={1}
      sx={{ minWidth: '200px', overflow: 'hidden' }}
    >
      <PtnStack>
        <PtnStack
          sx={{
            backgroundColor: color,
            borderBottomColor: palette.divider,
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            height: '80px',
          }}
        />
        <PtnStack sx={{ p: 2 }}>
          <PtnTypography variant='body1'>{name}</PtnTypography>
          <PtnTypography variant='body2'>{color}</PtnTypography>
        </PtnStack>
      </PtnStack>
    </PtnPaper>
  );
};
