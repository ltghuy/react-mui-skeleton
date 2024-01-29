import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

export const PtnLink = styled(Link)(({ theme: { palette } }) => ({
  color: palette.text.primary,
  '&:hover, &:active': {
    color: palette.primary.main,
  },
}));
