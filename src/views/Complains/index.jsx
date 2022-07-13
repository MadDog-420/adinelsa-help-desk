import { Row, Form, Button, Tabs, Col, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import CustomForm from '../../components/CustomForm';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from './../../context/index';
import AllComplains from './AllComplains';
import { uploadFileWithFirebase } from './../../utils/fire';
import './styles.scss';
import MyComplainsTable from './MyComplainsTable/index';

const itemList = () => [
	{
		label: 'Solicitud',
		name: 'Solicitud',
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
		name: 'DetalleSolicitud',
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

  const [loading, setLoading] = useState(false);
  const [loadingFile, setLoadingFile] = useState(false);
  const [refetch, setRefetch] = useState(false);

  const [fileList, setFileList] = useState();
  const [filesToUpload, setFilesToUpload] = useState([]);

  const handleFile = (e) => {
    setFilesToUpload([e.file.originFileObj])
    setFileList(e.fileList)
  };

  const customRequest = (options) => {
    const { onSuccess, file } = options;
    setTimeout(() => {
      onSuccess(file);
    }, 100);
  };

  const uploadSolicitud = (values) => {
    const config = {
			method: 'POST',
			body: JSON.stringify(values),
			headers:{
				'Content-Type': 'application/json',
			},
		}

    fetch('http://localhost:8000/api/solicitud', config)
			.then((res) => res.json())
			.then((data) => {
				if (data.ok) {
          form.resetFields();
          setFileList([]);
          message.success('Solicitud enviada');
				} else {
					message.error('Ocurrió un error al intentar enviar la solicitud');
				}
				setLoading(false);
        setRefetch(true);
			});
  }

  const handleSubmit = async values => {
    if (fileList.length > 0) {
      uploadFileWithFirebase(filesToUpload[0], setLoadingFile, (fileUrl) => {
        values.Imagen = fileUrl;
        uploadSolicitud({...values, IdUsuario: userInformation.IdUsuario});
      });
    } else {
      uploadSolicitud({...values, IdUsuario: userInformation.IdUsuario});
    }
  };

  useEffect(() => {
    if (fileList === []) {
      setFilesToUpload([]);
    }
  }, [fileList]);

  return (
    <div className="complains-container">
      <Row>
        <div className="title w-100 mb-3 text-white text-uppercase">Solicitudes</div>
      </Row>
      <Row gutter={[16, 16]}>
        {
          userInformation.IdRol === 2 && (
            <AllComplains idRol={userInformation.IdRol} key="allComplains" />
          )
        }
        {
          userInformation.IdRol === 1 && (
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
                          onChange={handleFile}
                          maxCount={1}
                          listType="text"
                          fileList={fileList}
                          customRequest={customRequest}
                        >
                          <Button icon={<UploadOutlined />} className="w-100 text-right" />
                        </Upload>
                      </Col>
                      <Col flex="200px">
                        <Button 
                          type="primary"
                          htmlType="submit"
                          size="large"
                          className="w-100"
                          loading={loadingFile || loading}
                        >
                          Ingresar
                        </Button>
                      </Col>
                    </>
                  )}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Mis solicitudes" key="2">
                <MyComplainsTable idUser={userInformation.IdUsuario} refetch={refetch} setRefetch={setRefetch} />
              </Tabs.TabPane>
            </Tabs>
          )
        }
      </Row>
    </div>
  )
}

export default Complains;