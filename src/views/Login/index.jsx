import { useState } from 'react';
import { Row, Col, Form, Image, Button, message } from 'antd';
import LoginImage from '../../media/images/login.jpg';
import Logo from '../../media/adinelsa-logo.png';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import routesDictionary from './../../routes/routesDict';
import CustomForm from '../../components/CustomForm';

const itemList = [
	{
		label: 'Correo electrónico',
		name: 'email',
		size: 'large',
		placeholder: 'Correo',
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
		component: 'password',
		label: 'Contraseña',
		name: 'password',
		size: 'large',
		rules: [
			{
				required: true,
			},
		],
		placeholder: 'Contraseña',
		responsive: {
			span: 24,
		},
	},
];

function Login() {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const goToRegister = () => {
		navigate(routesDictionary.register.router);
	}

	const handleSubmit = (values) => {
		setLoading(true);
		const config = {
			method: 'POST',
			body: JSON.stringify(values),
			headers:{
				'Content-Type': 'application/json',
			},
		}
		fetch('http://localhost:8000/api/user', config)
			.then((res) => res.json())
			.then((data) => {
				if (data.length > 0) {
					navigate(routesDictionary.dashboard.router);
				} else {
					message.error('Correo o contraseña incorrectos');
				}
				setLoading(false); 
			});
	};

	return (
		<div className="login-container">
			<Row className="w-100" justify="space-around">
				<Col
					className="d-flex"
					xs={{ span: 24, order: 2 }}
					md={{ span: 12, order: 2 }}
					lg={{ span: 8, order: 2 }}
				>
					<div className="login-form m-auto">
            <Row justify="center" className="mb-4">
              <Col flex="220px">
                <Image src={Logo} preview={false} />
              </Col>
            </Row>
						<CustomForm
							form={form}
							itemList={itemList}
							handleSubmit={handleSubmit}
              requiredMark={false}
							submitButton={(
								<Row className="w-100 mt-4 mb-2" justify="center">
									<Button type="primary" htmlType="submit" size="large" loading={loading}>
										Ingresar
									</Button>
								</Row>
							)}
						/>
						<Row justify="center">
							<Button type="link" onClick={() => goToRegister()}>Registrarse</Button>
						</Row>
					</div>
				</Col>
				<Col
					className="d-flex"
					xs={{ span: 24, order: 2 }}
					sm={{ order: 2 }}
					md={{ span: 10, order: 1 }}
					lg={8}
				>
					<Row className="w-100 m-auto">
						<div style={{ maxWidth: '600px' }}>
							<Image src={LoginImage} preview={false} />
						</div>
					</Row>
				</Col>
			</Row>
		</div>
	)
}

export default Login;