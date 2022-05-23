import React from 'react';
import 'chartjs-adapter-moment';
import ChartStreaming from 'chartjs-plugin-streaming';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  ChartStreaming
);

const Clients = (props) => {
  const brokerData = props.data;
  console.log(brokerData);
  const data = {
    datasets: [
      {
        label: 'Maximum Connected Clients',
        data: [],
        borderDash: [8, 4],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Current Connected Clients',
        data: [],
        borderDash: [8, 4],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Rejected',
        data: [],
        borderDash: [8, 4],
        borderColor: 'rgb(255, 99, 32)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
        text: 'Clients',
      },
    },
    scales: {
      x: {
        type: 'realtime',
        distribution: 'linear',
        realtime: {
          duration: '5000',
          unit: 'seconds',
          displayFormat: 'h:mm',
          refresh: 500,
          delay: 300,
          onRefresh: function (chart) {
            chart.data.datasets[0].data.push({
              x: moment(),
              y: brokerData[brokerData.length - 1].maxConnected || 0,
            });
            chart.data.datasets[1].data.push({
              x: moment(),
              y: brokerData[brokerData.length - 1].connected || 0,
            });
            chart.data.datasets[2].data.push({
              x: moment(),
              y: brokerData[brokerData.length - 1].rejected || 0,
            });
          },
        },
        ticks: {
          displayFormats: 1,
          maxRotation: 0,
          minRotation: 0,
          stepSize: 1,
          maxTicksLimit: 30,
          minUnit: 'second',
          source: 'auto',
          autoSkip: true,
          callback: function (value) {
            return moment(value, 'HH:mm:ss').format('h:mm:ss');
          },
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
          max: 1,
        },
      },
    },
  };
  return <Line options={options} data={data} />;
};

export default Clients;
