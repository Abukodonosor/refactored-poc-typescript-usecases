import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const DashboardStyles = makeStyles<Theme>(theme => ({
  dashboardPage: {
    [theme.breakpoints.up('xs')]: {
      width: 'auto',
    },
    flexGrow: 1,
  },
  tabsIndicatorStyle: {
    '& .MuiTabs-indicator': {
      background: theme.palette.primary.main,
      height: '5px',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
    },
  },
  tabsWrapper: {
    [theme.breakpoints.up('xs')]: {
      borderBottom: 1,
      borderColor: 'divider',
      backgroundColor: 'white',
    },
  },
  editButton: {
    [theme.breakpoints.up('xs')]: {
      float: 'right',
      mr: 1.5,
      marginTop: 0.5,
    },
  },
}));
