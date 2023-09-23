import React from 'react';
import { Chart } from 'react-chartjs-2';

const RadarChart = () => {
  // Data for the directed graph
  const graphData = {
    nodes: [
      { id: 'Laws', label: 'Laws', shape: 'box' },
      { id: 'CriminalLaws', label: 'Criminal Laws', shape: 'ellipse' },
      { id: 'CivilLaws', label: 'Civil Laws', shape: 'ellipse' },
      { id: 'TaxLaws', label: 'Tax Laws', shape: 'ellipse' },
      { id: 'EnvironmentalLaws', label: 'Environmental Laws', shape: 'ellipse' },
    ],
    edges: [
      { from: 'Laws', to: 'CriminalLaws' },
      { from: 'Laws', to: 'CivilLaws' },
      { from: 'Laws', to: 'TaxLaws' },
      { from: 'Laws', to: 'EnvironmentalLaws' },
    ],
  };

  // Create a new graph using Chart.js
  const chartConfig = {
    type: 'graph',
    data: {
      labels: [],
      datasets: [
        {
          data: graphData,
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: 'category', // Use the category scale for the X-axis
          beginAtZero: true,
        },
        y: {
          type: 'category', // Use the category scale for the Y-axis
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <Chart type="graph" data={chartConfig.data} options={chartConfig.options} />
    </div>
  );
};

export default RadarChart;