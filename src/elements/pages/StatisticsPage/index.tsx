import { hocWrap } from 'utils/hocWrapper';
import { useStatisticsPageControllerHook } from './hooks/useStatisticsPageControllerHook';
import { StatisticsPageView } from './StatisticsPageView';
import { StatisticsControllerHookInputProps } from './types';

export const StatisticsPage: React.FC<StatisticsControllerHookInputProps> = hocWrap(
  useStatisticsPageControllerHook,
  StatisticsPageView,
);
