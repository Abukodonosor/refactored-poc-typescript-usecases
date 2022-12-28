import { Card, createTheme, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const HelpStyles = makeStyles({
  helpPage: {
    flexGrow: 1,
    height: '86vh',
    marginTop: '14px',
    marginRight: '15px',
    marginLeft: '78px',
    overflowY: 'scroll',
  },
  contentWrapper: {
    position: 'fixed',
    display: 'inline',
    float: 'left',
    minHeight: '100vh',
    zIndex: 1,
  },
  itemWrapper: {
    display: 'absolute',
    position: 'relative',
    float: 'right',
    marginRight: '20px',
  },
  body2: {
    color: '#24244E',
    fontSize: '12px',
  },
  h6: {
    fontFamily: 'Roboto-Bold',
    fontSize: '18px',
    color: '#3A3952',
  },
});

export const Item = styled(Card)(({ theme }) => ({
  textAlign: 'start',
  minWidth: '30vw',
  width: '70vw',
  height: '26vh',
  marginLeft: '14px',
  marginBottom: '14px',
}));
