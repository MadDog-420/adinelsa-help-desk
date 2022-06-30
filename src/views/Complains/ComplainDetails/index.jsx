import { Form, message, Row, Col, Button } from 'antd';
import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from './../../../context/index';
import moment from 'moment';
import CustomForm from './../../../components/CustomForm/index';

const itemList = (types, solicitud) => [
  {
		label: 'Código',
		name: 'codigo',
		size: 'large',
    value: solicitud && solicitud.codigo,
		disabled: true,
		responsive: {
			xs: 24, sm: 24, lg: 6, 
		},
	},
  {
		label: 'Realizado por',
		name: 'owner',
		size: 'large',
    value: solicitud && solicitud.owner,
		disabled: true,
		responsive: {
			xs: 24, sm: 24, lg: 18, 
		},
	},
  {
		component: 'textArea',
		label: 'Detalle de la solicitud',
		name: 'detalleSolicitud',
		size: 'large',
    value: solicitud && solicitud.detalle,
    disabled: true,
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
		label: 'Fecha',
		name: 'fechaEmision',
		size: 'large',
    value: moment(),
    disabled: true,
		responsive: {
			xs: 24, sm: 24, md: 10, lg: 8,
		},
	},
	{
    component: 'singleSelect',
		label: 'Categoría',
		name: 'categoria',
		size: 'large',
    value: types[0] && types[0].value,
    options: types,
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 8,
		},
	},
  {
    component: 'singleSelect',
		label: 'Estado',
		name: 'estado',
		size: 'large',
    value: types[0] && types[0].value,
    options: types,
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 8,
		},
	},
  {
    component: 'singleSelect',
		label: 'Prioridad',
		name: 'prioridad',
		size: 'large',
    value: types[0] && types[0].value,
    options: types,
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 8,
		},
	},
  {
    component: 'singleSelect',
		label: 'Clasificación',
		name: 'clasificacion',
		size: 'large',
    value: types[0] && types[0].value,
    options: types,
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 8,
		},
	},
];

const solicitud = {
  codigo: 'SO-001',
  owner: "2",
  detalle: "Lorem ipsum",
}

function ComplainDetails() {
  const { state } = useContext(AppContext);
  const { me } = state;
  const { userInformation } = me;

  const [form] = Form.useForm();
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loadingType, setLoadingType] = useState(true);
 
  const [data, setData] = useState(null);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    if (userInformation.rol !== 'administrador') {
      if (data && data.owner !== userInformation.id) {
        navigate('/noAccess', { replace: true });
      }
    }
  });

  useEffect(() => {
    if (loading) {
      console.log('params ', params);
      setData(solicitud);
      setLoading(false);
    }
  }, [loading, params]);

  useEffect(() => {
    if (loadingType) {
      fetch('http://localhost:8000/api/tipoIncidencia')
			.then((res) => res.json())
			.then((data) => {
        const typeList = [];
        data.forEach(item => {
          typeList.push({ label: item.descripcion, value: item.cod_incidencia })
        });
				setTypes(typeList);
				setLoadingType(false);
			})
      .catch(() => message.error('Error de conexión'));
    }
  }, [loadingType]);

  return (
    <div className="complains-container">
      <Row>
        <div className="title w-100 mb-3 text-white text-uppercase">Solicitud</div>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="p-3 bg-white border-round">
            <div className="text-bold mb-2 font-large">Detalle</div>
            <CustomForm
              loading={loading || !data}
              form={form}
              itemList={itemList(types, data)}
              requiredMark={false}
            />
          </div>
        </Col>
        <Col span={24}>
          <div className="p-3 bg-white border-round">
            <div className="text-bold mb-2 font-large">Solución</div>
            <CustomForm
              loading={loading || !data}
              form={form}
              itemList={itemList(types, data)}
              requiredMark={false}
              submitButton={(
              <Col>
                <Button type="primary" htmlType="submit" size="large" className="w-100">
                  Guardar
                </Button>
              </Col>
              )}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ComplainDetails;