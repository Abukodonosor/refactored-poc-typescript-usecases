import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { Wrapper, Dropdown, Text } from 'elements/components';
import { LockIcon, SaveOutlinedIcon } from '../../../assets/icons';
import { UserSettingsStyles, Item } from './style';
import { UserSettingsInputProps } from './types';
import { useTranslationHook } from 'hooks';

export const UserSettingsPageView: React.FC<UserSettingsInputProps> = ({
  pinned,
  theme,
  themeOptions,
  selectTheme,
}) => {
  if (!(sessionStorage.getItem('authenticated') || localStorage.getItem('authenticated'))) {
    return null;
  }
  const { translationKey, changeLanguage, currentLanguage, supportedLanguages } =
    useTranslationHook();

  const styles = UserSettingsStyles();

  return (
    <Wrapper pinned={pinned}>
      <Box sx={{ flexGrow: 1, mt: 2, ml: 10, mr: 2 }}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Item>
                <h1>{translationKey('Change password')}</h1>
                <Box className={styles.innerSettingsBox}>
                  <div className={styles.inputWrapper}>
                    {translationKey('Old password')} <br />
                    <input className="oldPass" type="text" />
                  </div>
                  <div className={styles.inputWrapper}>
                    {translationKey('New password')} <br />
                    <input className="newPass" type="text" />
                  </div>
                  <div className={styles.inputWrapper}>
                    {translationKey('Confirm new password')} <br />
                    <input className="confirmPass" type="text" />
                  </div>
                  {/* TODO: button should reset password */}
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ bottom: 3, backgroundColor: '#00417d' }}
                    startIcon={<LockIcon fill="#fff" verticalAlign="-1px" />}
                  >
                    <Text>Reset password</Text>
                  </Button>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3} md={3}>
              <Item>
                <Text variant="h2" fontSize="28px" marginBottom="17px" bold>
                  {translationKey('Language')}
                </Text>
                <Dropdown
                  value={currentLanguage}
                  options={supportedLanguages.map(({ value, name, icon }) => ({
                    value,
                    label: translationKey(name),
                    icon: icon,
                  }))}
                  onChange={changeLanguage}
                />
              </Item>
            </Grid>
            <Grid item xs={3} md={3}>
              <Item>
                <Text variant="h2" fontSize="28px" marginBottom="17px" bold>
                  {translationKey('Theme')}
                </Text>
                <Dropdown value={theme} options={themeOptions} onChange={selectTheme} />
              </Item>
            </Grid>

            <Grid item xs={9} md={9}>
              <Item>
                <h1>{translationKey('Formats')}</h1>
                <div className={styles.innerSettingsBox}>
                  <div className={styles.inputWrapper}>
                    {translationKey('Number format')} <br />
                    <input className="numFormat" type="text" />
                  </div>
                  <div className={styles.inputWrapper}>
                    {translationKey('Date format')} <br />
                    <input className="dateFormat" type="text" />
                  </div>
                  <div className={styles.inputWrapper}>
                    {translationKey('Time format')} <br />
                    <input className="timeFormat" type="text" />
                  </div>
                  <div className={styles.inputWrapper}>
                    {translationKey('Timezone')} <br />
                    <input className="timezone" type="text" />
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={3} md={3}>
              <Item>
                <h1>{translationKey('Maximal amount of table entries')}</h1>
                <div className={styles.innerSettingsBox}>
                  <input className={styles.maxTableEntries} type="text" />
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Button
            variant="contained"
            size="small"
            sx={{ top: 15, backgroundColor: '#00417d', float: 'right' }}
            startIcon={<SaveOutlinedIcon fill="#fff" verticalAlign="-1px" />}
          >
            <Text>{translationKey('Save changes')}</Text>
          </Button>
          <Button sx={{ textTransform: 'none', top: 15, float: 'right', mr: 2, color: 'black' }}>
            {translationKey('Discard changes')}
          </Button>
        </Box>
      </Box>
    </Wrapper>
  );
};
