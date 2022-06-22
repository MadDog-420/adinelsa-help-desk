import { Row, Col, Form, Image, Button } from 'antd';
import RegisterImage from '../../../media/images/registration_no_bg.png';
import  Logo from '../../../media/adinelsa-logo.png';
import '../styles.scss';
import { useNavigate } from 'react-router-dom';
import routesDictionary from './../../../routes/routesDict';
import CustomForm from '../../../components/CustomForm';

const itemList = [
  {
		name: 'name',
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
		name: 'surnamePaterno',
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
		name: 'surnameMaterno',
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
    component: 'singleSelect',
		name: 'tipoDocumento',
		size: 'large',
    value: 'dni',
    options: [
      {
        label: 'DNI',
        value: 'dni',
      },
      {
        label: 'RUC',
        value: 'ruc',
      },
      {
        label: 'CARNET DE EXTRANJERÍA',
        value: 'carnetExtranjeria',
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
		name: 'numeroDocumento',
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
		name: 'email',
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
		name: 'password',
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
          if (!value || getFieldValue('password') === value) {
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

function Register() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate(routesDictionary.login.router);
  }
  const handleSubmit = (values) => {
    console.log('Received values of form: ', values);
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
                  <Button type="primary" htmlType="submit" size="large">
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