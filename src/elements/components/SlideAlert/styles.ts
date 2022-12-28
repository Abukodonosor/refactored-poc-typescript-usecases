import { Alert, AlertProps, styled, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const SlideAlertStyles = makeStyles<Theme>(theme => ({
  '@keyframes slide': {
    '0%': {
      transform: `translateX(calc(100% + ${theme.spacing(1.5)}))`,
    },
    '10%': {
      transform: 'translateX(0)',
    },
    '80%': {
      transform: 'translateX(0) translateY(0)',
      opacity: 1,
    },
    '100%': {
      transform: 'translateX(0) translateY(-40px)',
      opacity: 0,
    },
  },
  slideAlert: {
    marginBottom: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    borderRadius: '5px',
    backgroundColor: '#fff',
    animation: '$slide 5s',
    transform: 'translateX(0)',
  },
}));

export const StyledAlert = styled(Alert)`
  min-width: 300px;
  border-radius: 5px;

  border: 1px solid ${({ theme, severity }) => severity && theme.palette[severity].main};
  color: ${({ theme, severity }) => severity && theme.palette[severity].main};
  background-color: ${({ theme, severity }) => severity && theme.palette[severity].transparent};
`;
