import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = (props) => {
  const { data } = props;
  return (
    <Doughnut data={data} />
  );
}

export default DoughnutChart;