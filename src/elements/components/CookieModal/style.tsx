import { makeStyles } from '@mui/styles';

export const CookieModalStyles = makeStyles(theme => ({
  acceptCookiesButtonStyle: { left: 55, padding: '10px 20px 10px 20px' },
  showDetailsButtonStyle: {
    textTransform: 'none',
    left: 10,
    borderRadius: 5,
    color: '#C3C3C3',
    padding: '10px 40px 10px 40px',
  },
  loginCard: ({ accepted, open }: any) => ({
    display: accepted || !open ? 'none' : 'block',
    position: 'absolute',
    bottom: 10,
    left: 10,
    minWidth: 430,
    minHeight: 200,
  }),
}));
