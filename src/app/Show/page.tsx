'use client'

import { getItemByType } from "@/utils/utils"
import { useLocalStorageState } from "ahooks"
import { Form } from "antd"
import { FormItemData } from "@/interface/formItem"
import { useEffect, useState } from "react"

export default () => {
  const [formData, _] = useLocalStorageState('formData');

  const [list, setList] = useState<FormItemData[]>([]);

  const [form] = Form.useForm();

  console.log('formData-->', formData);

  useEffect(() => {
    setList(Array.isArray(formData) ? formData : Object.entries(formData || {}));
  }, [])

  return <Form
    form={form}
  >
    {
      list?.map((data) => {
        const { type, id, formProps } = data;
        const item = getItemByType(type);
        const FormItem = item?.formItem;
        return  FormItem && <FormItem key={id} {...formProps}/>
      }) 
    } 
  </Form>
}