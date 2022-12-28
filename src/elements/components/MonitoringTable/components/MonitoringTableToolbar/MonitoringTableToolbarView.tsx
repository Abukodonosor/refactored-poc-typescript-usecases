import { Box, Button, Divider, Typography } from '@mui/material';
import { CalendarTodayOutlinedIcon, ClearIcon, DoneIcon } from '../../../../../assets/icons';
import { MonitoringTableToolbarInputProps } from './types';
import { MonitoringTableToolbarStyles, StyledToolbar } from './style';

export const MonitoringTableToolbarView: React.FC<MonitoringTableToolbarInputProps> = ({
  selectedCount,
  isEditing,
  first,
  last,
  rowsPerPage,
  numberOfEntries,
  setIsEditing,
  handleReset,
  handleCancel,
  handleConfirm,
}) => {
  const styles = MonitoringTableToolbarStyles();

  return (
    <StyledToolbar hasSelected={selectedCount > 0}>
      {selectedCount > 0 ? (
        <Typography color="inherit" variant="subtitle1" component="div">
          {selectedCount} selected
        </Typography>
      ) : (
        <Typography className={styles.title} id="tableTitle" component="div">
          Showing entries {first}-{rowsPerPage > numberOfEntries ? numberOfEntries : last} (Total:{' '}
          {numberOfEntries})
        </Typography>
      )}

      {selectedCount <= 0 &&
        (isEditing ? (
          <Box display="flex">
            <Button className={styles.reset} onClick={handleReset}>
              <Typography textTransform="none">Reset to default</Typography>
            </Button>
            <Divider className={styles.divider} orientation="vertical" />
            <Button className={styles.cancel} onClick={handleCancel}>
              <ClearIcon />
              <Typography textTransform="none">Cancel</Typography>
            </Button>
            <Button className={styles.confirm} onClick={handleConfirm}>
              <DoneIcon />
              <Typography textTransform="none">Confirm</Typography>
            </Button>
          </Box>
        ) : (
          <Button id="options" className={styles.options} onClick={() => setIsEditing(true)}>
            <CalendarTodayOutlinedIcon fontSize="small" />
            <Typography textTransform="none">Table options</Typography>
          </Button>
        ))}
    </StyledToolbar>
  );
};
