import { Row, Col } from 'antd';
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
import { faker } from '@faker-js/faker';
import './styles.scss';

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
    },
    scales: {
        y: {
          min: 0,
        }
    },
    maintainAspectRatio: false,
};

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

export const data = {
    labels,
    datasets: [
      {
        label: 'Año 2021',
        data: labels.map(() => faker.datatype.number({ min: 50, max: 200 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: '#0eb2bb80',
      },
      {
        label: 'Año 2022',
        data: labels.map(() => faker.datatype.number({ min: 40, max: 200 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: '#ecbe2c80',
      },
    ],
};

function Dashboard() {
    return (
        <div className="dashboard-container">
            <Row>
                <div className="title w-100 mb-2">Inicio</div>
            </Row>
            <Row>
                <Col span={24}>
                    <div className="custom-shadow p-4 pb-8 bg-white" style={{maxHeight: '400px'}}>
                        <div className="text-bold text-center mb-2">Histórico de consumo</div>
                        <Bar options={options} data={data} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard;