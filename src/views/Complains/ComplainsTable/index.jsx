import { Table, Tag } from 'antd';
import 'moment/locale/es';
import moment from 'moment';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

moment.locale('es');

const estados = {
  Registrado: 'blue',
  Activo: 'cyan',
  Suspendido: 'orange',
  Asignado: 'geekblue',
  Cerrado: 'red',
  Escalado: 'purple',
  Resuelto: 'green',
}

const columns = (navigate) => [
    {
      title: 'Código de solicitud',
      dataIndex: 'codigo',
      key: 'codigo',
      render: (text) => (
        <Button type="link" className="pl-0" onClick={() => navigate(text, { replace: true })}>
          {text}
        </Button>
      ),
    },
    {
      title: 'Dueño',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Detalle',
      dataIndex: 'detalle',
      key: 'detalle',
    },
    {
      title: 'Fecha de registro',
      dataIndex: 'fecha',
      key: 'fecha',
    },
    {
      title: 'Tipo de solicitud',
      dataIndex: 'tipo',
      key: 'tipo',
    },
    {
      title: 'Estado de solicitud',
      key: 'estado',
      dataIndex: 'estado',
      render: (text) => {
        const color = estados[text];
        return (
          <Tag color={color} key={text}>
            {text.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: 'Acción',
      key: 'action',
      render: (_, record) => (
        <Button type="link" className="pl-0" onClick={() => navigate(record.codigo, { replace: true })}>
          Ver más
        </Button>
      ),
    },
];

const solicitud = [{
  codigo: 'SO-001',
  owner: 2,
  ownerName: 'Frank Castle',
  detalle: 'Lorem ipsum',
  fechaEmision: '2016-01-01',
  tipo: 'Software',
  estado: 'Asignado',
  fechaActualizacion: null,
  actividadesSolucion: 'Lorem ipsum',
}];

const dataSource = (data) => {
  const formattedData = [];
  data.forEach((item, index) => {
    formattedData.push(
      {
        key: index,
        codigo: item.codigo,
        owner: item.ownerName,
        detalle: item.detalle,
        fecha: moment(item.fechaEmision).format('DD/MM/yyyy'),
        tipo: item.tipo,
        estado: item.estado,
      }
    )
  });
  return formattedData;
};

const ComplainsTable = () => {
  const navigate = useNavigate();
  return (
    <Table columns={columns(navigate)} dataSource={dataSource(solicitud)} pagination={false} />
  )
}

export default ComplainsTable;