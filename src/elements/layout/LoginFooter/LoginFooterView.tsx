import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { LoginFooterStyles, StyledButton, theme } from './style';
import { LoginFooterPageInputProps } from './types';
import { useTranslationHook } from 'hooks';

export const LoginFooterView: React.FC<LoginFooterPageInputProps> = () => {
  const { translationKey } = useTranslationHook();
  const styles = LoginFooterStyles();
  const currentYear = new Date().getFullYear();

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="absolute"
        color="default"
        sx={{ top: 'auto', bottom: 0, boxShadow: 'none' }}
      >
        <Toolbar>
          <div className={styles.loginFooter}>
            {/* commented out until we know what to actually put here and link to */}
            {/* <StyledButton disableRipple variant="text">
              {translationKey('Help')}
            </StyledButton>
            <StyledButton disableRipple variant="text">
              {translationKey('Contact')}
            </StyledButton> */}
            <p>Copyright © {currentYear} edpem</p>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
