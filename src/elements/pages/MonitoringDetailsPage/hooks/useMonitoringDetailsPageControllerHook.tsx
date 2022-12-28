import { useAppContext } from 'providers';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useVesselData } from '../../../../hooks';
import {
  MonitoringDetailsPageControllerHookInputProps,
  MonitoringDetailsPageControllerHookOutput,
} from '../types';

export const useMonitoringDetailsPageControllerHook =
  ({}: MonitoringDetailsPageControllerHookInputProps): MonitoringDetailsPageControllerHookOutput => {
    // Extract the query params from URL
    let { table, tableId } = useParams();

    const navigate = useNavigate();
    
    const { appState } = useAppContext();
    const [rowData, setRowData] = useState(useVesselData() || []);

    const header = [' ', 'Event', 'Timestamp', 'Author'];
    const dataKeys = Object.keys(rowData);

    useEffect(() => {
      if (!sessionStorage.getItem('authenticated') && !localStorage.getItem('authenticated')) {
        navigate('/');
      }
    }, []);

    return {
      rowData,
      header,
      dataKeys,
      pinned: appState.pinnedMenu,
    };
  };
