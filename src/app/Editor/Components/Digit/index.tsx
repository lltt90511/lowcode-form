import { Form, InputNumber } from "antd";

import { FormProps } from "@/interface/formItem";

export default (props: FormProps) => {
  const { name = '', label = '' } = props;
  return <Form.Item
    label={label} 
    name={name}
    style={{marginBottom: 0}}
  >
    <InputNumber style={{width: '100%'}} />
  </Form.Item>
}