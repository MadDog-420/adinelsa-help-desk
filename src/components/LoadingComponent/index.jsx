import { Row, Col, Spin } from 'antd';

const LoadingComponent = () => (
  <Row justify="center">
    <Col className="d-flex" style={{height: '400px'}}>
      <Spin size="large" />
    </Col>
  </Row>
);

export default LoadingComponent;