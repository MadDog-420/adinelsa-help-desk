import {
  Checkbox, DatePicker, Input, Radio, Select, Switch, Typography,
} from 'antd';

export const componentMapping = {
  input: Input,
  password: Input.Password,
  textArea: Input.TextArea,
  checkbox: Checkbox,
  datePicker: DatePicker,
  singleSelect: Select,
  switchComponent: Switch,
  radio: Radio.Group,
  readOnly: Typography.Text,
};

export default componentMapping;