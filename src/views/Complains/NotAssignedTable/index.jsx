import { Table, Button } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const columns = (navigate, idUser = null) => {
  return [
    {
      title: 'Código de solicitud',
      dataIndex: 'Codigo',
      key: 'Codigo',
      render: (text) => (
        <Button type="link" className="pl-0" onClick={() => { if (!idUser) navigate(text, { replace: true }) }}>
          {text}
        </Button>
      ),
    },
    {
      ...(!idUser && {
        title: 'Dueño',
        dataIndex: 'IdUsuario',
        key: 'IdUsuario',
      }),
    },
    {
      title: 'Solicitud',
      dataIndex: 'Solicitud',
      key: 'solicitud',
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
      ...(!idUser && {
        title: 'Acción',
        key: 'action',
        render: (_, record) => (
          <Button type="link" className="pl-0" onClick={() => navigate(record.Codigo, { replace: true })}>
            Ver más
          </Button>
        ),
      })
    },
  ]
};

const NotAssignedTable = (props) => {
  const { idUser = null, refetch = null, setRefetch = () => {}} = props;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    if (refetch) {
      setLoading(true);
    }
  }, [refetch]);

  useEffect(() => {
    if (loading) {
      fetch('http://localhost:8000/api/solicitud')
      .then((res) => res.json())
      .then((data) => {
        const formatted = [];
        data.forEach((item) => {
          if (idUser && idUser === item.IdUsuario) {
            const object = item;
            item.key = item.IdSolicitud;
            formatted.push(object);
          } else {
            const object = item;
            item.key = item.IdSolicitud;
            formatted.push(object);
          }
        })
        setDataSource(formatted);
        setLoading(false);
        setRefetch(false);
      });
    }
  }, [idUser, loading, setRefetch]);
  
  return (
    <Table columns={columns(navigate, idUser)} dataSource={dataSource} loading={loading} pagination={false} />
  )
}

export default NotAssignedTable;