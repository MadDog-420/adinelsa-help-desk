import {
  Checkbox, DatePicker, Input, Radio, Select, Switch,
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
};

export default componentMapping;