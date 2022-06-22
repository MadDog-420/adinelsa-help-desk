/* eslint-disable jsx-a11y/anchor-is-valid */
import { Table } from 'antd';
import 'moment/locale/es';
import moment from 'moment';

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

function MySupplies() {
  return (
    <Table columns={columns2} dataSource={data2} pagination={false} />
  )
}

export default MySupplies;