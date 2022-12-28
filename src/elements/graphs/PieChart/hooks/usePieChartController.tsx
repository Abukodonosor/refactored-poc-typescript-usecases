import { useEffect, useRef } from 'react';
import { Chart, ChartOptions, ChartData, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  PieChartControllerInputProps,
  PieChartControllerOutputProps,
  PieChartViewProps,
} from '../types';
import { pieChartMockedData } from '../../mockedData';

export const usePieChartController = ({}): PieChartControllerOutputProps => {
  const pieChartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (pieChartRef.current) {
      new Chart(pieChartRef.current, {
        type: 'pie',
        data: pieChartMockedData,
        options,
        plugins: [ChartDataLabels, Tooltip, Legend],
      });
    }
  }, [pieChartRef]);

  return { pieChartRef };
};

const options: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 10,
      bottom: 15,
    },
  },
  plugins: {
    datalabels: {
      color: 'black',
      font: { size: 14 },
    },
    tooltip: {
      enabled: false,
    },
  },
};
