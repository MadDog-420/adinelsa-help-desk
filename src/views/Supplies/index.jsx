/* eslint-disable jsx-a11y/anchor-is-valid */
import { Row, Tabs, Table, Space, Tag } from 'antd';
import 'moment/locale/es';
import moment from 'moment';
import './styles.scss';

moment.locale('es');

const columns1 = [
    {
      title: 'Código de reclamo',
      dataIndex: 'codigo',
      key: 'codigo',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Fecha de registro',
      dataIndex: 'fecha',
      key: 'fecha',
    },
    {
      title: 'Tipo de reclamo',
      dataIndex: 'tipo',
      key: 'tipo',
    },
    {
      title: 'Estado de reclamo',
      key: 'estado',
      dataIndex: 'estado',
      render: (_, { estado }) => (
        <>
          {estado.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
  
            if (tag === 'loser') {
              color = 'volcano';
            }
  
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Resultado',
      key: 'resultado',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
];

const data1 = [
    {
        key: '1',
        codigo: 'John Brown',
        fecha: moment().format('DD/MM/yyyy'),
        tipo: 'New York No. 1 Lake Park',
        estado: ['nice', 'developer'],
    },
    {
        key: '2',
        codigo: 'John Brown',
        fecha: moment().format('DD/MM/yyyy'),
        tipo: 'New York No. 1 Lake Park',
        estado: ['nice', 'developer'],
    },
    {
        key: '3',
        codigo: 'John Brown',
        fecha: moment().format('DD/MM/yyyy'),
        tipo: 'New York No. 1 Lake Park',
        estado: ['nice', 'developer'],
    },
];

const columns2 = [
    {
        title: 'Mes',
        dataIndex: 'mes',
        key: 'mes',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'N° de recibo',
        dataIndex: 'recibo',
        key: 'recibo',
    },
    {
        title: 'Consumo (KW/h)',
        dataIndex: 'consumo',
        key: 'consumo',
    },
    {
        title: 'Importe (S/.)',
        key: 'importe',
        dataIndex: 'importe',
        render: (value) => <a>{Number(value).toFixed(2)}</a>
    },
    {
        title: 'Fecha Emisión',
        key: 'fechEmision',
        dataIndex: 'fechEmision',
    },
    {
        title: 'Fecha Vencimiento',
        key: 'fechVencimiento',
        dataIndex: 'fechVencimiento',
    },
];

const data2 = [
    {
        key: '1',
        mes: moment().format('MMMM'),
        recibo: '123456789',
        consumo: 200,
        importe: 160.00,
        fechEmision: moment().format('DD/MM/yyyy'),
        fechVencimiento: moment().format('DD/MM/yyyy'),
    },
    {
        key: '2',
        mes: moment().format('MMMM'),
        recibo: '123456789',
        consumo: 200,
        importe: 160.00,
        fechEmision: moment().format('DD/MM/yyyy'),
        fechVencimiento: moment().format('DD/MM/yyyy'),
    },
    {
        key: '3',
        mes: moment().format('MMMM'),
        recibo: '123456789',
        consumo: 200,
        importe: 160.00,
        fechEmision: moment().format('DD/MM/yyyy'),
        fechVencimiento: moment().format('DD/MM/yyyy'),
    },
];

function Supplies(){
    return (
        <div className="supplies-container">
            <Row>
                <div className="title w-100 mb-3 text-white text-uppercase">Suministros</div>
            </Row>
            <Row gutter={[16, 16]} className="w-100">
                <Tabs defaultActiveKey="1" type="card" className="w-100">
                    <Tabs.TabPane tab="Mis últimos reclamos" key="1">
                        <Table columns={columns1} dataSource={data1} pagination={false} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Mis últimas facturas" key="2">
                        <Table columns={columns2} dataSource={data2} pagination={false} />
                    </Tabs.TabPane>
                </Tabs>
            </Row>
        </div>
    )
}

export default Supplies;