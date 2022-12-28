import { makeStyles } from '@mui/styles';

export const MonitoringTableStyles = makeStyles({
  tableContentWrapper: {
    '& .col-status': {
      width: '65px',
    },

    '& table th': {
      position: 'relative',
    },

    '& table th, & table td': {
      'min-width': '50px',
    },
  },
  paginationWrapper: ({ isEditing }: { isEditing: boolean }) => ({
    display: isEditing ? 'none' : 'flex',
    justifyContent: 'space-between',
    bottom: 0,
    'align-items': 'center',

    '& button.MuiPaginationItem-previousNext': {
      border: '1px solid rgba(0, 0, 0, 0.2)',
    },

    '& button.Mui-selected': {
      backgroundColor: '#00417d',
    },

    '& .MuiTablePagination-displayedRows': {
      display: 'none',
    },

    '& .MuiTablePagination-toolbar .MuiInputBase-root': {
      marginRight: 0,
    },
  }),
  paginationPages: {
    position: 'relative',
    float: 'left',
    'margin-top': '14px',
    'margin-left': '10px',
    'z-index': 1,
  },
  goToWrapper: {
    display: 'flex',
    'margin-top': '8px',
    'margin-left': '30px',
    'z-index': 1,
  },
  goToInput: {
    left: '5%',
    width: '20%',
    float: 'left',
  },
});
