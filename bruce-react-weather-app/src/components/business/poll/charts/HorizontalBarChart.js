import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const dataInfo = {
  labels: ['Growing', 'Stagnating', 'Recession', 'Depression'],
  datasets: [
    {
      label: 'Economy Future',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [0, 0, 0, 0]
    }
  ]
};

const HorizontalBarChart = ({ data }) => {
  dataInfo.datasets[0].data = data;
  return (
    <div className="ml-2">
      <HorizontalBar data={dataInfo}
        width={550}
        height={280}
        options={
          {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              labels: {
                fontColor: "white",
                fontSize: 12
              }
            },
            scales: {
              yAxes: [{
                ticks: {
                  fontColor: "white",
                  fontSize: 12,
                  stepSize: 5,
                  beginAtZero: true
                }
              }],
              xAxes: [{
                ticks: {
                  fontColor: "white",
                  fontSize: 12,
                  stepSize: 5,
                  beginAtZero: true
                }
              }]
            }
          }
        }
      />
    </div>
  )
}

export default HorizontalBarChart 
