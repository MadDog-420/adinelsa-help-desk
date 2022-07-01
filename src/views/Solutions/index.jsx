import { Row, Tabs } from 'antd';
import './styles.scss';
import SolutionTable from './SolutionTable/index';

function Supplies(){
  return (
    <div className="supplies-container">
      <Row>
        <div className="title w-100 mb-3 text-white text-uppercase">Soluciones</div>
      </Row>
      <Row gutter={[16, 16]}>
        <Tabs defaultActiveKey="1" type="card" className="w-100">
          <Tabs.TabPane tab="Nuevo suministro" key="1">
            <div>Solutions form</div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Mis suministros" key="2">
            <SolutionTable />
          </Tabs.TabPane>
        </Tabs>
      </Row>
    </div>
  )
}

export default Supplies;