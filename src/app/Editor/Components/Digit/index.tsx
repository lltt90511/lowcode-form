import { Form, InputNumber } from "antd";

import { DigitProps, FormProps, FormType } from "@/interface/formItem";
import { FC } from "react";
import { ProFormSelect } from "@ant-design/pro-components";

const formItem: FC<FormProps> = (props) => {
  const { name = '', label = '' } = props;
  return <InputNumber style={{width: '100%'}} />
}

const formProps: FormProps & DigitProps = {
  name: '',
  label: '',
  size: 'small',
  max: 1,
  min: 0
}

const optionItem: FC = () => {
  return <>
    <ProFormSelect 
      name='fontSize'
      label='字体大小'
      valueEnum={{
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      }}
    />
  </>
}

export default {
  type: FormType.DIGIT,
  formItem,
  formProps,
  optionItem
}