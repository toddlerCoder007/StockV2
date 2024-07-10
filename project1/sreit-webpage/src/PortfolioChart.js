import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PortfolioChart = ({ stocks }) => {
  const labels = stocks.map(stock => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: stocks.map(stock => parseFloat(stock.price)),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Distribution Yield (%)',
        data: stocks.map(stock => parseFloat(stock.distributionYield)),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
      {
        label: 'DPU',
        data: stocks.map(stock => parseFloat(stock.dpu)),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
      {
        label: 'NAV',
        data: stocks.map(stock => parseFloat(stock.nav)),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Property Yield (%)',
        data: stocks.map(stock => parseFloat(stock.propertyYield)),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Gearing Ratio (%)',
        data: stocks.map(stock => parseFloat(stock.gearingRatio)),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Portfolio Data Visualization',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PortfolioChart;
