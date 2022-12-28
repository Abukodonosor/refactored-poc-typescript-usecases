import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import background from '../../../assets/images/login-bg.png';

import { LoginStyles, StyledImage } from './style';
import { LoginPageInputProps } from './types';
import { CookieModal, Dropdown, Text } from '../../components';
import { LoginFooter } from '../../layout';
import { useTranslationHook } from '../../../hooks';

export const LoginPageView: React.FC<LoginPageInputProps> = ({
  open,
  accepted,
  handleDetails,
  handleKeepLogged,
  handleSubmit,
  renderErrorMessage,
}) => {
  //LANGUAGE DROPDOWN IS COMMENTED OUT
  const { translationKey /* , changeLanguage, currentLanguage, supportedLanguages  */ } =
    useTranslationHook();
  const styles = LoginStyles();

  return (
    <Box className={styles.loginPage}>
      <Box className={styles.contentBoxStyle}>
        <StyledImage image={background} />
      </Box>
      <Box className={styles.loginForm}>
        <Box>
          {/* <Box sx={{ float: 'right' }}>
            <Dropdown
              value={currentLanguage}
              options={supportedLanguages.map(({ value, name }) => ({
                value,
                label: translationKey(name),
              }))}
              onChange={changeLanguage}
            />
          </Box> */}
          <div>
            <Text fontSize="30px" marginBottom="5px" bold>
              {translationKey('Login to Account')}
            </Text>
            <Text color="#6D6D6D">{translationKey('Login detail')}</Text>
          </div>
          <div className={styles.loginFields}>
            <form onSubmit={handleSubmit}>
              <>
                <div className={styles.inputWrapper}>
                  <Text marginTop="30px" marginBottom="5px" bold>
                    {translationKey('Account')}
                  </Text>
                  <input
                    type="text"
                    name="uname"
                    required
                    className={styles.loginInput}
                    placeholder="example@email.com"
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <>
                    <Box className={styles.passwordText}>
                      <Text bold>{translationKey('Password')}</Text>
                      {/* TODO: forgot password should do something */}
                      <Button className={styles.forgotPass} variant="text">
                        <Text color="#000">{translationKey('Forgot password')}</Text>
                      </Button>
                    </Box>
                    <input type="password" name="pass" required className={styles.loginInput} />
                    {renderErrorMessage('uname')}
                    {renderErrorMessage('pass')}
                  </>
                </div>
                {/* TODO: make "keep me logged in" functional, hidden until then */}
                {/* <FormControlLabel
                  control={<Checkbox size="small" disableRipple />}
                  label={<Typography variant="subtitle1">{translationKey('Keep logged')}</Typography>}
                  sx={{ marginBottom: '20px' }}
                  onClick={handleKeepLogged}
                /> */}
                <br />
                <Button
                  className={styles.loginButton}
                  fullWidth
                  variant="contained"
                  onClick={handleSubmit}
                >
                  {translationKey('Sign in')}
                </Button>
              </>
            </form>
          </div>
        </Box>
        <LoginFooter />
      </Box>
    </Box>
  );
};
