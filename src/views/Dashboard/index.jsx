import { Row, Col } from 'antd';
import { faker } from '@faker-js/faker';
import './styles.scss';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const data = {
  labels,
  datasets: [
    {
      label: 'Incidencias',
      data: labels.map(() => faker.datatype.number({ min: 50, max: 200 })),
      backgroundColor: '#0eb2bb80',
    },
    {
      label: 'Requerimientos',
      data: labels.map(() => faker.datatype.number({ min: 40, max: 200 })),
      backgroundColor: '#ecbe2c80',
    },
  ],
};

const doughnutData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function Dashboard() {
  // const billingData = billingDataFormat(160, 140);
  return (
    <div className="dashboard-container">
      <Row>
        <div className="title w-100 mb-3 text-white text-uppercase">Inicio</div>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="custom-shadow p-3 pb-8 bg-white border-round" style={{maxHeight: '400px'}}>
            <div className="text-bold mb-2 font-large">Histórico de solicitudes</div>
            <BarChart data={data} />
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} className="h-initial">
          <div className="custom-shadow p-3 h-100 bg-white border-round">
            <div className="text-bold mb-2 font-large">Incidentes</div>
            <div className="billing mb-1">
              <DoughnutChart data={doughnutData} />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} className="h-initial">
          <div className="custom-shadow p-3 h-100 bg-white border-round">
            <div className="text-bold mb-2 font-large">Requerimientos</div>
            <div className="billing mb-1">
              <DoughnutChart data={doughnutData} />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} className="h-initial">
          <div className="custom-shadow p-3 h-100 bg-white border-round">
            <div className="text-bold mb-2 font-large">Problemas</div>
            <div className="billing mb-1">
              <DoughnutChart data={doughnutData} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard;