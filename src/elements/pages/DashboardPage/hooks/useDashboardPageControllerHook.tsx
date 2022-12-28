import { useAppContext } from 'providers';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, PieChart } from '../../../graphs';
import { DashboardPageControllerHookInputProps, DashboardPageControllerHookOutput } from '../types';

export const useDashboardPageControllerHook =
  ({}: DashboardPageControllerHookInputProps): DashboardPageControllerHookOutput => {
    const [value, setValue] = useState<number>(0);
    const [refresh, setRefresh] = useState<boolean>(false); //to refresh or not to refresh
    const [triggerID, setTriggerID] = useState<string | null>(null); //which widget?
    const navigate = useNavigate();
    const { appState } = useAppContext();
    const widgets1 = [
      <BarChart
        refresh={triggerID === '0' ? refresh : false}
        reset={setRefresh}
        labels={['January', 'February', 'March', 'April', 'May', 'June']}
        isVertical
      />,
      <BarChart
        refresh={triggerID === '1' ? refresh : false}
        reset={setRefresh}
        labels={['Bookings', 'Delays', 'Cancellations', 'Errors']}
      />,
    ];
    const widgetTitles = [
      { title: 'Sales first half year', caption: 'total sales per month' },
      { title: 'Current orders', caption: 'status on orders' },
    ];
    const position = [0, 6]; //just the X coordinate for now

    const widgets2 = [<PieChart />];
    const position2 = [4];

    const a11yProps = (index: number) => {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    };

    useEffect(() => {
      if (!sessionStorage.getItem('authenticated') && !localStorage.getItem('authenticated')) {
        navigate('/');
      }
    }, []);

    return {
      pinned: appState.pinnedMenu,
      value,
      widgetTitles,
      position,
      position2,
      widgets1,
      widgets2,
      a11yProps,
      setValue,
      setRefresh,
      setTriggerID,
    };
  };
