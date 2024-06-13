import { DefaultProps, FormType, TitleProps } from "@/interface/formItem";

import { Typography } from "antd";

import { FC } from "react";

const formItem: FC<TitleProps> = (props) => {
  const { text = '这是标题', textAlign = 'left', fontSize = '28' } = props;
  return <Typography.Title 
    style={{textAlign, fontSize: `${fontSize}px`, marginBottom: 0}}>
    {text}
  </Typography.Title> 
}

const defaultProps: DefaultProps & TitleProps = {
  type: FormType.TITLE,
  id: '',
  text: '这是标题',
  textAlign: 'left',
  fontSize: '28'
}

export default {
  type: FormType.TITLE,
  formItem,
  defaultProps
}