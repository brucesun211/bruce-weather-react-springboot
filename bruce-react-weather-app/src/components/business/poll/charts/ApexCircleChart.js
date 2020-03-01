import React from 'react';
import Chart from "react-apexcharts";

const dataInfo = {
  series: [44, 55, 13],
  options: {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Rise',
      'Down',
      'Same'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
};


const ApexCircleChart = ({ data }) => {
  console.log(data, data);
  dataInfo.series = data;
  return (
    <div>
      <Chart
        options={dataInfo.options}
        series={dataInfo.series}
        type="pie"
        width="500"
      />
    </div>
  )
};

export default ApexCircleChart;
