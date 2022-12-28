import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const TabPanelStyles = makeStyles<Theme>(theme => ({
  tabPanelStyle: {
    '& h6': {
      fontFamily: 'Roboto-Bold',

      '&.MuiTypography-subtitle1': {
        fontFamily: 'Roboto-Condensed',
      },
    },

    [theme.breakpoints.up('xs')]: {
      paddingTop: 3,
    },
  },
}));
