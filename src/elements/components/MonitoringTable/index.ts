import { hocWrap } from '../../../utils/hocWrapper';
import { useMonitoringTableControllerHook } from './hooks/useMonitoringTableControllerHook';
import { MonitoringTableView } from './MonitoringTableView';
import { MonitoringTableControllerHookInputProps } from './types';

export const MonitoringTable: React.FC<MonitoringTableControllerHookInputProps> = hocWrap(
  useMonitoringTableControllerHook,
  MonitoringTableView,
);
