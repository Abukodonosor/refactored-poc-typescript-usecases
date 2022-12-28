import { hocWrap } from '../../../../../../../utils/hocWrapper';
import { useMonitoringTableContentHeadControllerHook } from './hooks/useMonitoringTableContentHeadControllerHook';
import { MonitoringTableContentHeadView } from './MonitoringTableContentHeadView';
import { MonitoringTableContentHeadControllerHookInputProps } from './types';

export const MonitoringTableContentHead: React.FC<MonitoringTableContentHeadControllerHookInputProps> =
  hocWrap(useMonitoringTableContentHeadControllerHook, MonitoringTableContentHeadView);
