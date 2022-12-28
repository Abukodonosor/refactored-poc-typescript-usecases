import { hocWrap } from '../../../utils/hocWrapper';
import { DashboardPageView } from './DashboardPageView';
import { useDashboardPageControllerHook } from './hooks/useDashboardPageControllerHook';
import { DashboardPageControllerHookInputProps } from './types';

export const DashboardPage: React.FC<DashboardPageControllerHookInputProps> = hocWrap(
  useDashboardPageControllerHook,
  DashboardPageView,
);
