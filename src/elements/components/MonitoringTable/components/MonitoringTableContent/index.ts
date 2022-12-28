import { hocWrap } from '../../../../../utils/hocWrapper';
import { useMonitoringTableContentControllerHook } from './hooks/useMonitoringTableContentControllerHook';
import { MonitoringTableContentView } from './MonitoringTableContentView';
import { MonitoringTableContentControllerHookInputProps } from './types';

export const MonitoringTableContent: React.FC<MonitoringTableContentControllerHookInputProps> =
  hocWrap(useMonitoringTableContentControllerHook, MonitoringTableContentView);
