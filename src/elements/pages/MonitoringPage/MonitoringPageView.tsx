import { Box } from '@mui/material';
import { Wrapper } from 'elements/components';
import React from 'react';
import { MonitoringBar } from '../../components/MonitoringBar';
import { MonitoringTable } from '../../components/MonitoringTable';
import { MonitoringPageInputProps } from './types';

export const MonitoringPageView: React.FC<MonitoringPageInputProps> = ({ pinned, data }) => {
  return (
    <Wrapper pinned={pinned}>
      <Box sx={{ width: 'inherit', height: 'fit-content', ml: 10, mr: 2, flexGrow: 1 }}>
        <MonitoringBar />
        <MonitoringTable data={data} />
      </Box>
    </Wrapper>
  );
};
