import { createTheme, Theme } from '@mui/material';
import { styled, CSSObject } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import MuiDrawer from '@mui/material/Drawer';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  display: 'flex',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  display: 'flex',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  marginLeft: '16.25px',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(
  ({ theme, open }) => ({
    display: 'relative',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export const MenuStyles = makeStyles({
  menuArrow: {
    maxWidth: '150px',
    maxHeight: '150px',
    marginLeft: '16.25px',
  },
  monitoringHover: {
    '&.MuiListItem-root': {
      display: 'block',
    },
    '&.MuiListItem-root:hover': {
      borderLeftStyle: 'solid',
      borderWidth: 5,
      borderLeftColor: '#00417d',
    },
  },
  monitoringListButtons: {
    minHeight: 30,
    maxHeight: 2,
    justifyContent: 'initial',
    px: 2.5,
    '&.MuiListItemButton-root:hover': {
      background: '#D9E4EC',
    },
  },
  monitoringIcon: {
    minWidth: 0,
    maxWidth: 'auto',
    '&.MuiIconButton-root': {
      marginRight: '32px',
      marginLeft: '-4px',
    },
    justifyContent: 'center',
  },
});
