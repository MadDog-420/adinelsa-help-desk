import { Row, Col, Form, Image, Input, Button, Select } from 'antd';
import  Logo from '../../../media/adinelsa-logo.png';
import '../styles.scss';
import { useNavigate } from 'react-router-dom';
import routesDictionary from './../../../routes/routesDict';

function Register() {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate(routesDictionary.login.router);
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className="login-container">
            <Row justify="center">
                <Col xs={24} sm={16} md={12} lg={8} xl={6}>
                    <div className="login-form">
                        <div style={{ maxWidth: '300px' }} className="mb-4">
                            <Image src={Logo} preview={false} />
                        </div>
                        <Form
                            name="register"
                            layout="vertical"
                            initialValues={{ tipoDocumento: 'dni' }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="tipoDocumento"
                                rules={[
                                {
                                    required: true,
                                    message: 'Ingresa el tipo de documento',
                                },
                                ]}
                            >
                                <Select>
                                    <Select.Option value="dni">DNI</Select.Option>
                                    <Select.Option value="cedula">Cédula</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="numeroDocumento"
                                rules={[
                                {
                                    required: true,
                                    message: 'Ingresa tu número de documento!',
                                },
                                ]}
                            >
                                <Input placeholder="Documento" />
                            </Form.Item>
                            <Form.Item
                                name="nombre"
                                rules={[
                                {
                                    required: true,
                                    message: 'Ingresa nombre del titular!',
                                },
                                ]}
                            >
                                <Input placeholder="Nombre" />
                            </Form.Item>
                            <Form.Item
                                        name="telefono"
                                        label="Teléfono"
                                        rules={[
                                        {
                                            required: false,
                                        },
                                        ]}
                                    >
                                        <Input placeholder="Número" />
                                    </Form.Item>
                            <Form.Item
                                name="correo"
                                rules={[
                                {
                                    required: true,
                                    message: 'Ingresa tu correo',
                                },
                                ]}
                            >
                                <Input placeholder="Correo electrónico" />
                            </Form.Item>
                            <Form.Item
                                name="clave"
                                rules={[
                                {
                                    required: true,
                                    message: 'Ingresa tu contraseña',
                                },
                                ]}
                            >
                                <Input.Password placeholder="Contraseña"/>
                            </Form.Item>
                            <Form.Item
                                name="claveConfirmacion"
                                rules={[
                                {
                                    required: true,
                                    message: 'Confirmar contraseña',
                                },
                                ]}
                            >
                                <Input.Password placeholder="Confirmar contraseña"/>
                            </Form.Item>
                            <Form.Item>
                                <Row className="mt-2 mb-2" justify="center">
                                    <Button type="primary" htmlType="submit">
                                        Registrar
                                    </Button>
                                </Row>
                                <Row justify="center">
                                    <Button type="link" onClick={() => goToLogin()}>Ya tengo una cuenta</Button>
                                </Row>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Register;