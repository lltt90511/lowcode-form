import useFormList from "@/hooks/useFormList";
import useSelectId from "@/hooks/useSelectId";
import { updateFormItemProps } from "@/store/formItemReducer";
import { getItemByType } from "@/utils/utils"
import { ProCard } from "@ant-design/pro-components";
import { Form } from "antd"
import { useDispatch } from "react-redux";

export default () => {
  const curSelectId = useSelectId();
  const formList = useFormList();
  const curSelect = formList?.find((item) => item?.id === curSelectId);  

  const item = getItemByType(curSelect?.type);
  const FormItem = item?.optionItem;

  const dispatch = useDispatch();

  const onChange = (values: any) => {
    dispatch(updateFormItemProps(values))
  }
  
  console.log('item---->',item?.formProps)
  return <ProCard
    title='属性'
    headerBordered
    bordered
    headStyle={{padding: '10px'}}
    bodyStyle={{padding: '10px'}}
  >
    {
      FormItem && <Form
        initialValues={{...item?.formProps}}
        onValuesChange={(values) => {
          console.log('onValuesChange-->',values)
          onChange(values)
        }}
      >
        <FormItem />
      </Form>
    }
  </ProCard>
}