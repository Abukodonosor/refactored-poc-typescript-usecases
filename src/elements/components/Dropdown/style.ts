import { Paper, Select, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const DropdownStyles = makeStyles({
  selectInput: {
    display: 'flex !important',
    alignItems: 'center',
  },
  icon: {
    display: 'flex !important',
    alignItems: 'center',
    minWidth: 'auto !important',
    marginRight: '5px',
    marginBottom: '2px',
  },
});

export const StyledSelect = styled(Select<string>)<{ height?: string }>`
  ${({ height }) => height && { height }};
  width: 100%;
`;
