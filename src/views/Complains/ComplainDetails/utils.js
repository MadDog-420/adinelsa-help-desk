import moment from 'moment';

export const itemList = (categorias, estados, tipos, impactos, prioridad, roles, usuarios, slas, data) => [
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
    value: moment(data && data.fechaEmision),
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
    value: data && data.rolAsignado,
    options: roles,
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
    value: data && data.responsable,
    options: usuarios,
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
    value: data && data.sla,
    options: slas,
    placeholder: 'SLA asignado',
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

export const solutionItems = (data) => [
  {
		component: 'datePicker',
		label: 'Fecha',
		name: 'fechaActualizado',
		size: 'large',
    value: data && data.fechaActualizado !== null ? moment(data.fechaActualizado) : moment(),
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
    value: data && data.actividadesSolucion,
		responsive: {
			span: 24,
		},
	},
];