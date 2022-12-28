import { Paper, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const UserSettingsStyles = makeStyles({
  inputWrapper: {
    display: 'inline-block',
    marginRight: '16px',
  },
  innerSettingsBox: {
    display: 'inline',
    marginTop: '10px',
  },
  maxTableEntries: {
    marginTop: '20px',
  },
});

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  height: '135px',
  fontFamily: 'Roboto-Condensed',
}));
