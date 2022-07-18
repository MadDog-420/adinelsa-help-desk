import { Row, Col, Table, Form } from 'antd';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from './../../context/index';
import { columns } from './utils';
import EditableCell from './../../components/EditableCell/index';

function UserManagement() {
  const { state } = useContext(AppContext);
  const { me } = state;
  const { userInformation } = me;
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(true);
  const [loadingRoles, setLoadingRoles] = useState(true);
  const [loadingEstados, setLoadingEstados] = useState(true);
  
  const [data, setData] = useState([]);
  const [dataRoles, setDataRoles] = useState([]);
  const [dataEstados, setDataEstados] = useState([]);

  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
    if (loading && dataEstados.length && dataRoles.length) {
      fetch('http://localhost:8000/api/usuario')
			.then((res) => res.json())
			.then((data) => {
				data.filter((item) => item.IdUsuario !== userInformation.IdUsuario).forEach((item) => {
          setData((old) => [...old,
            {
              ...item,
              key: item.IdUsuario,
              nombreUsuario: `${item.nombre} ${item.ape_paterno} ${item.ape_materno}`,
              IdEstadoUsuario: dataEstados.filter((estado) => estado.value === item.IdEstadoUsuario)[0].label,
              IdRol: dataRoles.filter((rol) => rol.value === item.IdRol)[0].label,
            }
          ])
        })
				setLoading(false);
			});
    }
  }, [dataEstados, dataRoles, loading, userInformation]);

  useEffect(() => {
    if (loadingEstados) {
      fetch('http://localhost:8000/api/estadoUsuario')
			.then((res) => res.json())
			.then((data) => {
				data.forEach((item) => {
          setDataEstados((old) => [...old,
            {
              value: item.IdEstadoUsuario,
              label: item.Estado,
            }
          ])
        })
				setLoadingEstados(false);
			});
    }
  }, [loadingEstados]);

  useEffect(() => {
    if (loadingRoles) {
      fetch('http://localhost:8000/api/roles')
			.then((res) => res.json())
			.then((data) => {
				data.filter((item) => item.IdRol !== 2).forEach((item) => {
          setDataRoles((old) => [...old,
            {
              value: item.IdRol,
              label: item.descripcion,
            }
          ])
        })
				setLoadingRoles(false);
			});
    }
  }, [loadingRoles]);

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();

      const toCompare = data.filter((item) => item.key === key)[0];
      if (row.IdEstadoUsuario !== toCompare.IdEstadoUsuario) {
        row.IdEstadoUsuario = dataEstados.filter((item) => item.value === row.IdEstadoUsuario)[0].label;
      }
      if (row.IdRol !== toCompare.IdRol) {
        row.IdRol = dataRoles.filter((item) => item.value === row.IdRol)[0].label;
      }

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
      
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const setOptions = (dataIndex) => {
    if (dataIndex === 'IdEstadoUsuario') {
      return dataEstados;
    }
    if (dataIndex === 'IdRol') {
      return dataRoles;
    }
    return null;
  }

  const mergedColumns = columns({
    isEditing, save, cancel, editingKey, edit
  }).map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'IdEstadoUsuario' || col.dataIndex === 'IdRol' ? 'singleSelect' : 'readOnly',
        dataIndex: col.dataIndex,
        options: setOptions(col.dataIndex),
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div className="complains-container">
      <Row>
        <div className="title w-100 mb-3 text-white text-uppercase">Administración de usuarios</div>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="custom-shadow p-3 bg-white border-round">
            <Form form={form} component={false}>
              <Table
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                loading={loading}
                columns={mergedColumns}
                dataSource={data}
                rowClassName="editable-row"
                pagination={false}
              />
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default UserManagement;