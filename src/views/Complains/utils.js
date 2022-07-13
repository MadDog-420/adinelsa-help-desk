import { Button } from 'antd';
import moment from 'moment';

export const columns = (navigate, idUser = null) => {
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