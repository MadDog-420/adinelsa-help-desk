import {
  Col, Form, Row,
} from 'antd';
import PropTypes from 'prop-types';
import getInitialValues from './utils';
import FormItem from './FormItem';
import LoadingComponent from '../../components/LoadingComponent';

const CustomForm = (props) => {
  const {
    form,
    nameSection,
    itemList,
    handleSubmit,
    submitButton,
    requiredMark,
    loading,
    onChangedValues,
  } = props;

  if (loading) {
    return (
      <LoadingComponent />
    )
  }

  return (
    <Form
      form={form}
      name={nameSection}
      className="w-100"
      labelCol={{ span: 24 }}
      autoComplete="on"
      onFinish={handleSubmit}
      initialValues={getInitialValues(itemList)}
      requiredMark={requiredMark}
      onValuesChange={(changedValues) => onChangedValues(changedValues)}
    >
      <Row gutter={20}>
        {itemList.map((item) => (
          <Col {...item.responsive} key={item.name}>
            <FormItem
              component={item.component}
              label={item.label}
              name={item.name}
              rules={item.rules}
              {...(item.value && { value: item.value })}
              {...(item.icon && { icon: item.icon })}
              options={item.options}
              form={form}
              disabled={item.disabled}
              format={item.format}
              placeholder={item.placeholder}
              checkedChildren={item.checkedChildren}
              unCheckedChildren={item.unCheckedChildren}
              {...(item.dependencies && { dependencies: item.dependencies })}
              {...(item.hasFeedback && { hasFeedback: true })}
            />
          </Col>
        ))}
        {submitButton}
      </Row>
    </Form>
  );
};

CustomForm.propTypes = {
  form: PropTypes.oneOfType([PropTypes.any]).isRequired,
  nameSection: PropTypes.node,
  itemList: PropTypes.oneOfType([PropTypes.array]),
  handleSubmit: PropTypes.func,
  submitButton: PropTypes.node,
  rowFields: PropTypes.number,
  requiredMark: PropTypes.bool,
  loading: PropTypes.bool,
  onChangedValues: PropTypes.func,
};

CustomForm.defaultProps = {
  nameSection: null,
  itemList: [],
  handleSubmit: () => {},
  submitButton: undefined,
  rowFields: null,
  requiredMark: true,
  loading: false,
  onChangedValues: () => {},
};

export default CustomForm;