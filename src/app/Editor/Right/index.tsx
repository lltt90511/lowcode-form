import { FormType } from "@/interface/formItem";
import { getItemByType } from "@/utils/utils"
import { Form } from "antd"

interface IProps {
  type: FormType;
}

export default (props: IProps) => {
  const { type = FormType.TEXT } = props;
  const item = getItemByType(type);
  const FormItem = item.optionItem;
  return <Form>
    <FormItem />
  </Form>
}