import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Clock from 'react-live-clock';
import mimi from '../../../assets/images/picasso_princess_mimi.png';
import {
  AccessTimeOutlinedIcon,
  CalendarTodayOutlinedIcon,
  LogoutIcon,
  ManageAccountsIcon,
} from '../../../assets/icons';
import { Divider, Stack } from '@mui/material';
import { Breadcrumbs, Text } from '../../../elements/components';
import { BarWrapper } from './style';
import { HeaderInputProps } from './types';

export const HeaderBarView: React.FC<HeaderInputProps> = ({
  date,
  anchorElUser,
  pinned,

  handleCloseUserMenu,
  handleOpenUserMenu,
  handleUserMenu,
}) => {
  return (
    <BarWrapper pinned={pinned} elevation={1}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box sx={{ marginLeft: 7, flexGrow: 1 }}>
            <Breadcrumbs />
          </Box>

          <Stack spacing={0.7}>
            <AccessTimeOutlinedIcon maxHeight={14} fill="black" />
            <CalendarTodayOutlinedIcon maxHeight={14} fill="black" />
          </Stack>
          <Stack sx={{ mr: 2 }}>
            <Clock
              format={'HH:mm:ss'}
              style={{ fontSize: '14px', fontFamily: 'Roboto-Condensed', color: 'black' }}
              ticking={true}
            />
            <Text color="#000">{date}</Text>
          </Stack>
          <Divider orientation="vertical" flexItem sx={{ mr: 1 }} />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Mimi" src={mimi} sx={{ height: '60px', width: '60px' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={'settings'} id="settings" onClick={handleUserMenu}>
                <Text onClick={handleUserMenu}>
                  <ManageAccountsIcon fontSize="13px" verticalAlign="-1px" /> User settings
                </Text>
              </MenuItem>
              <MenuItem key={'logout'} id="logout" onClick={handleUserMenu}>
                <Text onClick={handleUserMenu}>
                  <LogoutIcon fontSize="13px" verticalAlign="-1px" /> Logout
                </Text>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </BarWrapper>
  );
};
