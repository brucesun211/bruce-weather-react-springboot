import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const dataInfo = {
  labels: [
    'Rise',
    'Down',
    'Same'
  ],
  datasets: [{
    data: [0, 0, 0],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

const DoughnutChart = ({ data }) => {
  dataInfo.datasets[0].data = data;
  return (
    <div>
      <div className="ml-5">
        <Doughnut data={dataInfo}
          width={280}
          height={280}
          options={
            {
              legend: {
                labels: {
                  fontColor: "white",
                  fontSize: 12
                }
              }
            }
          }
        />
      </div>
    </div>
  )
};

export default DoughnutChart;
