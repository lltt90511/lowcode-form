import { Form, InputNumber } from "antd";

import { DigitProps, FormProps, FormType } from "@/interface/formItem";
import { FC } from "react";
import { ProFormDigit, ProFormSelect, ProFormText } from "@ant-design/pro-components";

const formItem: FC<FormProps> = (props) => {
  const { name = '', label = '', ...reset } = props;
  return <Form.Item
    label={label} 
    name={name}
    style={{marginBottom: 0}}
  >
    <InputNumber {...reset} style={{width: '100%'}} />
  </Form.Item>
}

const formProps: FormProps & DigitProps = {
  name: 'name',
  label: '数字',
  size: 'small',
  max: 1,
  min: 0
}

const optionItem: FC = () => {
  return <>
    <ProFormText 
      name='name'
      label='名称'
    />
    <ProFormSelect 
      name='size'
      label='大小'
      valueEnum={{
        small: 'small',
        middle: 'middle',
        large: 'large'
      }}
    />
    <ProFormDigit
      name='max'
      label='最大值'
    />
    <ProFormDigit
      name='min'
      label='最小值'
    />
  </>
}

export default {
  type: FormType.DIGIT,
  formItem,
  formProps,
  optionItem
}