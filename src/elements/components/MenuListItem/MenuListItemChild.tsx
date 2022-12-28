import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import { ListItemButton, ListItemText } from '@mui/material';

export interface MenuListItemChildInputProps {
  open: boolean;
  name: string;
  id: string;
  toRedirect?: any;
  handleClick: (event: { currentTarget: { id: React.SetStateAction<string> } }) => void;
}

export const MenuListItemChild: React.FC<MenuListItemChildInputProps> = ({
  open,
  name,
  id,
  toRedirect,
  handleClick,
}) => {
  return (
    <ListItem
      key={name}
      disablePadding
      sx={{ display: !open ? 'none' : 'block', opacity: open ? 1 : 0 }}
    >
      <ListItemButton
        id={id}
        component={Link}
        to={toRedirect}
        onClick={handleClick}
        sx={{
          minHeight: 30,
          maxHeight: 2,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
          ':hover': {
            background: '#D9E4EC',
          },
        }}
      >
        <ListItemText primary={name} sx={{ opacity: open ? 1 : 0, maxWidth: 2, ml: 6.2 }} />
      </ListItemButton>
    </ListItem>
  );
};
