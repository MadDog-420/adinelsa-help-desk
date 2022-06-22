/* eslint-disable jsx-a11y/anchor-is-valid */
import { Row, Tabs } from 'antd';
import './styles.scss';
import MySupplies from './MySupplies/index';

function Supplies(){
  return (
    <div className="supplies-container">
      <Row>
        <div className="title w-100 mb-3 text-white text-uppercase">Suministros</div>
      </Row>
      <Row gutter={[16, 16]}>
        <Tabs defaultActiveKey="1" type="card" className="w-100">
          <Tabs.TabPane tab="Nuevo suministro" key="1">
            <div>Supplies form</div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Mis suministros" key="2">
            <MySupplies />
          </Tabs.TabPane>
        </Tabs>
      </Row>
    </div>
  )
}

export default Supplies;