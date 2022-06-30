import { Row, Form, Button, Tabs, Col, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import './styles.scss';
import CustomForm from '../../components/CustomForm';
import { useContext } from 'react';
import { AppContext } from './../../context/index';
import AllComplains from './AllComplains';
import ComplainsTable from './ComplainsTable/index';

const itemList = () => [
	{
		label: 'Solicitud',
		name: 'solicitud',
		size: 'large',
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, md: 14, lg: 18 
		},
	},
  {
		component: 'datePicker',
		label: 'Fecha',
		name: 'fechaEmision',
		size: 'large',
    value: moment(),
    disabled: true,
		rules: [
			{
				required: true,
        message: 'Campo requerido',
			},
		],
		responsive: {
			xs: 24, sm: 24, md: 10, lg: 6
		},
	},
	{
		component: 'textArea',
		label: 'Detalle de la solicitud',
		name: 'detalleSolicitud',
		size: 'large',
		rules: [
			{
				required: true,
        message: 'Campo requerido',
			},
		],
		responsive: {
			span: 24,
		},
	},
];

function Complains() {
  const { state } = useContext(AppContext);
  const { me } = state;
  const { userInformation } = me;

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="complains-container">
      <Row>
        <div className="title w-100 mb-3 text-white text-uppercase">Solicitudes</div>
      </Row>
      <Row gutter={[16, 16]}>
        {
          userInformation.rol === 'administrador' && (
            <AllComplains />
          )
        }
        {
          userInformation.rol === 'usuario' && (
            <Tabs defaultActiveKey="1" type="card" className="w-100">
              <Tabs.TabPane tab="Nueva solicitud" key="1">
                <CustomForm
                  form={form}
                  itemList={itemList({})}
                  handleSubmit={handleSubmit}
                  requiredMark={false}
                  submitButton={(
                    <>
                      <Col flex="auto">
                        <Upload
                          className="w-100"
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          listType="text"
                          maxCount={1}
                        >
                          <Button icon={<UploadOutlined />} className="w-100 text-right" />
                        </Upload>
                      </Col>
                      <Col flex="200px">
                        <Button type="primary" htmlType="submit" size="large" className="w-100">
                          Ingresar
                        </Button>
                      </Col>
                    </>
                  )}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Mis solicitudes" key="2">
                <ComplainsTable />
              </Tabs.TabPane>
            </Tabs>
          )
        }
      </Row>
    </div>
  )
}

export default Complains;