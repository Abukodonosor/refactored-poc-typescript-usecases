import { Box, IconButton, Tab, Tabs } from '@mui/material';
import { EditOutlinedIcon } from '../../../assets/icons';
import { DashboardPageInputProps } from './types';
import { WidgetBoard } from '../../layout';
import { TabPanel } from '../../components/TabPanel';
import { DashboardStyles } from './style';
import { Wrapper } from 'elements/components';

export const DashboardPageView: React.FC<DashboardPageInputProps> = ({
  pinned,
  value,
  widgetTitles,
  position,
  position2,
  widgets1,
  widgets2,
  a11yProps,
  setValue,
  setRefresh,
  setTriggerID,
}) => {
  const styles = DashboardStyles();

  return (
    <Wrapper pinned={pinned}>
      <Box className={styles.dashboardPage}>
        <Box className={styles.tabsWrapper}>
          {/* TODO: add edit functionality */}
          <IconButton className={styles.editButton}>
            <EditOutlinedIcon />
          </IconButton>
          <Tabs
            className={styles.tabsIndicatorStyle}
            value={value}
            onChange={() => setValue(1)}
            aria-label="tabs"
            sx={{ ml: 10 }}
          >
            {/* TODO: make it dynamic? */}
            <Tab label="Home" {...a11yProps(0)} />
            {/* TODO: removed second tab example for now, put it back if we want this functionality */}
            {/* <Tab label="Dashboard 2" {...a11yProps(1)} /> */}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <WidgetBoard
            widgets={widgets1}
            pos={position}
            title={widgetTitles}
            setRefresh={setRefresh}
            index={setTriggerID}
          />
        </TabPanel>
        {/* This is not reachable out for now */}
        <TabPanel value={value} index={1}>
          <WidgetBoard
            widgets={widgets2}
            pos={position2}
            title={widgetTitles}
            setRefresh={setRefresh}
            index={setTriggerID}
          />
        </TabPanel>
      </Box>
    </Wrapper>
  );
};
