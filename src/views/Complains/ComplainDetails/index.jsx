import { Form, Row, Col, Button, message } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from './../../../context/index';
import CustomForm from './../../../components/CustomForm/index';
import { getData, transformToOptions } from '../../../utils/tools';
import { itemList, solutionItems } from './utils';
import '../styles.scss';

const filterList = (list, value, field) => {
  if (value !== null && value !== undefined) {
    return list.filter((item) => item[field] === value);
  }
  return list;
}

function ComplainDetails() {
  const { state } = useContext(AppContext);
  const { me } = state;
  const { userInformation } = me;

  const [form] = Form.useForm();
  const params = useParams();
  const navigate = useNavigate();

  const [loadingUpload, setLoadingUpload] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadingDetalle, setLoadingDetalle] = useState(true);
  const [loadingCategoria, setLoadingCategoria] = useState(true);
  const [loadingEstados, setLoadingEstados] = useState(true);
  const [loadingTipos, setLoadingTipos] = useState(true);
  const [loadingImpactos, setLoadingImpactos] = useState(true);
  const [loadingPrioridad, setLoadingPrioridad] = useState(true);
  const [loadingRoles, setLoadingRoles] = useState(true);
  const [loadingUsuarios, setLoadingUsuarios] = useState(true);
  const [loadingSlas, setLoadingSlas] = useState(true);

  const [categoriaValue, setCategoriaValue] = useState();
  const [rolValue, setRolValue] = useState();
 
  const [data, setData] = useState(null);
  const [detalle, setDetalle] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [estados, setEstados] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [impactos, setImpactos] = useState([]);
  const [prioridad, setPrioridad] = useState([]);
  const [roles, setRoles] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [slas, setSlas] = useState([]);

  const uploadDetalleSolicitud = (values) => {
    setLoadingUpload(true);
    const config = {
			method: 'POST',
			body: JSON.stringify(values),
			headers:{
				'Content-Type': 'application/json',
			},
		}

    fetch('http://localhost:8000/api/detalleSolicitud', config)
			.then((res) => res.json())
			.then((data) => {
				if (data.id) {
          message.success('Solicitud agregada');
				} else {
					message.error('Ocurrió un error al intentar agregar la solicitud');
				}
				setLoadingUpload(false);
			})
      .catch(() => setLoadingUpload(false));
  };

  const updateDetalleSolicitud = (values) => {
    setLoadingUpload(true);
    const config = {
			method: 'PUT',
			body: JSON.stringify(values),
			headers:{
				'Content-Type': 'application/json',
			},
		}

    fetch('http://localhost:8000/api/detalleSolicitud/'+data.idDetalleSolicitud, config)
			.then((res) => res.json())
			.then((data) => {
				if (data.id) {
          message.success('Solicitud actualizada');
				} else {
					message.error('Ocurrió un error al intentar actualizar la solicitud');
				}
				setLoadingUpload(false);
			})
      .catch(() => setLoadingUpload(false));
  };

  const handleSubmit = (values) => {
    console.log({...values, id: data.id, idDetalleSolicitud: data.idDetalleSolicitud});
    if (!detalle) {
      uploadDetalleSolicitud({...values, idSolicitud: data.id});
    } else {
      updateDetalleSolicitud({...values, idDetalleSolicitud: data.idDetalleSolicitud});
    }
  };

  const onChange = (changedValues) => {
    const formFields = Object.keys(changedValues);
    formFields.forEach((item) => {
      if (item === "categoria") {
        setCategoriaValue(changedValues[item]);
        form.setFieldsValue({ clasificacion: undefined });
      }
      if (item === "rolAsignado") {
        setRolValue(changedValues[item]);
        form.setFieldsValue({ responsable: undefined });
      }
      if (item === "sla") {
        const slaValue = slas.filter((i) => i.value === changedValues[item]);
        form.setFieldsValue({ tiempoRespuesta: slaValue[0].other });
      }
    })
  }

  useEffect(() => {
    if (data && userInformation.IdRol !== 1) {
      if (data && data.owner !== userInformation.id) {
        navigate('/noAccess', { replace: true });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, navigate]);

  useEffect(() => {
    if (loading) {
      fetch('http://localhost:8000/api/solicitud/'+params.id)
        .then((res) => res.json())
        .then((solicitud) => {
          setData({
            id: solicitud.IdSolicitud,
            codigo: solicitud.Codigo,
            ownerId: solicitud.IdUsuario,
            detalle: solicitud.DetalleSolicitud,
            fechaEmision: solicitud.FechaRegistro,
          });
          setLoading(false);
        });
    }
  }, [loading, params]);

  useEffect(() => {
    if (loadingDetalle && data) {
      fetch('http://localhost:8000/api/detalleSolicitud/'+data.codigo)
        .then((res) => res.ok && res.json())
        .then((detalle) => {
          if (Object.keys(detalle).length !== 0) {
            setDetalle(true);
          }
          const object = {
            idDetalleSolicitud: detalle.IdDetalleSolicitud,
            categoria: detalle.IdTipoSolicitud,
            estado: detalle.IdEstadoSolicitud,
            clasificacion: detalle.IdClasificacion,
            impacto: detalle.IdImpacto,
            prioridad: detalle.IdPrioridad,
            responsable: detalle.IdUsuario[1],
            sla: detalle.IdSLA,
            fechaActualizado: detalle.FechaSolucion,
            actividadesSolucion: detalle.DetalleSolucion,
          }
          setData({...data, ...object });
          setLoadingDetalle(false);
        });
    }
  }, [loadingDetalle, data])

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
      setTipos(transformToOptions(data, 'Clasificacion', 'IdClasificacion', 'IdTipoSolicitud'));
    })
  }, [categoriaValue, loadingTipos]);

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

  useEffect(() => {
    getData(loadingRoles, setLoadingRoles, 'http://localhost:8000/api/roles', (data) => {
      setRoles(transformToOptions(data.filter((item) => item.IdRol > 2), 'descripcion', 'IdRol'));
    })
  }, [loadingRoles]);

  useEffect(() => {
    if (!loadingRoles && !loadingDetalle) {
      getData(loadingUsuarios, setLoadingUsuarios, 'http://localhost:8000/api/usuario', (res) => {

        const user = res.filter((item) => item.IdUsuario === data.ownerId)[0];
        setData({...data, owner: user.nombre.concat(' ', user.ape_paterno, ' ', user.ape_materno), rolAsignado: user.IdRol});

        const list = [];
        res.filter((item) => item.IdRol > 2).forEach((item) => {
          list.push({
            label: item.nombre.concat(' ', item.ape_paterno, ' ', item.ape_materno),
            value: item.IdUsuario,
            IdRol: item.IdRol,
          });
        });
        setUsuarios(list);
      });
    }
  }, [data, loadingDetalle, loadingRoles, loadingUsuarios]);

  useEffect(() => {
    getData(loadingSlas, setLoadingSlas, 'http://localhost:8000/api/sla', (data) => {
      setSlas(transformToOptions(data, 'SLA', 'IdSLA', 'TiempoRespuesta'));
    })
  }, [loadingSlas]);

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
              loading={!data || loading || loadingCategoria || loadingEstados || loadingTipos || loadingImpactos || loadingPrioridad || loadingRoles || loadingUsuarios}
              form={form}
              itemList={
                itemList(
                  categorias,
                  estados,
                  filterList(tipos, categoriaValue, 'IdTipoSolicitud'),
                  impactos,
                  prioridad,
                  roles,
                  filterList(usuarios, rolValue, 'IdRol'),
                  slas,
                  data
                )
              }
              requiredMark={false}
              handleSubmit={handleSubmit}
              onChangedValues={onChange}
            />
          </div>
        </Col>
        {
          detalle && (
            <Col span={24}>
              <div className="p-3 bg-white border-round">
                <div className="text-bold mb-2 font-large">Solución</div>
                <CustomForm
                  loading={!data || loading || loadingCategoria || loadingEstados || loadingTipos || loadingImpactos || loadingPrioridad || loadingRoles || loadingUsuarios}
                  form={form}
                  itemList={solutionItems(data)}
                  requiredMark={false}
                  handleSubmit={handleSubmit}
                  onChangedValues={onChange}
                />
              </div>
            </Col>
          )
        }
        <Col span={24}>
          <Row justify="end">
            <Col flex="200px">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-100"
                onClick={form.submit}
                loading={!data || loading || loadingCategoria || loadingEstados || loadingTipos || loadingImpactos || loadingPrioridad || loadingRoles || loadingUsuarios || loadingUpload}
              >
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