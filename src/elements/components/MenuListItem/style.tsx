export const compacerBlue = '#00417d';
import { styled, Theme, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const MenuListStyle = makeStyles<Theme>(theme => ({
  listItem: {
    display: 'block !important',

    '&:hover': {
      borderLeftStyle: 'solid',
      borderWidth: 5,
      borderLeftColor: compacerBlue,
    },
  },
  listItemContent: {
    display: 'block',

    '&:hover': {
      borderLeftStyle: 'solid',
      borderWidth: 5,
      borderLeftColor: theme.palette.primary.main,
    },
  },
  listItemIcon: {
    minWidth: '0 !important',
    paddingLeft: 5,
    marginRight: '24px',
  },
}));

export const StyledBox = styled(Box)<{
  isOpen: boolean;
  itemId: string;
  activeItem: string;
}>`
  justify-content: ${({ isOpen }) => (isOpen ? 'initial' : 'center')};
  min-height: 48px;
  box-shadow: ${({ activeItem, itemId, theme }) =>
    activeItem === itemId ? `inset 5px 0 0 ${theme.palette.primary.main}` : 'none'};

  &:hover {
    background: '#D9E4EC';
  }
`;
