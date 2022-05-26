import { Row, Col, Form, Input, Button } from 'antd';

function Contact(){
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className="contact-container">
            <Row>
                <div className="title w-100 mb-3 text-white text-uppercase">Contáctanos</div>
            </Row>
            <Row className="mb-2" gutter={[16, 16]}>
                <Col xs={24} md={24} lg={12}>
                    <div className="custom-shadow p-3 mb-2 bg-white border-round">
                        <div className="text-bold mb-1">Sede principal</div>
                        <div>Av. Prolongación Pedro Miotta 421</div>
                        <div>San Juan de Mirafores - Lima 29</div>
                        <div className="text-bold mt-3 mb-1">Central telefónica</div>
                        <div>01 217 2000</div>
                        <div className="text-bold mt-3 mb-1">Correo</div>
                        <a href='mailto:atenciones@adinelsa.com.pe'>atenciones@adinelsa.com.pe</a>
                    </div>
                    <div className="custom-shadow p-3 bg-white border-round">
                        <div className="text-bold mb-1 font-large">Atención al cliente</div>
                        <div><span className="text-bold">Fonoenergía:</span> 01 217 2017</div>
                        <div className="text-bold mb-1">
                            <span className="text-bold">Correo:</span>
                            {' '}
                            <a href='mailto:atenciones@adinelsa.com.pe'>atenciones@adinelsa.com.pe</a>
                        </div>
                    </div>
                </Col>
                <Col xs={24} md={24} lg={12}>
                    <div className="custom-shadow p-3 mb-2 h-100 bg-white border-round">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Row gutter={16}>
                                <Col xs={24} md={24} lg={12}>
                                    <Form.Item
                                        name="nombre"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa tus nombres!',
                                        },
                                        ]}
                                    >
                                        <Input placeholder="Nombres" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={24} lg={12}>
                                    <Form.Item
                                        name="apellido"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa tus apellidos!',
                                        },
                                        ]}
                                    >
                                        <Input placeholder="Apellidos" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={24} lg={12}>
                                    <Form.Item
                                        name="correo"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa tus correo!',
                                        },
                                        ]}
                                    >
                                        <Input placeholder="Correo" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={24} lg={12}>
                                    <Form.Item
                                        name="numero"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa tus número!',
                                        },
                                        ]}
                                    >
                                        <Input placeholder="Número" />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        name="comentario"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa tus comentario!',
                                        },
                                        ]}
                                    >
                                        <Input.TextArea rows={8} showCount maxLength={200} placeholder="Comentario" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Enviar
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Contact;