import { ThemeProvider } from '@mui/material/styles';
import { DefaultConfigTheme } from '../theme';
import { useGlobalStyles } from '../theme/GlobalStyles';

export const MaterialThemeProvider: React.FC<any> = ({ children }: any) => {
  useGlobalStyles();

  return <ThemeProvider theme={DefaultConfigTheme}>{children}</ThemeProvider>;
};
