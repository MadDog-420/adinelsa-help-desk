import { useState } from 'react';
import { Row, Col, Form, Image, Input, Button, message } from 'antd';
import LoginImage from '../../media/images/login.jpg';
import  Logo from '../../media/adinelsa-logo.png';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import routesDictionary from './../../routes/routesDict';

function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const goToRegister = () => {
      navigate(routesDictionary.register.router);
    }
    const onFinish = (values) => {
      setLoading(true);
      const config = {
        method: 'POST',
        body: JSON.stringify(values),
        headers:{
          'Content-Type': 'application/json'
        }
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
            <Row justify="space-around">
                <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 8, order: 2 }}>
                    <div className="h-100 login-form">
                        <Row justify="center">
                            <div style={{ maxWidth: '300px' }} className="mb-4">
                                <Image src={Logo} preview={false} />
                            </div>
                        </Row>
                        <Form
                            name="login"
                            layout="vertical"
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                label="Correo electrónico"
                                rules={[
                                {
                                    required: true,
                                    message: 'Ingresa tu correo',
                                },
                                ]}
                            >
                                <Input placeholder="Correo" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                label="Contraseña"
                                rules={[
                                {
                                    required: true,
                                    message: 'Ingresa tu contraseña',
                                },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item>
                                <Row className="mt-4 mb-2" justify="center">
                                    <Button type="primary" htmlType="submit" size="large" loading={loading}>
                                        Ingresar
                                    </Button>
                                </Row>
                                <Row justify="center">
                                    <Button type="link" onClick={() => goToRegister()}>Registrarse</Button>
                                </Row>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
                <Col xs={{ span: 24, order: 2 }} sm={{ order: 2 }} md={{ span: 10, order: 1 }} lg={8}>
                    <Row className="w-100">
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