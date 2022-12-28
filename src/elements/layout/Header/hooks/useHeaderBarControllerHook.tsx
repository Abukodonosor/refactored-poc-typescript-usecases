import moment from 'moment';
import { useAppContext } from 'providers';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderHookInputProps, HeaderHookOutput } from '../types';

export const useHeaderBarControllerHook = ({}: HeaderHookInputProps): HeaderHookOutput => {
  let date = moment(new Date()).format('DD/MM/YYYY');
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const { appState } = useAppContext();
  const handleOpenUserMenu = (event: { currentTarget: any }) => {
    const anchor = event.currentTarget;
    setAnchorElUser(anchor);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserMenu = (event: { currentTarget: { id: string } }) => {
    if (event.currentTarget.id === 'logout') {
      localStorage.removeItem('authenticated');
      navigate('/login');
      return;
    }
    if (event.currentTarget.id === 'settings') {
      handleCloseUserMenu();
      navigate('/settings');
    }
  };

  return {
    date: date,
    anchorElUser: anchorElUser,
    pinned: appState.pinnedMenu,

    handleCloseUserMenu: handleCloseUserMenu,
    handleOpenUserMenu: handleOpenUserMenu,
    handleUserMenu: handleUserMenu,
  };
};
