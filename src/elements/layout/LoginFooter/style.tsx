import { Button, createTheme, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontSize: 15,
    },
  },
});

export const LoginFooterStyles = makeStyles({
  loginFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',

    '& p': {
      margin: '0',
      fontSize: '15px',
    },
  },
});

export const StyledButton = styled(Button)`
  &&.MuiButton-root {
    &:hover {
      background: none;
    }
    color: black;
  }
`;
