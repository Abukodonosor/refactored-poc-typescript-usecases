import { styled, Typography } from '@mui/material';
import { StyledTypographyProps } from './types';

export const StyledTypography = styled(Typography)<StyledTypographyProps>`
  font-family: ${({ bold }) => (bold ? 'Roboto-Bold' : 'Roboto-Condensed')};
  ${({ textDecoration }) => textDecoration && { textDecoration }};
  ${({ opacity }) => opacity && { opacity }};
`;
