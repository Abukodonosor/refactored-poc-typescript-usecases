import { styled, Card, CardHeader, CardContent } from '@mui/material';
import React from 'react';
import { HelpCardStyles, Item } from './style';
import { Text } from '../Text';

export interface HelpCardInputProps {
  itemId: string;
  title: string;
  description: string;
  elevation?: number | 0;
  cardHeaderStyle?: any;
  cardContentBodyStyle?: any;
  pinned: boolean;
}

export const HelpCard: React.FC<HelpCardInputProps> = ({
  itemId,
  elevation,
  title,
  description,
  pinned,
}) => {
  const style = HelpCardStyles();

  return (
    <Item pinned={pinned} id={itemId} elevation={elevation || 0}>
      <CardHeader
        title={
          <Text color="#3A3952" fontSize="18px" bold>
            {title}
          </Text>
        }
      />
      <CardContent>
        <Text color="#24244E">{description}</Text>
      </CardContent>
    </Item>
  );
};
