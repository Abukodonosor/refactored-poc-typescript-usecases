import { hocWrap } from '../../../utils/hocWrapper';
import { MonitoringPageView } from './MonitoringPageView';
import { useMonitoringPageControllerHook } from './hooks/useMonitoringPageControllerHook';
import { MonitoringPageControllerHookInputProps } from './types';

export const MonitoringPage: React.FC<MonitoringPageControllerHookInputProps> = hocWrap(
  useMonitoringPageControllerHook,
  MonitoringPageView,
);
