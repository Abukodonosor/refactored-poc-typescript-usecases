import { RefObject } from 'react';

export interface PieChartControllerInputProps {}

export interface PieChartControllerOutputProps {
  pieChartRef: RefObject<HTMLCanvasElement>;
}

export interface PieChartViewProps {
  pieChartRef: RefObject<HTMLCanvasElement>;
}
