import { Table } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { columns } from './../utils';

const MyComplainsTable = (props) => {
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
          }
        });
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

export default MyComplainsTable;