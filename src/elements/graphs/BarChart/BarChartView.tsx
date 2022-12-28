import { BarChartViewProps } from './types';

export const BarChartView: React.FC<BarChartViewProps> = ({ barChartRef }): JSX.Element => (
  <canvas ref={barChartRef} />
);
