import { styled, Toolbar } from '@mui/material';
import { alpha, Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const textStyle = {
  fontSize: '15px',
};

export const MonitoringTableToolbarStyles = makeStyles<Theme>(theme => ({
  title: {
    ...textStyle,
  },
  reset: {
    ...textStyle,
  },
  cancel: {
    ...textStyle,

    '& *': {
      color: 'red',
    },
  },
  confirm: {
    ...textStyle,

    '& *': {
      color: 'green',
    },
  },
  options: {
    ...textStyle,

    '& *': {
      color: '#3A3952',
    },
  },
  divider: {
    height: 'auto !important',
    width: '2px',
    margin: `0 ${theme.spacing(1)} !important`,
    backgroundColor: '#EBEBED',
  },
}));

export const StyledToolbar = styled(Toolbar)<{ hasSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  min-height: auto !important;

  background-color: ${({ hasSelected, theme }) =>
    hasSelected && alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-right: ${({ theme }) => theme.spacing(1)};
    padding-left: ${({ theme }) => theme.spacing(2)};
  }

  ${({ theme }) => theme.breakpoints.up('xs')} {
    padding-right: ${({ theme }) => theme.spacing(1)};
  }
`;
