import { Row, Col, Form, Image, Input, Button } from 'antd';
import LoginImage from '../../media/images/login.jpg';
import  Logo from '../../media/adinelsa-logo.png';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import routesDictionary from './../../routes/routesDict';

function Login() {
    const navigate = useNavigate();
    const goToRegister = () => {
        navigate(routesDictionary.register.router);
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
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
                                name="correo"
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
                                name="clave"
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
                                    <Button type="primary" htmlType="submit" size="large">
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