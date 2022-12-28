import { makeStyles } from '@mui/styles';

export const compacerBlue = '#00417d';

export const SearchPageStyle = makeStyles({
  box: {
    flexGrow: 1,
    marginLeft: '80px',
    marginRight: '16px',
    marginTop: '16px',
    height: '82vh',
  },
  paper: {
    height: 'inherit',
    overflowY: 'auto',
    paddingBottom: '40px',
  },
  searchQueryBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '98%',
    margin: '10px 16px 18px 16px',
    padding: '10px 10px 30px 10px',
    border: '2px dashed #c3c3c3',
    borderRadius: '10px',
    rowGap: '10px',
  },
  searchQueryRow: {
    display: 'flex',
    height: 'min-content',
    width: '100%',
    gap: '24px',
  },
  formLabel: {
    width: '250px',
    borderRadius: '10px',
    backgroundColor: 'rgba(245, 248, 250)',
    '& .MuiOutlinedInput-notchedOutline': { border: 0 },
  },
  queryValues: {
    display: 'inline-flex',
    marginTop: '7px',
  },
  logicButton: {
    marginLeft: 'auto',
    width: 'max-content',
    height: 'min-content',
    position: 'relative',
    top: 8,
  },
  logicSelect: {
    width: '80px',
    mt: '7px',
  },
  addRow: {
    width: '80px',
    height: '24px',
    bottom: 2,
  },
  toolbar: {
    display: 'flex',
    backgroundColor: 'white',
    bottom: 1,
    boxShadow: 'inset 0 7px 2px -7px rgba(0,0,0,0.4)',
  },
  save: {
    '& .MuiButton-startIcon': { marginRight: '0px' },
    '& .MuiTypography-root': { textTransform: 'none' },
    '&.MuiButton-root': { marginRight: '16px', marginLeft: 'auto' },
  },
  addBox: {
    position: 'absolute',
    left: '50%',
    top: -25,
  },
  deleteBox: {
    '&.MuiButton-root': {
      padding: '2px',
      position: 'absolute',
      top: 18,
      right: 6,
      maxWidth: '24px',
      maxHeight: '24px',
      minWidth: '24px',
      minHeight: '24px',
    },
  },
  bindingButtons: {
    position: 'relative',
    height: '0',
  },
  formControl: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: compacerBlue,
      borderWidth: '2px',
      height: '40px',
    },
    '& .MuiSelect-select': { paddingTop: '15px' },
    width: '78px',
    height: '40px',
    position: 'absolute',
    left: '50%',
    top: -22,
    zIndex: '1',
    backgroundColor: 'white',
  },
});
