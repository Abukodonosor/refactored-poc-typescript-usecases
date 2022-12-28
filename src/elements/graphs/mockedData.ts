import { ChartData } from 'chart.js';
import { faker } from '@faker-js/faker';

export const getVerticalBarChartMockedData = (labels: string[]): ChartData => ({
  labels,
  datasets: [
    {
      label: 'edpem sales',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'edbic sales',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 2000 })),
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
});

export const getBarChartMockedData = (labels: string[]): ChartData => ({
  labels,
  datasets: [
    {
      label: 'Orders',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
});

export const pieChartMockedData: ChartData = {
  labels: ['unsatisfied', 'acceptable', 'unknown', 'satisfied', 'pending'],
  datasets: [
    {
      label: '# of Votes',
      data: [
        faker.datatype.number({ min: 1, max: 25 }),
        faker.datatype.number({ min: 1, max: 25 }),
        faker.datatype.number({ min: 1, max: 40 }),
        faker.datatype.number({ min: 1, max: 50 }),
        faker.datatype.number({ min: 1, max: 30 }),
      ],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
      ],
      borderWidth: 1,
    },
  ],
};
