import { hocWrap } from '../../../utils/hocWrapper';
import { usePieChartController } from './hooks/usePieChartController';
import { PieChartView } from './PieChartView';
import { PieChartControllerInputProps } from './types';

export const PieChart: React.FC<PieChartControllerInputProps> = hocWrap(
  usePieChartController,
  PieChartView,
);
