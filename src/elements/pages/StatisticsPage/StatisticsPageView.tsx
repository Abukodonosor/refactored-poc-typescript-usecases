import { Box } from '@mui/system';
import { Text, Wrapper } from 'elements/components';
import React from 'react';
import { StatisticsInputProps } from './types';

export const StatisticsPageView: React.FC<StatisticsInputProps> = ({ pinned }) => {
  if (!(sessionStorage.getItem('authenticated') || localStorage.getItem('authenticated'))) {
    return null;
  }
  return (
    <Wrapper pinned={pinned}>
      <Box sx={{ width: '100%', alignSelf: 'center' }}>
        <Text fontSize="42px" color="#00417d" textAlign="center" bold>
          Coming Soon...
        </Text>
      </Box>
    </Wrapper>
  );
};
