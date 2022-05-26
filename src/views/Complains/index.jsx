import { Row, Col, Form, Input, Button, Select, DatePicker } from 'antd';
import moment from 'moment';
import './styles.scss'

const formItemLayout = {
    labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 24,
        },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 24,
      },
    },
};

function Complains() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className="complains-container">
            <Row>
                <div className="title w-100 mb-3 text-white text-uppercase">Reclamos</div>
            </Row>
            <Row className="mb-2" gutter={[16, 16]}>
                <Col span={24}>
                    <div className="custom-shadow p-3 mb-2 bg-white border-round">
                        <div className="text-bold mb-1">Datos del suministro</div>
                        <Form
                            name="suministro"
                            {...formItemLayout}
                            className="login-form"
                            initialValues={{ codigo: '14896', tipoDocumento: 'dni' }}
                            onFinish={onFinish}
                        >
                            <Row>
                                <Form.Item
                                    name="codigo"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input disabled/>
                                </Form.Item>
                            </Row>
                            <Row gutter={16}>
                                <Col xs={24} sm={24} lg={12} xl={8}>
                                    <Form.Item
                                        name="titular"
                                        label="Titular"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa nombre del titular!',
                                        },
                                        ]}
                                    >
                                        <Input placeholder="Titular" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} lg={12} xl={8}>
                                    <Form.Item
                                        name="tipoDocumento"
                                        label="Tipo de documento"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa el tipo de documento!',
                                        },
                                        ]}
                                    >
                                        <Select>
                                            <Select.Option value="dni">DNI</Select.Option>
                                            <Select.Option value="cedula">Cédula</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} lg={12} xl={8}>
                                    <Form.Item
                                        name="numeroDocumento"
                                        label="Número de documento"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa tu número de documento!',
                                        },
                                        ]}
                                    >
                                        <Input placeholder="Documento" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} lg={12} xl={8}>
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
                                </Col>
                                <Col xs={24} sm={24} lg={12} xl={8}>
                                    <Form.Item
                                        name="correo"
                                        label="Correo electrónico"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa tu correo!',
                                        },
                                        ]}
                                    >
                                        <Input placeholder="Correo" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} lg={12} xl={8}>
                                    <Form.Item
                                        name="direccion"
                                        label="Dirección"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa tu dirección!',
                                        },
                                        ]}
                                    >
                                        <Input placeholder="Dirección" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} lg={12} xl={8}>
                                    <Form.Item
                                        name="distrito"
                                        label="Distrito"
                                        rules={[
                                        {
                                            required: false,
                                        },
                                        ]}
                                    >
                                        <Select placeholder="Selecciona un distrito"></Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} lg={12} xl={8}>
                                    <Form.Item
                                        name="provincia"
                                        label="Provincia"
                                        rules={[
                                        {
                                            required: false,
                                        },
                                        ]}
                                    >
                                        <Select placeholder="Selecciona una provincia"></Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} lg={12} xl={8}>
                                    <Form.Item
                                        name="departamento"
                                        label="Departamento"
                                        rules={[
                                        {
                                            required: false,
                                        },
                                        ]}
                                    >
                                        <Select placeholder="Selecciona un departamento"></Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Guardar
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
                <Col span={24}>
                    <div className="custom-shadow p-3 mb-2 bg-white border-round">
                        <div className="text-bold mb-1">Datos de reclamo</div>
                        <Form
                            name="reclamo"
                            {...formItemLayout}
                            className="login-form"
                            initialValues={{ fechaReclamo: moment() }}
                            onFinish={onFinish}
                        >
                            <Form.Item 
                                name="tipoReclamo"
                                label="Departamento"
                                rules={[
                                {
                                    required: true,
                                },
                                ]}
                            >
                                <Select placeholder="Selecciona un tipo de reclamo">
                                </Select>
                            </Form.Item>
                            <Form.Item 
                                name="fechaReclamo"
                                label="Fecha de reclamo"
                                rules={[
                                {
                                    required: true,
                                },
                                ]}
                            >
                                <DatePicker />
                            </Form.Item>
                            <Form.Item
                                name="detalleReclamo"
                                label="Detalle del reclamo"
                                rules={[
                                {
                                    required: true,
                                    message: 'Ingresa tus comentario!',
                                },
                                ]}
                            >
                                <Input.TextArea rows={4} showCount maxLength={200} placeholder="Comentario" />
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
                <Col span={24}>
                    <div className="custom-shadow p-3 mb-2 bg-white border-round">
                        <div className="text-bold mb-1">Usuario reclamante</div>
                        <Form
                            name="reclamante"
                            {...formItemLayout}
                            className="login-form"
                            initialValues={{ tipoDocumento: 'dni' }}
                            onFinish={onFinish}
                        >
                            <Row gutter={16}>
                                <Col xs={24} sm={24} lg={12} xl={8}>
                                    <Form.Item
                                        name="titular"
                                        label="Titular"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa nombre del titular!',
                                        },
                                        ]}
                                    >
                                        <Input placeholder="Titular" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} lg={12} xl={8}>
                                    <Form.Item
                                        name="tipoDocumento"
                                        label="Tipo de documento"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa el tipo de documento!',
                                        },
                                        ]}
                                    >
                                        <Select>
                                            <Select.Option value="dni">DNI</Select.Option>
                                            <Select.Option value="cedula">Cédula</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} lg={12} xl={8}>
                                    <Form.Item
                                        name="numeroDocumento"
                                        label="Número de documento"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa tu número de documento!',
                                        },
                                        ]}
                                    >
                                        <Input placeholder="Documento" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} lg={12} xl={8}>
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
                                </Col>
                                <Col xs={24} sm={24} lg={12} xl={8}>
                                    <Form.Item
                                        name="correo"
                                        label="Correo electrónico"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Ingresa tu correo!',
                                        },
                                        ]}
                                    >
                                        <Input placeholder="Correo" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Revisar y enviar reclamo
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Complains;