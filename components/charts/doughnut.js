import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend
);

const DoughnutChart = ({ genderData }) => {
  const data = {
    labels: Object.keys(genderData.gender), //['Male', 'Female', 'Diverse'],
    datasets: [
      {
        label: '# of Applicants',
        data: Object.values(genderData.gender),
        backgroundColor: ['#45b69c', 'rgb(101, 15, 241)', 'rgba(255, 159, 64, 1)', 'rgb(255,0,255)"'],
        borderColor: ['#45b69c', 'rgb(101, 15, 241)', 'rgba(255, 159, 64, 1)', 'rgb(255,0,255)"'],
        borderWidth: 1
      }
    ]
  };

  const options = {
    // maintainAspectRatio: false,
    // responsive: true,
  };

  return (
    <div>
      <Doughnut data={data} options={options} height={250} />
    </div>
  );
};


export default DoughnutChart;
