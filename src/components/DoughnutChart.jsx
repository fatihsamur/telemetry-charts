import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = (props) => {
  const brokerData = props.data;
  const connectedClients =
    brokerData.length > 0 ? brokerData[brokerData.length - 1].connected : 0;

  const disconnectedClients =
    brokerData.length > 0 ? brokerData[brokerData.length - 1].disconnected : 0;
  const data = {
    labels: [`${connectedClients}`, `${disconnectedClients}`],
    datasets: [
      {
        label: '# of Clients',
        data: [connectedClients, disconnectedClients],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
