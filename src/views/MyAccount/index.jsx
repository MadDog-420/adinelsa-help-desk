import { useContext, useEffect, useState } from "react";
import { AppContext } from './../../context';
import { Row, Col, Form, Button } from 'antd';
import moment from 'moment';
import CustomForm from "../../components/CustomForm";
import { getData, transformToOptions } from './../../utils/tools';

const itemList = (types, departamentos, provincias, distritos, userInformation) => [
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
    options: departamentos,
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
    options: provincias,
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
    options: distritos,
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
  const [loadingDep, setLoadingDep] = useState(true);
  const [loadingProv, setLoadingProv] = useState(true);
  const [loadingDist, setLoadingDist] = useState(true);

  const [types, setTypes] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [distritos, setDistritos] = useState([]);

  useEffect(() => {
    getData(loading, setLoading, 'http://localhost:8000/api/documento', (data) => {
      setTypes(transformToOptions(data, 'tipo_doc', 'IdDocumento'));
    })
  }, [loading]);

  useEffect(() => {
    getData(loadingDep, setLoadingDep, 'http://localhost:8000/api/departamento', (data) => {
      setDepartamentos(transformToOptions(data, 'departamento', 'IdDepartamento'));
    })
  }, [loadingDep]);

  useEffect(() => {
    getData(loadingProv, setLoadingProv, 'http://localhost:8000/api/provincia', (data) => {
      setProvincias(transformToOptions(data, 'provincia', 'IdProvincia'));
    })
  }, [loadingProv]);

  useEffect(() => {
    getData(loadingDist, setLoadingDist, 'http://localhost:8000/api/distrito', (data) => {
      setDistritos(transformToOptions(data, 'distrito', 'IdDistrito'));
    })
  }, [loadingDist]);

  return (
    <div className="account-container">
      <Row>
        <div className="title w-100 mb-3 text-white text-uppercase">Mi cuenta</div>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="custom-shadow p-3 bg-white border-round">
            <CustomForm
              loading={loading || loadingDep || loadingProv || loadingDist}
              form={form}
              requiredMark={false}
              itemList={itemList(types, departamentos, provincias, distritos, userInformation)}
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