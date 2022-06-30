/* eslint-disable jsx-a11y/anchor-is-valid */
import { Table, Space, Tag } from 'antd';
import 'moment/locale/es';
import moment from 'moment';

moment.locale('es');

const columns = [
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
            let color = tag.length > 7 ? 'green' : 'geekblue';
  
            if (tag === 'rechazado') {
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
          <a>Descargar</a>
        </Space>
      ),
    },
];

const data = [
    {
        key: '1',
        codigo: '123456',
        fecha: moment().format('DD/MM/yyyy'),
        tipo: 'New York No. 1 Lake Park',
        estado: ['aprovado'],
    },
    {
        key: '2',
        codigo: '123456',
        fecha: moment().format('DD/MM/yyyy'),
        tipo: 'New York No. 1 Lake Park',
        estado: ['enviado'],
    },
    {
        key: '3',
        codigo: '123456',
        fecha: moment().format('DD/MM/yyyy'),
        tipo: 'New York No. 1 Lake Park',
        estado: ['rechazado'],
    },
];

const ComplainsTable = () => {
  return (
    <Table columns={columns} dataSource={data} pagination={false} />
  )
}

export default ComplainsTable;