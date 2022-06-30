import { Col } from 'antd';
import ComplainsTable from './../ComplainsTable/index';

const AllComplains = () => {

  return (
    <Col span={24}>
      <div className="p-3 bg-white border-round">
        <ComplainsTable />
      </div>
    </Col>
  )
}

export default AllComplains;