import { RefObject } from 'react';

export interface BarChartControllerInputProps {
  labels: string[];
  refresh: boolean;
  reset: (value: boolean) => void;
  isVertical?: boolean;
}

export interface BarChartViewProps {
  barChartRef: RefObject<HTMLCanvasElement>;
}
