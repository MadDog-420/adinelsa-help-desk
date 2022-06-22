import { Form } from 'antd';
import PropTypes from 'prop-types';
import { componentMapping } from './constants';

const FormItem = (props) => {
  const {
    component,
    label,
    name,
    rules,
    icon,
    options,
    form,
    disabled,
    format,
    placeholder,
    checkedChildren,
    unCheckedChildren,
  } = props;

  const RefInput = componentMapping[component];

  return (
    <div className="h-100 w-100">
      <Form.Item
        name={name}
        label={label}
        rules={rules}
        valuePropName={component === 'checkbox' || component === 'switchComponent' ? 'checked' : undefined}
      >
        <RefInput
          form={form}
          {...(options && { options })}
          {...(icon && { prefix: icon })}
          autoComplete="current-password"
          name={name}
          disabled={disabled}
          {...(format && { format })}
          placeholder={placeholder}
          size="large"
          {...(checkedChildren && { checkedChildren })}
          {...(unCheckedChildren && { unCheckedChildren })}
        />
      </Form.Item>
    </div>
  );
};

FormItem.propTypes = {
  component: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string.isRequired,
  rules: PropTypes.oneOfType([PropTypes.any]),
  icon: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.any]),
  options: PropTypes.oneOfType([PropTypes.array]),
  form: PropTypes.oneOfType([PropTypes.any]).isRequired,
  disabled: PropTypes.bool,
  format: PropTypes.string,
  placeholder: PropTypes.string,
  checkedChildren: PropTypes.node,
  unCheckedChildren: PropTypes.node,
};

FormItem.defaultProps = {
  component: 'input',
  label: '',
  rules: null,
  icon: null,
  value: undefined,
  options: null,
  disabled: false,
  format: null,
  placeholder: '',
  checkedChildren: undefined,
  unCheckedChildren: undefined,
};

export default FormItem;
