import { Col, Tabs } from 'antd';
import NotAssignedTable from '../NotAssignedTable';
import ComplainsTable from './../ComplainsTable/index';

const AllComplains = (props) => {
  const { idRol, idUser } = props;

  return (
    <Col span={24}>
      <Tabs defaultActiveKey="1" type="card" className="w-100">
        {
          idRol === 2 && (
            <>
              <Tabs.TabPane tab="Sin asignar" key="1">
                <NotAssignedTable />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Problemas" key="2">
                <NotAssignedTable onlyProblems={true} />
              </Tabs.TabPane>
            </>
          )
        }
        {
          idRol > 2 && (
            <Tabs.TabPane tab="Asignadas a mí" key="1">
              <ComplainsTable idUser={idUser} />
            </Tabs.TabPane>
          )
        }
        <Tabs.TabPane tab={idRol === 2 ? 'Asignadas' : 'Todas'} key={idRol === 2 ? 3 : 2}>
          <ComplainsTable />
        </Tabs.TabPane>
      </Tabs>
    </Col>
  )
}

export default AllComplains;