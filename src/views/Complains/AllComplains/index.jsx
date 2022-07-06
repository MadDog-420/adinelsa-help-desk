import { Col, Tabs } from 'antd';
import NotAssignedTable from '../NotAssignedTable';
import ComplainsTable from './../ComplainsTable/index';

const AllComplains = (props) => {
  const { idRol } = props;

  return (
    <Col span={24}>
      <Tabs defaultActiveKey="1" type="card" className="w-100">
        {
          idRol === 2 && (
            <Tabs.TabPane tab="Sin asignar" key="1">
              <NotAssignedTable />
            </Tabs.TabPane>
          )
        }
        <Tabs.TabPane tab={idRol === 2 ? 'Asignadas' : 'Todas'} key={idRol === 2 ? 2 : 1}>
          <ComplainsTable />
        </Tabs.TabPane>
      </Tabs>
    </Col>
  )
}

export default AllComplains;