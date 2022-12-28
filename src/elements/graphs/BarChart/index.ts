import { hocWrap } from '../../../utils/hocWrapper';
import { useBarChartController } from './hooks/useBarChartController';
import { BarChartView } from './BarChartView';
import { BarChartControllerInputProps } from './types';

export const BarChart: React.FC<BarChartControllerInputProps> = hocWrap(
  useBarChartController,
  BarChartView,
);
