import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

/*
const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};*/


const options = {
  scale: {
    ticks: {
      beginAtZero: true,
      min: 0,
      max: 125,
      step: 1
    }
  },

  elements: {
    line: {
      borderWidth: 10
    }
  }
  // maintainAspectRatio: false,
};



const RadarChart = ({ languages }) => {
    const data = {
      labels: Object.keys(languages.languages),
      datasets: [
        {
          label: '# of Applicants',
          data: Object.values(languages.languages),
          backgroundColor: 'rgba(101, 15, 241, 0.2)',
          borderColor: 'rgba(101, 15, 241, 1)',
          borderWidth: 1
        }
      ]
    };
  return (
    <div>
      <Radar data={data} options={options} height={850} />
    </div>
  );
};

export default RadarChart;