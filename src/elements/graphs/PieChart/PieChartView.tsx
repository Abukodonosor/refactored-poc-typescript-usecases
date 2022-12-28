import { PieChartViewProps } from './types';

export const PieChartView: React.FC<PieChartViewProps> = ({ pieChartRef }): JSX.Element => (
  <canvas ref={pieChartRef} />
);
