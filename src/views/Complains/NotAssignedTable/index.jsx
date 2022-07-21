import { Table } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { columns } from './../utils';

const NotAssignedTable = (props) => {
  const { idUser = null, refetch = null, setRefetch = () => {}, onlyProblems = false} = props;
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
        fetch('http://localhost:8000/api/detalleSolicitud')
          .then((res2) => res2.json())
          .then((data2) => {
            data.forEach((item) => {
              let bool = true;
              for(let i = 0; i < data2.length; i++) {
                if (item.Codigo === data2[i].Codigo) {
                  bool = false;
                }
              }
              if (bool) {
                const object = item;
                item.key = item.IdSolicitud;
                if (onlyProblems) {
                  if (item.SolicitudAsociada) formatted.push(object);
                } else {
                  formatted.push(object)
                }
              }
            });
            setDataSource(formatted);
            setLoading(false);
            setRefetch(false);
          });
      });
    }
  }, [idUser, loading, onlyProblems, setRefetch]);
  
  return (
    <Table columns={columns(navigate, idUser)} dataSource={dataSource} loading={loading} pagination={false} />
  )
}

export default NotAssignedTable;