import { Table, Tag } from 'antd';
import { useState, useEffect } from 'react';
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

const ComplainsTable = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/detalleSolicitud')
      .then((res) => res.json())
      .then((data) => {
        const formatted = [];
        data.forEach((item) => {
          const object = item;
          item.key = item.Codigo;
          item.codigo = item.Codigo;
          item.owner = item.nombre;
          item.detalle = item.DetalleSolicitud;
          item.fecha = item.FechaRegistro;
          item.tipo = item.Tipo;
          item.estado = item.Estado;
          formatted.push(object);
        });
        setDataSource(formatted);
        setLoading(false);
      });
  }, [loading]);

  return (
    <Table columns={columns(navigate)} dataSource={dataSource} loading={loading} pagination={false} />
  )
}

export default ComplainsTable;