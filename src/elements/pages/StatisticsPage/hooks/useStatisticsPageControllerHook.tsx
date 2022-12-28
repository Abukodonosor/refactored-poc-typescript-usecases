import { useAppContext } from 'providers';
import { StatisticsControllerHookInputProps, StatisticsControllerHookOutput } from '../types';
import { useEffect } from 'react';

export const useStatisticsPageControllerHook =
  ({}: StatisticsControllerHookInputProps): StatisticsControllerHookOutput => {
    const {
      appState: { pinnedMenu },
    } = useAppContext();

    return {
      pinned: pinnedMenu,
    };
  };
