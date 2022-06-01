import { Row, Table } from 'antd';

const columns = [
    {
      title: 'Código de suministro',
      dataIndex: 'codigo',
      key: 'codigo',
      render: (text) => <a>{text}</a>,
    },
    {
        title: 'Lectura Medidor',
        dataIndex: 'tipo',
        key: 'tipo',
      },
    {
      title: 'Fecha de registro',
      dataIndex: 'fecha',
      key: 'fecha',
    },
];

function Orders() {
    
    return (
        <div className="supplies-container">
            <Row>
                <div className="title w-100 mb-3 text-white text-uppercase">Lista de órdenes</div>
            </Row>
            <Row gutter={[16, 16]}>
                <Table columns={columns} pagination={false} />
            </Row>
        </div>
    )
}

export default Orders;