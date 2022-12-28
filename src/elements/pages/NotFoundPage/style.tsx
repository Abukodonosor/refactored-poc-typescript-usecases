import { Button, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#054d84',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const notFoundStyles = makeStyles({
  notFoundPage: {
    minWidth: '100vw',
    minHeight: '100vh',
    backgroundColor: '#fff',
  },
  logo: {
    left: '45%',
    paddingTop: '40px',
    position: 'relative',
    maxWidth: '10vw',
  },
  content: {
    left: '40%',
    marginTop: '40px',
    position: 'relative',
    maxWidth: 'fit-content',
  },
  illustration: {
    position: 'absolute',
    left: '20%',
  },
  errorContent: {
    maxWidth: '400px',
    top: '135%',
    position: 'absolute',
  },
  backButton: {
    left: '25%',
    marginTop: '24px',
  },
});
