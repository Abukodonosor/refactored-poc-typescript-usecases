import { hocWrap } from '../../../../../utils/hocWrapper';
import { useMonitoringTableToolbarControllerHook } from './hooks/useMonitoringTableToolbarControllerHook';
import { MonitoringTableToolbarView } from './MonitoringTableToolbarView';
import { MonitoringTableToolbarControllerHookInputProps } from './types';

export const MonitoringTableToolbar: React.FC<MonitoringTableToolbarControllerHookInputProps> =
  hocWrap(useMonitoringTableToolbarControllerHook, MonitoringTableToolbarView);
