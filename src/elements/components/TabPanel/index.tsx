import { Box } from '@mui/material';
import { Text } from '../Text';
import { TabPanelStyles } from './style';
import { TabPanelInputProps } from './types';

export const TabPanel: React.FC<TabPanelInputProps> = ({ children, value, index }) => {
  const styles = TabPanelStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box className={styles.tabPanelStyle}>{children}</Box>}
    </div>
  );
};
