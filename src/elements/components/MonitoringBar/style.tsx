import { styled, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const MonitoringBarStyles = makeStyles<Theme>(theme => ({
  monitoringBar: {
    display: 'flex',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    boxShadow: theme.shadows['2'],
    width: '100%',
    borderRadius: 4,
    backgroundColor: 'white',

    '& .MuiTypography-root': {
      fontSize: '14px',
    },
  },
  iconButton: {
    minWidth: '40px !important',
    maxWidth: '40px !important',
  },
  actionWrapper: {
    marginRight: '10px',
  },
  action: {
    margin: `${theme.spacing(1)} !important`,
    color: '#303D4D !important',
  },
  searchWrapper: {
    right: '1%',
    position: 'absolute',
  },
  searchIconButton: {
    marginRight: `${theme.spacing(2)} !important`,
  },
}));

export const SearchInput = styled('input')<{ isSearchClicked: boolean }>`
  visibility: ${({ isSearchClicked }) => (isSearchClicked ? 'visible' : 'hidden')};
`;
