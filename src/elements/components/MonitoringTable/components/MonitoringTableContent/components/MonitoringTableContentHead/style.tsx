import { styled, TableCell } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const MonitoringTableContentHeadStyles = makeStyles({
  resizeHandle: {
    cursor: 'col-resize',
    position: 'absolute',
    right: 0,
    display: 'block',
    height: '37px',
    width: '7px',
    'margin-top': '-6px',
    'border-right': '2px solid rgba(0, 0, 0, 0.2)',
    'z-index': 1,

    '&:hover': {
      'border-color': 'rgb(48, 43, 194)',
    },

    '&.active': {
      'border-color': '#517ea5',
    },
  },
});

export const StyledTableCell = styled(TableCell)`
  padding: 6px 10px 6px 5px;
  border-style: solid;
  border-width: 1px 0px 1px 0px;
  border-color: rgba(0, 0, 0, 0.2);
  background-color: #f7f7f7;
  font-size: 16px;
  user-select: none;
`;
