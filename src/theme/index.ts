import { createTheme } from '@mui/material/styles';

import shadows from './shadows';
import typography from './typography';

export const DefaultConfigTheme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#00417d',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#C3C3C3',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    success: {
      main: '#1FAD87',
      transparent: '#1FAD8726',
    },
    warning: {
      main: '#E08110',
      transparent: '#E0811026',
    },
    error: {
      main: '#CE4141',
      transparent: '#CE414126',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    h1: {
      fontSize: '16px',
    },
  },
  mixins: {},
  components: {
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontFamily: 'Roboto-Condensed',
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto-Condensed',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontFamily: 'Roboto-Condensed',
          textTransform: 'none',

          ...(ownerState.variant === 'contained' && {
            backgroundColor: '#14417D !important',
            fontSize: '1rem',

            '&:hover': {
              backgroundColor: '#206AC9',
            },
          }),
        }),
      },
    },
  },
  transitions: {},
  ...shadows,
  ...typography,
});
