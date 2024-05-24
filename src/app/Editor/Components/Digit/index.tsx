import { FormProps } from "@/Interface/Component"
import { ProFormDigit } from "@ant-design/pro-components"

export default (props: FormProps) => {
  const { name = '', label = '' } = props;
  return <ProFormDigit 
    name={name}
    label={label}
  />
}