import { Row, Form, Button, Tabs } from 'antd';
import moment from 'moment';
import './styles.scss';
import MyComplains from './MyComplains/index';
import CustomForm from '../../components/CustomForm';

const itemList = [
	{
    component: 'singleSelect',
		label: 'Tipo de incidente',
		name: 'tipoIncidente',
		size: 'large',
    value: 1,
    options: [
      {
        label: 'Corte y reconexión',
        value: 1,
      },
      {
        label: 'Excesivo consumo',
        value: 2,
      },
      {
        label: 'Deuda de terceros',
        value: 3,
      },
    ],
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			span: 18, 
		},
	},
	{
		component: 'textArea',
		label: 'Detalle del Reclamo',
		name: 'detalleReclamo',
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
  {
		component: 'datePicker',
		label: 'Fecha de Emisión',
		name: 'fechaEmision',
		size: 'large',
    value: moment(),
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
  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="complains-container">
      <Row>
        <div className="title w-100 mb-3 text-white text-uppercase">Reclamos</div>
      </Row>
      <Row gutter={[16, 16]}>
        <Tabs defaultActiveKey="1" type="card" className="w-100">
          <Tabs.TabPane tab="Nuevo reclamo" key="1">
            <CustomForm
							form={form}
							itemList={itemList}
							handleSubmit={handleSubmit}
              requiredMark={false}
							submitButton={(
								<Row className="w-100 mt-4 mb-2" justify="center">
									<Button type="primary" htmlType="submit" size="large">
										Ingresar
									</Button>
								</Row>
							)}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Mis reclamos" key="2">
            <MyComplains />
          </Tabs.TabPane>
        </Tabs>
      </Row>
    </div>
  )
}

export default Complains;