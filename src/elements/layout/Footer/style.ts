import { makeStyles } from '@mui/styles';

export const FooterStyles = makeStyles({
  footer: {
    position: 'fixed',
    height: '5%',
    width: '100%',
    bottom: '0',
    right: '0',
    objectFit: 'cover',

    '@media screen and (max-height: 600px)': {
      display: 'none',
    },
  },
  footerText: {
    float: 'right',
    marginRight: '10px',
  },
});
