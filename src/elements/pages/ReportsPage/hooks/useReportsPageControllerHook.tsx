import { useAppContext } from 'providers';
import { ReportsControllerHookInputProps, ReportsControllerHookOutput } from '../types';

export const useReportsPageControllerHook =
  ({}: ReportsControllerHookInputProps): ReportsControllerHookOutput => {
    const { appState } = useAppContext();
    return {
      pinned: appState.pinnedMenu,
    };
  };
