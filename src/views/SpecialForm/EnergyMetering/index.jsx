import { 
    Row, Col, Form, Input, Button, Select, DatePicker, Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';

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

function EnergyMetering() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const normFile = (e) => {
        console.log('Upload event:', e);
      
        if (Array.isArray(e)) {
          return e;
        }
      
        return e?.fileList;
    };
    return [
        <Row className="mb-2" gutter={[16, 16]}>
            <Col span={24}>
                <div className="custom-shadow p-3 mb-2 bg-white border-round">
                    <div className="text-bold mb-1">Ingresar lectura</div>
                    <Form
                        name="lectura"
                        {...formItemLayout}
                        className="login-form"
                        initialValues={{ codigo: '14896', fechaRegistro: moment() }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="codigo"
                            label="Seleccionar suministro"
                            labelCol={{
                                xs: {
                                    span: 24,
                                },
                                md: {
                                    span: 12,
                                },
                                lg: {
                                    span: 8,
                                }
                            }}
                            wrapperCol={{
                                xs: {
                                    span: 24,
                                },
                                md: {
                                    span: 12,
                                },
                                lg: {
                                    span: 4,
                                }
                            }}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select>
                                <Select.Option value="14896" key="14896">14896</Select.Option>
                            </Select>
                        </Form.Item>
                        <Row gutter={16}>
                            <Col xs={24} sm={24} lg={12} xl={16}>
                                <Form.Item
                                    name="imagenLectura"
                                    label="Solo se aceptan capturas png. o jpg. El peso maximo es de 1MB"
                                    rules={[
                                    {
                                        required: false,
                                    },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} lg={12} xl={8}>
                                <Form.Item
                                    valuePropName="fileList"
                                    getValueFromEvent={normFile}
                                    extra="Tamaño máximo: 1MB"
                                >
                                    <Upload name="img" action="/upload.do" listType="picture">
                                        <Button icon={<UploadOutlined />}>Seleccionar imagen</Button>
                                    </Upload>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item 
                            name="fechaRegistro"
                            label="Fecha de registro"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Guardar Lectura
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Col>
        </Row>
    ]
}

export default EnergyMetering;