import { useState, useEffect, useRef } from 'react';
import { Chart, ChartOptions, ChartData, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { BarChartControllerInputProps, BarChartViewProps } from '../types';
import { getBarChartMockedData, getVerticalBarChartMockedData } from '../../mockedData';

export const useBarChartController = ({
  labels,
  refresh,
  reset,
  isVertical,
}: BarChartControllerInputProps): BarChartViewProps => {
  const barChartRef = useRef<HTMLCanvasElement>(null);
  const [chart, setChart] = useState<Chart>();

  // To be removed once real data is available
  const generateData: () => ChartData = () =>
    isVertical ? getVerticalBarChartMockedData(labels) : getBarChartMockedData(labels);

  useEffect(() => {
    if (refresh && chart) {
      reset(false);
      chart.data = generateData();
      chart.update();
    }
  }, [refresh]);

  useEffect(() => {
    if (barChartRef.current) {
      setChart(
        new Chart(barChartRef.current, {
          type: 'bar',
          data: generateData(),
          options: isVertical ? verticalBarChartOptions : barChartOptions,
          plugins: [ChartDataLabels, Title, Tooltip, Legend],
        }),
      );
    }
  }, [barChartRef]);

  return { barChartRef };
};

const verticalBarChartOptions: ChartOptions = {
  plugins: {
    legend: {
      position: 'top',
    },
    datalabels: {
      display: true,
      color: 'black',
      align: 'start',
      anchor: 'end',
      font: { size: 14 },
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      ticks: {
        padding: 20,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const barChartOptions: ChartOptions = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  plugins: {
    legend: {
      position: 'right',
    },

    datalabels: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};
