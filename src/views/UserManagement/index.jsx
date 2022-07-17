import { Row, Col, Table, Form } from 'antd';
import { columns } from './utils';
import { useState, useEffect } from 'react';
import EditableCell from './../../components/EditableCell/index';

function UserManagement() {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(true);
  const [loadingRoles, setLoadingRoles] = useState(true);
  const [loadingEstados, setLoadingEstados] = useState(true);
  
  const [data, setData] = useState([]);
  const [dataRoles, setDataRoles] = useState([]);
  const [dataEstados, setDataEstados] = useState([]);

  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
    if (loading) {
      fetch('http://localhost:8000/api/usuario')
			.then((res) => res.json())
			.then((data) => {
				data.forEach((item) => {
          setData((old) => [...old,
            {
              ...item,
              key: item.IdUsuario,
              nombreUsuario: `${item.nombre} ${item.ape_paterno} ${item.ape_materno}`,
            }
          ])
        })
				setLoading(false);
			});
    }
  }, [loading]);

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
				data.forEach((item) => {
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