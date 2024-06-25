import { DefaultProps, FormType, TextProps } from "@/interface/formItem";
import { ProFormSelect, ProFormText } from "@ant-design/pro-components";

import { Form, Typography } from "antd";

import { FC } from "react";

const formProps: TextProps = {
  text: '这是标题',
  textAlign: 'left',
  fontSize: '28'
}

const formItem: FC<TextProps> = (props) => {
  const { text = '这是标题', textAlign = 'left', fontSize = '28' } = props;
  return <Typography.Title 
    style={{textAlign, fontSize: `${fontSize}px`, marginBottom: 0}}>
    {text}
  </Typography.Title> 
}

const optionItem: FC = () => {
  return <>
    <ProFormText 
      name='text'
      label='内容'
    />
    <ProFormSelect 
      name='textAlign'
      label='对齐方式'
      valueEnum={{
        left: 'left',
        center: 'center',
        right: 'right'
      }}
    />   
    <ProFormSelect 
      name='fontSize'
      label='字体大小'
      valueEnum={{
        24: '24',
        25: '25',
        26: '26',
        27: '27',
        28: '28',
        29: '29',
        30: '30'
      }}
    />
  </>
}

export default {
  type: FormType.TITLE,
  formProps,
  formItem,
  optionItem
}