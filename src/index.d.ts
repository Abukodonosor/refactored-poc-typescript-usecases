import '@mui/material/styles';

declare module '@mui/material/styles' {
  export interface PaletteColor {
    transparent?: string;
  }

  export interface SimplePaletteColorOptions {
    transparent?: string;
  }
}
