import { useContext, useEffect, useState } from "react";
import { AppContext } from './../../context';
import { Row, Col, Form, message, Button } from 'antd';
import moment from 'moment';
import CustomForm from "../../components/CustomForm";

const itemList = (types, userInformation) => [
  {
		label: 'Nombre',
		name: 'name',
		size: 'large',
    value: userInformation.name,
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 8,
		},
	},
  {
		label: 'Apellido paterno',
		name: 'apellidoPaterno',
		size: 'large',
    value: userInformation.apellidoPaterno,
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 8,
		},
	},
  {
		label: 'Apellido materno',
		name: 'apellidoMaterno',
		size: 'large',
    value: userInformation.apellidoMaterno,
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 8,
		},
	},
	{
    component: 'singleSelect',
		label: 'Tipo de documento',
		name: 'tipoDocumento',
		size: 'large',
    value: userInformation.tipoDocumento,
    options: types,
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 8, 
		},
	},
  {
		label: 'Número de documento',
		name: 'numeroDocumento',
		size: 'large',
    value: userInformation.numeroDocumento,
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 8, 
		},
	},
  {
		component: 'datePicker',
		label: 'Fecha de nacimiento',
		name: 'fechaNacimiento',
		size: 'large',
    value: moment(userInformation.fechaNacimiento),
    disabled: true,
		rules: [
			{
				required: true,
        message: 'Campo requerido',
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 8,
		},
	},
  {
		label: 'Correo',
		name: 'email',
		size: 'large',
    value: userInformation.email,
    disabled: true,
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 16, 
		},
	},
  {
		label: 'Teléfono',
		name: 'telefono',
		size: 'large',
    value: userInformation.telefono,
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 8, 
		},
	},
	{
		label: 'Dirección',
		name: 'direccion',
		size: 'large',
    value: userInformation.direccion,
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			span: 24, 
		},
	},
  {
    component: 'singleSelect',
		label: 'Departamento',
		name: 'departamento',
		size: 'large',
    value: userInformation.departamento,
    placeholder: 'Selecciona un departamento',
    options: [
      {
        label: 'Amazonas',
        value: '1',
      },
    ],
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 8, 
		},
	},
  {
    component: 'singleSelect',
		label: 'Provincia',
		name: 'provincia',
		size: 'large',
    value: userInformation.provincia,
    placeholder: 'Selecciona una provincia',
    options: [
      {
        label: 'Chachapoyas',
        value: '1',
      },
    ],
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 8, 
		},
	},
  {
    component: 'singleSelect',
		label: 'Distrito',
		name: 'distrito',
		size: 'large',
    value: userInformation.distrito,
    placeholder: 'Selecciona un distrito',
    options: [
      {
        label: 'Chachapoyas',
        value: '1',
      },
    ],
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 8, 
		},
	},
];

function MyAccount(){
  const { state } = useContext(AppContext);
  const { me } = state;
  const { userInformation } = me;

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
			})
      .catch(() => message.error('Error de conexión'));
    }
  }, [loading]);

  return (
    <div className="account-container">
      <Row>
        <div className="title w-100 mb-3 text-white text-uppercase">Mi cuenta</div>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="custom-shadow p-3 bg-white border-round">
            <CustomForm
              loading={loading}
              form={form}
              requiredMark={false}
              itemList={itemList(types, userInformation)}
              submitButton={(
                <Col span={24}>
                  <Row justify="end">
                    <Col flex="200px">
                      <Button type="primary" htmlType="submit" size="large" className="w-100">
                        Guardar
                      </Button>
                    </Col>
                  </Row>
                </Col>
              )}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default MyAccount;