import { styled } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const LoginStyles = makeStyles({
  typography: {
    h1: {
      fontSize: '16px',
    },
  },
  palette: {
    secondary: {
      main: '#C3C3C3',
    },
  },
  loginPage: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#fff',
  },
  contentBoxStyle: {
    flexBasis: '45%',
  },
  loginForm: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 1',
    fontFamily: 'Roboto-Condensed',
  },
  loginFields: {
    textAlign: 'left',
  },
  passwordText: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: '30px',
    marginBottom: '5px',
  },
  forgotPass: {
    padding: '0 !important',
    backgroundColor: 'transparent !important',

    '&:hover p': {
      textDecoration: 'underline',
    },
  },
  loginInput: {
    width: '430px',
    height: '44px',
    padding: '0 15px',
    border: '1px solid #C3C3C3',
    borderRadius: '5px',
  },
  inputWrapper: {
    fontSize: '16px',
    textAlign: 'left',
    color: '#24244e',
  },
  loginButton: {
    height: '50px',
    marginTop: '25px !important',
  },
});

export const StyledImage = styled('div')<{ image: string }>`
  height: 100%;
  width: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position-x: center;
`;
