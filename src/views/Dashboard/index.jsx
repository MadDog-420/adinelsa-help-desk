import { Row, Col } from 'antd';
import { 
  ThunderboltOutlined, FileOutlined, CaretUpOutlined, CaretDownOutlined
} from '@ant-design/icons';
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
import StateComponent from '../../components/StateComponent';

const getComparison = (fValue, sValue) => {
  if (fValue > sValue) {
    return 'lost';
  } else if (fValue < sValue) {
    return 'win';
  }
  return '';
}

const getPercentage = (fValue, sValue) => {
  if (fValue > sValue) {
    return Number((fValue - sValue)*100/sValue).toFixed(1);
  } else if (fValue < sValue) {
    return Number((sValue - fValue)*100/fValue).toFixed(1);
  }
  return '';
}

const billingDataFormat = (fValue, sValue) => ({
  current: 'S/.'+fValue,
  last: 'S/.'+sValue,
  percent: getPercentage(fValue, sValue),
  state: getComparison(fValue, sValue),
})

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
          `${item.dataset.label}: ${item.formattedValue} KWh`,
      },
    },
  },
  scales: {
    y: {
      min: 0,
      title: {
        display: true,
        text: 'KWh',
      },
    },
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
      backgroundColor: '#0eb2bb80',
    },
    {
      label: 'Año 2022',
      data: labels.map(() => faker.datatype.number({ min: 40, max: 200 })),
      backgroundColor: '#ecbe2c80',
    },
  ],
};

function Dashboard() {
  const billingData = billingDataFormat(160, 140);
  return (
    <div className="dashboard-container">
      <Row>
        <div className="title w-100 mb-3 text-white text-uppercase">Inicio</div>
      </Row>
      <Row gutter={[16, 16]} className="w-100">
        <Col span={24}>
          <div className="custom-shadow p-3 pb-8 bg-white border-round" style={{maxHeight: '400px'}}>
            <div className="text-bold mb-2">Histórico de consumo</div>
            <Bar options={options} data={data} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} className="h-initial">
          <div className="custom-shadow p-3 h-100 bg-white border-round">
            <div className="text-bold mb-2">Última facturación</div>
            <div className="billing font-xx-large mb-1">
              <ThunderboltOutlined />
              {' '}
              {billingData.current}
              <span className={`comparison ml-2 font-regular ${billingData.state}`}>
                {`${billingData.percent} %`}
                {
                  billingData.state === 'lost' && <CaretUpOutlined />
                }
                {
                  billingData.state === 'win' && <CaretDownOutlined />
                }
              </span>
            </div>
            <div className="font-regular">{`Mes anterior: ${billingData.last}`}</div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} className="h-initial">
          <div className="custom-shadow p-3 h-100 bg-white border-round">
            <div className="text-bold mb-2">Última operación</div>
            <div className="font-x-large mb-1"><FileOutlined /> Lorem ipsum dolor sit amet</div>
            <div className="font-regular">Estado: <StateComponent type={'warning'}>En revisión</StateComponent></div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard;