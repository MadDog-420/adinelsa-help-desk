import { Col, Tabs } from 'antd';
import NotAssignedTable from '../NotAssignedTable';
import ComplainsTable from './../ComplainsTable/index';

const AllComplains = (props) => {
  const { idRol } = props;

  return (
    <Col span={24}>
      <Tabs defaultActiveKey="1" type="card" className="w-100">
        {
          idRol === 1 && (
            <Tabs.TabPane tab="Sin asignar" key="1">
              <NotAssignedTable />
            </Tabs.TabPane>
          )
        }
        <Tabs.TabPane tab={idRol === 1 ? 'Asignadas' : 'Todas'} key={idRol === 1 ? 2 : 1}>
          <ComplainsTable />
        </Tabs.TabPane>
      </Tabs>
    </Col>
  )
}

export default AllComplains;