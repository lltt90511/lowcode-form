import { DefaultProps, TitleProps } from "@/Interface/Component"
import { ProFormDigit } from "@ant-design/pro-components"

import { Typography } from "antd";

export default (props: TitleProps) => {
  const { text = '' } = props;
  return <Typography.Title>
    {text}
  </Typography.Title>
}