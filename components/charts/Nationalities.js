import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend
);

const Nationalities = ({ nationalities }) => {
  //const DATA_COUNT = nationalities.length;
  const data = {
    labels: Object.keys(nationalities.nationality), //['Male', 'Female', 'Diverse'],
    datasets: [
      {
        label: "# of Applicants",
        data: Object.values(nationalities.nationality),
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        // borderColor: [
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    // maintainAspectRatio: false,
    // responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      colorschemes: {
        scheme: 'brewer.Spectral111'
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} height={250} />
    </div>
  );
};

export default Nationalities;
