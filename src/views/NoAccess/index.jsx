import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';


function NoAccessView() {
  const navigate = useNavigate();

  return (
    <Result
      status="403"
      title="403"
      subTitle="No tienes permisos para acceder a esta página"
      extra={
        <Button type="primary" onClick={() => navigate('/', { replace: true })}>
          Regresar al inicio
          </Button>
      }
    />
  )
};

export default NoAccessView;