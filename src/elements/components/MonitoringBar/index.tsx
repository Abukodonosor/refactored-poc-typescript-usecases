import { useState } from 'react';
import { Box, Button, Divider, IconButton, Toolbar } from '@mui/material';
import {
  CachedIcon,
  EditIcon,
  AvTimerIcon,
  FileUploadOutlinedIcon,
  SearchOutlinedIcon,
  ExpandMoreIcon,
} from '../../../assets/icons';
import { MonitoringBarStyles, SearchInput } from './style';
import { Text } from '../Text';

export const MonitoringBar = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const styles = MonitoringBarStyles();

  return (
    <Toolbar className={styles.monitoringBar} variant="dense">
      <Box className={styles.actionWrapper}>
        <Button variant="contained" className={styles.iconButton}>
          <CachedIcon fill="#fff" />
        </Button>
        <Button className={styles.action} variant="text">
          <EditIcon minHeight="16px" maxHeight="16px" />
          <Text textTransform="uppercase">Modify Manually</Text>
        </Button>
        <Button className={styles.action} variant="text">
          <AvTimerIcon minHeight="16px" maxHeight="16px" />
          <Text textTransform="uppercase">Time Range</Text>
        </Button>
      </Box>
      <Divider orientation="vertical" variant="middle" flexItem />
      {/* TODO: replace with workflow eventually, this is placeholder */}
      <div>
        <Button className={styles.action} variant="text">
          <ExpandMoreIcon minHeight="16px" maxHeight="16px" />
          <Text textTransform="uppercase">More actions</Text>
        </Button>
      </div>
      <div className={styles.searchWrapper}>
        {/* TODO: the search/filter should probably do something */}
        <SearchInput type="text" placeholder="Filter" isSearchClicked={isSearchClicked} />
        <IconButton
          className={styles.searchIconButton}
          onClick={() => setIsSearchClicked(!isSearchClicked)}
        >
          <SearchOutlinedIcon />
        </IconButton>

        <Button className={styles.iconButton} variant="contained">
          <FileUploadOutlinedIcon fill="#fff" />
        </Button>
      </div>
    </Toolbar>
  );
};
