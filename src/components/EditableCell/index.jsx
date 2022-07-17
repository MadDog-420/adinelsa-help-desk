import { Form } from 'antd';
import componentMapping from '../CustomForm/FormItem/constants';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {

  const InputNode = componentMapping[inputType];
  const options = restProps.options || []; 

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          <InputNode
            {...(inputType === 'singleSelect' && { options })}
          />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default EditableCell;