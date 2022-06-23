import { Row, Col, Form, Button, Tabs, Spin } from 'antd';
import moment from 'moment';
import './styles.scss';
import MyComplains from './MyComplains/index';
import CustomForm from '../../components/CustomForm';
import { useState, useEffect } from 'react';

const itemList = (types) => [
	{
    component: 'singleSelect',
		label: 'Tipo de incidente',
		name: 'tipoIncidente',
		size: 'large',
    value: types[0].value,
    options: types,
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			span: 18, 
		},
	},
	{
		component: 'textArea',
		label: 'Detalle del Reclamo',
		name: 'detalleReclamo',
		size: 'large',
		rules: [
			{
				required: true,
        message: 'Campo requerido',
			},
		],
		responsive: {
			span: 24,
		},
	},
  {
		component: 'datePicker',
		label: 'Fecha de Emisión',
		name: 'fechaEmision',
		size: 'large',
    value: moment(),
		rules: [
			{
				required: true,
        message: 'Campo requerido',
			},
		],
		responsive: {
			span: 24,
		},
	},
];

function Complains() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    if (loading) {
      fetch('http://localhost:8000/api/tipoIncidencia')
			.then((res) => res.json())
			.then((data) => {
        const typeList = [];
        data.forEach(item => {
          typeList.push({ label: item.descripcion, value: item.cod_incidencia })
        });
				setTypes(typeList);
				setLoading(false);
			});
    }
  }, [loading]);

  const handleSubmit = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="complains-container">
      <Row>
        <div className="title w-100 mb-3 text-white text-uppercase">Reclamos</div>
      </Row>
      <Row gutter={[16, 16]}>
        <Tabs defaultActiveKey="1" type="card" className="w-100">
          <Tabs.TabPane tab="Nuevo reclamo" key="1">
            {
              loading ? (
                <Row justify="center">
                  <Col className="d-flex" style={{height: '400px'}}>
                    <Spin size="large" />
                  </Col>
                </Row>
              ) : (
                <CustomForm
                  form={form}
                  itemList={itemList(types)}
                  handleSubmit={handleSubmit}
                  requiredMark={false}
                  submitButton={(
                    <Row className="w-100 mt-4 mb-2" justify="center">
                      <Button type="primary" htmlType="submit" size="large">
                        Ingresar
                      </Button>
                    </Row>
                  )}
                />
              )
            }
          </Tabs.TabPane>
          <Tabs.TabPane tab="Mis reclamos" key="2">
            <MyComplains />
          </Tabs.TabPane>
        </Tabs>
      </Row>
    </div>
  )
}

export default Complains;