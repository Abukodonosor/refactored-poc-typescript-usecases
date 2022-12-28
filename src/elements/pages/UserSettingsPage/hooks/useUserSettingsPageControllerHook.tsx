import { DarkMode, WbSunnyOutlined } from '@mui/icons-material';
import { SelectChangeEvent } from '@mui/material';
import { useAppContext } from 'providers';
import { useEffect, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useNavigate } from 'react-router-dom';
import { UserSettingsControllerHookInputProps, UserSettingsControllerHookOutput } from '../types';

export const useUserSettingsPageControllerHook =
  ({}: UserSettingsControllerHookInputProps): UserSettingsControllerHookOutput => {
    const [theme, setTheme] = useState('');
    const navigate = useNavigate();
    const { appState } = useAppContext();

    const themeOptions = [
      { value: 'Light', label: 'Light', icon: <WbSunnyOutlined fontSize="small" /> },
      { value: 'Dark', label: 'Dark', icon: <DarkMode fontSize="small" /> },
    ];

    const selectTheme = (event: SelectChangeEvent) => {
      setTheme(event.target.value);
    };

    useEffect(() => {
      if (!sessionStorage.getItem('authenticated') && !localStorage.getItem('authenticated')) {
        navigate('/');
      }
    }, []);

    return {
      pinned: appState.pinnedMenu,
      theme: theme,
      themeOptions,
      selectTheme: selectTheme,
    };
  };
