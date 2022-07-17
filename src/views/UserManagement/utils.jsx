/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography, Popconfirm } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import moment from 'moment';

export const columns = ({isEditing, save, cancel, editingKey, edit}) => [
  {
    title: 'Id',
    dataIndex: 'IdUsuario',
    key: 'Id',
  },
  {
    title: 'Nombre',
    dataIndex: 'nombreUsuario',
    key: 'nombreUsuario',
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
    title: 'Estado',
    dataIndex: 'IdEstadoUsuario',
    key: 'IdEstadoUsuario',
    editable: true,
  },
  {
    title: 'Rol',
    dataIndex: 'IdRol',
    key: 'IdRol',
    editable: true,
  },
  {
    title: 'Acción',
    key: 'action',
    render: (_, record) => {
      const editable = isEditing(record);
      return editable ? (
        <span>
          <Typography.Link
            onClick={() => save(record.key)}
            style={{
              marginRight: 8,
            }}
          >
            Save
          </Typography.Link>
          <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
            <a>Cancel</a>
          </Popconfirm>
        </span>
      ) : (
        <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)} className="text-center">
          <EditOutlined />
        </Typography.Link>
      );
    },
  }
]