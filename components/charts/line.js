import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  scales: {
    y: {
      display: true,
     //type: 'logarithmic',
      text: 'log'
    },
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  maintainAspectRatio: true,
};

const LineChart = ({ daywise_apps }) => {
  const data = {
    labels: Object.keys(daywise_apps.daywise),
    datasets: [
      {
        label: "# of Applications",
        data: Object.values(daywise_apps.daywise),
        fill: true,
        backgroundColor: "rgb(101, 15, 241, 0.65)",
        borderColor: "rgba(101, 15, 241, 1)",
      },
    ],
  };
  return (
    <div>
      <Line data={data} options={options} height={250} />
    </div>
  );
};

export default LineChart;