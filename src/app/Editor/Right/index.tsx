import useFormList from "@/hooks/useFormList";
import useSelectId from "@/hooks/useSelectId";
import { updateFormItemProps } from "@/store/formItemReducer";
import { getItemByType } from "@/utils/utils"
import { ProCard } from "@ant-design/pro-components";
import { Form } from "antd"
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default () => {
  const curSelectId = useSelectId();
  const formList = useFormList();
  const curSelect = formList?.find((item) => item?.id === curSelectId);  

  const [form] = Form.useForm();

  const item = getItemByType(curSelect?.type);
  const FormItem = item?.optionItem;

  const dispatch = useDispatch();

  const onChange = (values: any) => {
    dispatch(updateFormItemProps(values))
  }
  
  useEffect(() => {
    form.setFieldsValue(item?.formProps || {})
  }, [item?.formProps])

  return <ProCard
    title='属性'
    headerBordered
    bordered
    headStyle={{padding: '10px'}}
    bodyStyle={{padding: '10px'}}
  >
    <Form
      form={form}
      onValuesChange={(values) => {
        onChange(values)
      }}
    >
      {FormItem && <FormItem />}
    </Form>
  </ProCard>
}