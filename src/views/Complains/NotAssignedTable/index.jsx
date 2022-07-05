import { Table, Button } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const columns = (navigate) => [
  {
    title: 'Código de solicitud',
    dataIndex: 'Codigo',
    key: 'Codigo',
    render: (text) => (
      <Button type="link" className="pl-0" onClick={() => navigate(text, { replace: true })}>
        {text}
      </Button>
    ),
  },
  {
    title: 'Dueño',
    dataIndex: 'IdUsuario',
    key: 'IdUsuario',
  },
  {
    title: 'Fecha de registro',
    dataIndex: 'FechaRegistro',
    key: 'FechaRegistro',
    render: (text) => (
      <div>{moment(text).format('DD-MM-YYYY')}</div>
    ),
  },
  {
    title: 'Acción',
    key: 'action',
    render: (_, record) => (
      <Button type="link" className="pl-0" onClick={() => navigate(record.Codigo, { replace: true })}>
        Ver más
      </Button>
    ),
  },
];

const NotAssignedTable = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/solicitud')
      .then((res) => res.json())
      .then((data) => {
        const formatted = [];
        data.forEach((item) => {
          const object = item;
          item.key = item.IdSolicitud;
          formatted.push(object);
        })
        setDataSource(formatted);
        setLoading(false);
      });
  }, [loading])

  return (
    <Table columns={columns(navigate)} dataSource={dataSource} loading={loading} pagination={false} />
  )
}

export default NotAssignedTable;