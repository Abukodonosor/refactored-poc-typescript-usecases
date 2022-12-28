import { useAppContext } from 'providers';
import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mockedData } from '../mockedData';
import {
  MonitoringPageControllerHookInputProps,
  MonitoringPageControllerHookOutput,
} from '../types';

export const useMonitoringPageControllerHook =
  ({}: MonitoringPageControllerHookInputProps): MonitoringPageControllerHookOutput => {
    const navigate = useNavigate();
    const { appState } = useAppContext();

    useEffect(() => {
      if (!sessionStorage.getItem('authenticated') && !localStorage.getItem('authenticated')) {
        navigate('/');
      }
    }, []);

    const location = useLocation();
    const path = location.pathname.split('/');
    const currTable = path[path.length - 1];

    const data = useMemo(() => mockedData(currTable), [currTable]);

    return {
      pinned: appState.pinnedMenu,
      data,
    };
  };
