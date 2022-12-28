import { hocWrap } from '../../../utils/hocWrapper';
import { MonitoringDetailsPageView } from './MonitoringDetailsPageView';
import { useMonitoringDetailsPageControllerHook } from './hooks/useMonitoringDetailsPageControllerHook';
import { MonitoringDetailsPageControllerHookInputProps } from './types';

export const MonitoringDetailsPage: React.FC<MonitoringDetailsPageControllerHookInputProps> =
  hocWrap(useMonitoringDetailsPageControllerHook, MonitoringDetailsPageView);
