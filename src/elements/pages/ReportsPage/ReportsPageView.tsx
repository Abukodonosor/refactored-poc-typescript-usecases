import React from 'react';
import { Box } from '@mui/system';
import { Wrapper, Text } from 'elements/components';
import { ReportsInputProps } from './types';

export const ReportsPageView: React.FC<ReportsInputProps> = ({ pinned }) => {
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
