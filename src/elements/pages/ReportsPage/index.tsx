import { hocWrap } from 'utils/hocWrapper';
import { useReportsPageControllerHook } from './hooks/useReportsPageControllerHook';
import { ReportsPageView } from './ReportsPageView';
import { ReportsControllerHookInputProps } from './types';

export const ReportsPage: React.FC<ReportsControllerHookInputProps> = hocWrap(
  useReportsPageControllerHook,
  ReportsPageView,
);
