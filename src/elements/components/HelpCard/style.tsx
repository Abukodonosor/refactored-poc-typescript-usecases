import { Card } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

export const HelpCardStyles = makeStyles({
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
});

export const Item = styled(Card, { shouldForwardProp: prop => prop !== 'pinned' })<{
  pinned?: boolean;
}>(({ theme, pinned }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  marginLeft: '14px',
  ...(!pinned && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: '65px',
  }),
  width: '60vw',
  ...(!pinned && {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: '70vw',
  }),
  textAlign: 'start',
  minWidth: '30vw',
  height: '26vh',
  marginBottom: '14px',
}));
