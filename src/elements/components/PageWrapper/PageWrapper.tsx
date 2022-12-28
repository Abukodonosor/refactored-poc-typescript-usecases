import { styled } from '@mui/material/styles';

export const Wrapper = styled('main', { shouldForwardProp: prop => prop !== 'pinned' })<{
  pinned?: boolean;
}>(({ theme, pinned }) => ({
  display: 'flex',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: '90%',
  float: 'right',
  ...(!pinned && {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: '100%',
  }),
}));
