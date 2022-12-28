import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import { Card, CardContent, CardHeader, List } from '@mui/material';
import { activeStyle, ComponentStyles } from './style';
import { Text } from '../Text';
import { useTranslationHook } from 'hooks';

export interface ToCListInputProps {
  active: string;
  title: string;
}

export const ContentTableList: React.FC<ToCListInputProps> = ({ active, title }) => {
  const { translationKey } = useTranslationHook();
  const menuStyle = ComponentStyles();
  /* TODO: Text className can be changed to variant prop once global theme is decided */
  return (
    <Card className={menuStyle.wrapper}>
      <CardHeader
        title={
          <Text fontSize="20px" color="#3A3952" bold>
            {title}
          </Text>
        }
      />
      <CardContent sx={{ paddingLeft: 0 }}>
        <List>
          <ListItem>
            <a href="#general">
              <Text color="#14417D" {...(active.includes('general') && activeStyle)}>
                General
              </Text>
            </a>
          </ListItem>
          <ListItem>
            <a href="#dashboard">
              <Text color="#14417D" {...(active.includes('dashboard') && activeStyle)}>
                {translationKey('Dashboard')}
              </Text>
            </a>
          </ListItem>
          <ListItem>
            <a href="#monitoring">
              <Text color="#14417D" {...(active.includes('monitor') && activeStyle)}>
                {translationKey('Monitoring')}
              </Text>
            </a>
          </ListItem>
          <ListItem>
            <a href="#search">
              <Text color="#14417D" {...(active.includes('search') && activeStyle)}>
                {translationKey('Search')}
              </Text>
            </a>
          </ListItem>
          <ListItem>
            <a href="#statistics">
              <Text color="#14417D" {...(active.includes('statistics') && activeStyle)}>
                {translationKey('Statistics')}
              </Text>
            </a>
          </ListItem>
          <ListItem>
            <a href="#reportsInfo">
              <Text color="#14417D" {...(active.includes('reports') && activeStyle)}>
                {translationKey('Reports')}
              </Text>
            </a>
          </ListItem>
          <ListItem>
            <a href="#settings">
              <Text color="#14417D" {...(active.includes('settings') && activeStyle)}>
                User Settings
              </Text>
            </a>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
