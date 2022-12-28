import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

export const BarWrapper = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'pinned',
})<{
  pinned?: boolean;
}>(({ theme, pinned }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: 'white',
  position: 'relative',
  ...(pinned && {
    width: 'calc(100% - 190px)',
    marginLeft: '190px',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
