import { Form, Row, Col, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from './../../../context/index';
import moment from 'moment';
import CustomForm from './../../../components/CustomForm/index';
import { getData, transformToOptions } from '../../../utils/tools';
import '../styles.scss';

const itemList = (categorias, estados, tipos, impactos, prioridad, data) => [
  {
		label: 'Código',
		name: 'codigo',
		size: 'large',
    value: data && data.codigo,
		disabled: true,
		responsive: {
			xs: 24, sm: 24, lg: 6, 
		},
	},
  {
		label: 'Realizado por',
		name: 'owner',
		size: 'large',
    value: data && data.owner,
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
    value: data && data.detalle,
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
		label: 'Fecha de registro',
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
    value: data && data.categoria,
    options: categorias,
    placeholder: 'Selecciona una categoría',
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
    value: data && data.estado,
    options: estados,
    placeholder: 'Selecciona una estado',
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
    value: data && data.clasificacion,
    options: tipos,
    placeholder: 'Selecciona un tipo',
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
		label: 'Impacto',
		name: 'impacto',
		size: 'large',
    value: data && data.impacto,
    options: impactos,
    placeholder: 'Selecciona un impacto',
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
    value: data && data.prioridad,
    options: prioridad,
    placeholder: 'Selecciona una prioridad',
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
		label: 'Asignado a',
		name: 'rolAsignado',
		size: 'large',
    value: '1',
    options: [
      {
        label: 'Técnico nivel 1',
        value: '1',
      }
    ],
    placeholder: 'Rol asignado',
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 12,
		},
	},
  {
    component: 'singleSelect',
		label: 'Responsable',
		name: 'responsable',
		size: 'large',
    value: '2',
    options: [
      {
        label: 'Marco Antonio Farfan',
        value: '2',
      }
    ],
    placeholder: 'Responsable',
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 12,
		},
	},
  {
    component: 'singleSelect',
		label: 'SLA',
		name: 'sla',
		size: 'large',
    value: '2',
    options: [
      {
        label: 'SLA 1',
        value: '1',
      },
      {
        label: 'SLA 2',
        value: '2',
      }
    ],
    placeholder: 'Rol asignado',
		rules: [
			{
				required: true,
			},
		],
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 12,
		},
	},
  {
		label: 'Tiempo de respuesta',
		name: 'tiempoRespuesta',
		size: 'large',
    value: '1 hora',
    disabled: true,
		responsive: {
			xs: 24, sm: 24, lg: 12, xl: 12,
		},
	},
];

const solutionItems = () => [
  {
		label: 'Descripción',
		name: 'descripcionSolucion',
		size: 'large',
		rules: [
			{
				required: true,
        message: 'Campo requerido',
			},
		],
		responsive: {
			xs: 24, sm: 24, md: 14, lg: 18 
		},
	},
  {
		component: 'datePicker',
		label: 'Fecha',
		name: 'fechaActualizado',
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
		label: 'Actividades',
		name: 'actividadesSolucion',
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

const solicitud = {
  codigo: 'SO-001',
  owner: '2',
  detalle: 'Lorem ipsum',
  fechaEmision: '28-6-2022',
  fechaActualizacion: null,
  actividadesSolucion: 'Lorem ipsum',
  
}

function ComplainDetails() {
  const { state } = useContext(AppContext);
  const { me } = state;
  const { userInformation } = me;

  const [form] = Form.useForm();
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loadingCategoria, setLoadingCategoria] = useState(true);
  const [loadingEstados, setLoadingEstados] = useState(true);
  const [loadingTipos, setLoadingTipos] = useState(true);
  const [loadingImpactos, setLoadingImpactos] = useState(true);
  const [loadingPrioridad, setLoadingPrioridad] = useState(true);
 
  const [data, setData] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [estados, setEstados] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [impactos, setImpactos] = useState([]);
  const [prioridad, setPrioridad] = useState([]);

  const handleSubmit = (values) => {
    console.log(values);
  };

  useEffect(() => {
    if (userInformation.rol !== 'administrador') {
      if (data && data.owner !== userInformation.id) {
        navigate('/noAccess', { replace: true });
      }
    }
  });

  useEffect(() => {
    if (loading) {
      setData(solicitud);
      setLoading(false);
    }
  }, [loading, params]);

  useEffect(() => {
    getData(loadingCategoria, setLoadingCategoria, 'http://localhost:8000/api/tipoSolicitud', (data) => {
      setCategorias(transformToOptions(data, 'Tipo', 'IdTipoSolicitud'));
    })
  }, [loadingCategoria]);

  useEffect(() => {
    getData(loadingEstados, setLoadingEstados, 'http://localhost:8000/api/estadoSolicitud', (data) => {
      setEstados(transformToOptions(data, 'Estado', 'IdEstadoSolicitud'));
    })
  }, [loadingEstados]);

  useEffect(() => {
    getData(loadingTipos, setLoadingTipos, 'http://localhost:8000/api/clasificacion', (data) => {
      setTipos(transformToOptions(data, 'Clasificacion', 'IdClasificacion'));
    })
  }, [loadingTipos]);

  useEffect(() => {
    getData(loadingImpactos, setLoadingImpactos, 'http://localhost:8000/api/impacto', (data) => {
      setImpactos(transformToOptions(data, 'Impacto', 'IdImpacto'));
    })
  }, [loadingImpactos]);

  useEffect(() => {
    getData(loadingPrioridad, setLoadingPrioridad, 'http://localhost:8000/api/prioridad', (data) => {
      setPrioridad(transformToOptions(data, 'Prioridad', 'IdPrioridad'));
    })
  }, [loadingPrioridad]);

  return (
    <div className="complains-container">
      <Row className="mb-3">
        <div className="title w-100 text-white text-uppercase">Solicitud</div>
        <Col span={24}>
          <Button type="link" className="return-button" icon={<LeftOutlined />} onClick={() => navigate('/solicitudes', { replace: true })}>Volver</Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="p-3 bg-white border-round">
            <div className="text-bold mb-2 font-large">Detalles</div>
            <CustomForm
              loading={!data || loading || loadingCategoria || loadingEstados || loadingTipos || loadingImpactos || loadingPrioridad}
              form={form}
              itemList={itemList(categorias, estados, tipos, impactos, prioridad, data)}
              requiredMark={false}
              handleSubmit={handleSubmit}
            />
          </div>
        </Col>
        <Col span={24}>
          <div className="p-3 bg-white border-round">
            <div className="text-bold mb-2 font-large">Solución</div>
            <CustomForm
              loading={!data || loading || loadingCategoria || loadingEstados || loadingTipos || loadingImpactos || loadingPrioridad}
              form={form}
              itemList={solutionItems()}
              requiredMark={false}
              handleSubmit={handleSubmit}
            />
          </div>
        </Col>
        <Col span={24}>
          <Row justify="end">
            <Col flex="200px">
              <Button type="primary" htmlType="submit" size="large" className="w-100" onClick={form.submit}>
                Guardar
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ComplainDetails;