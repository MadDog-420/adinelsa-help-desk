import { Row, Col, Form, Image, Button, message } from 'antd';
import RegisterImage from '../../../media/images/registration_no_bg.png';
import  Logo from '../../../media/adinelsa-logo.png';
import '../styles.scss';
import { useNavigate } from 'react-router-dom';
import routesDictionary from './../../../routes/routesDict';
import CustomForm from '../../../components/CustomForm';
import { useState, useContext } from 'react';
import { setAuthToken } from '../../../utils/tools';
import { AppContext } from './../../../context/index';

const itemList = [
  {
		name: 'nombre',
		size: 'large',
		rules: [
			{
				required: true,
        message: 'Campo requerido',
			},
		],
		placeholder: 'Nombre',
		responsive: {
			span: 24,
		},
	},
	{
		name: 'ape_paterno',
		size: 'large',
		placeholder: 'Apellido paterno',
		rules: [
			{
				required: true,
        message: 'Campo requerido',
			},
		],
		responsive: {
			xs: 24, sm: 24, xl: 12, 
		},
	},
  {
		name: 'ape_materno',
		size: 'large',
		placeholder: 'Apellido materno',
		rules: [
			{
				required: true,
        message: 'Campo requerido',
			},
		],
		responsive: {
			xs: 24, sm: 24, xl: 12, 
		},
	},
  {
		name: 'telefono',
		size: 'large',
		rules: [
			{
				required: true,
        message: 'Campo requerido',
			},
		],
		placeholder: 'Número de teléfono',
		responsive: {
			span: 24,
		},
	},
  {
    component: 'singleSelect',
		name: 'IdDocumento',
		size: 'large',
    value: 1,
    options: [
      {
        label: 'DNI',
        value: 1,
      },
      {
        label: 'RUC',
        value: 2,
      },
      {
        label: 'CARNET DE EXTRANJERÍA',
        value: 3,
      }
    ],
		rules: [
			{
				required: true,
        message: 'Campo requerido',
			},
		],
		responsive: {
			xs: 24, sm: 24, xl: 12, 
		},
	},
  {
		name: 'num_documento',
		size: 'large',
    placeholder: 'Documento',
		rules: [
			{
				required: true,
        message: 'Campo requerido',
			},
		],
		responsive: {
			xs: 24, sm: 24, xl: 12, 
		},
	},
  {
		name: 'correo_electronico',
		size: 'large',
		rules: [
			{
				required: true,
        message: 'Campo requerido',
			},
		],
		placeholder: 'Correo electrónico',
		responsive: {
			span: 24,
		},
	},
  {
    component: 'password',
		name: 'contrasenia',
		size: 'large',
    placeholder: 'Contraseña',
    hasFeedback: true,
		rules: [
			{
				required: true,
        message: 'Campo requerido',
			},
		],
		responsive: {
			xs: 24, sm: 24, xl: 12, 
		},
	},
  {
    component: 'password',
		name: 'confirmPassword',
		size: 'large',
    placeholder: 'Confirmar contraseña',
    dependencies: ['password'],
    hasFeedback: true,
		rules: [
			{
				required: true,
        message: 'Campo requerido',
			},
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('contrasenia') === value) {
            return Promise.resolve();
          }

          return Promise.reject(new Error('Las contraseñas no son iguales'));
        },
      }),
		],
		responsive: {
			xs: 24, sm: 24, xl: 12, 
		},
	},
];

function Register(props) {
  const { setLoginState } = props;
  const { dispatch } = useContext(AppContext);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [loadingUpload, setLoadingUpload] = useState(false);

  const goToLogin = () => {
    navigate(routesDictionary.login.router);
  }

  const loginUser = (values) => {
    setLoadingUpload(true);
    const config = {
			method: 'POST',
			body: JSON.stringify(values),
			headers:{
				'Content-Type': 'application/json',
			},
		}

    fetch('http://localhost:8000/api/login', config)
			.then((res) => res.json())
			.then((data) => {
				if (data.id) {
          message.success('Ingresando...');
          setAuthToken(data.id);
          dispatch({ type: 'refetch' });
					setLoginState(true);
				}
				setLoadingUpload(false);
			})
      .catch(() => setLoadingUpload(false));
  };

  const registerUser = (values) => {
    setLoadingUpload(true);
    const config = {
			method: 'POST',
			body: JSON.stringify(values),
			headers:{
				'Content-Type': 'application/json',
			},
		}

    fetch('http://localhost:8000/api/usuario', config)
			.then((res) => res.json())
			.then((data) => {
				if (data.email) {
          message.success('Registro exitoso');
          loginUser({
            email: data.email,
            password: values.contrasenia,
          });
				} else {
					message.error('Error en el registro');
				}
				setLoadingUpload(false);
			})
      .catch(() => setLoadingUpload(false));
  };

  const handleSubmit = (values) => {
    registerUser(values);
  };

  return (
    <div className="login-container">
      <Row justify="center">
        <Col xs={24} sm={16} md={12} lg={9}>
          <div className="login-form">
            <Row justify="center" className="mb-4">
              <Col flex="220px">
                <Image src={Logo} preview={false} />
              </Col>
            </Row>
            <CustomForm 
              form={form}
              itemList={itemList}
              handleSubmit={handleSubmit}
              submitButton={(
                <Row className="w-100 mt-4 mb-2" justify="center">
                  <Button type="primary" htmlType="submit" size="large" loading={loadingUpload} >
                    Registrarse
                  </Button>
                </Row>
              )}
            />
            <Row justify="center">
							<Button type="link" onClick={() => goToLogin()}>Tengo una cuenta</Button>
						</Row>
          </div>
        </Col>
        <Col
					className="d-flex"
					xs={{ span: 24, order: 2 }}
					sm={{ order: 2 }}
					md={{ span: 10, order: 1 }}
					lg={9}
				>
					<Row className="w-100 m-auto">
						<div style={{ maxWidth: '600px' }}>
							<Image src={RegisterImage} preview={false} />
						</div>
					</Row>
				</Col>
      </Row>
    </div>
  )
}

export default Register;