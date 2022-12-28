import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { MenuListStyle, StyledBox } from './style';

export interface MenuListItemInputProps {
  open: boolean;
  name: string;
  id: string;
  active: string;
  icon?: any;
  children?: any;
  toRedirect?: any;
  handleClick: (event: { currentTarget: { id: React.SetStateAction<string> } }) => void;
}

export const MenuListItem: React.FC<MenuListItemInputProps> = ({
  open,
  name,
  id,
  toRedirect,
  active,
  icon,
  children,
  handleClick,
}) => {
  const styles = MenuListStyle();

  return (
    <ListItem key={name} disablePadding className={styles.listItem}>
      <StyledBox itemId={id} activeItem={active} isOpen={open}>
        <ListItemButton component={Link} to={toRedirect} onClick={handleClick}>
          <ListItemIcon className={styles.listItemIcon}>{icon}</ListItemIcon>
          <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </StyledBox>
      {children}
    </ListItem>
  );
};
