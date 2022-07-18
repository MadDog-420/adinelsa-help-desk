import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (item) =>
          `${item.dataset.label}: ${item.formattedValue}`,
      },
    },
  },
  scales: {
    y: {
      min: 0,
    },
  },
  maintainAspectRatio: false,
};

const BarChart = (props) => {
  const { data } = props;
  return (
    <Bar options={options} data={data} />
  )
}

export default BarChart;