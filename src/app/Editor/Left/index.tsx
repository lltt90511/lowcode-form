import { ProCard } from "@ant-design/pro-components"
import LeftItem from "@/components/LeftItem"
import { Typography } from "antd"
import { FormList, TextList } from "./data"

export default () => {
  return <ProCard
    title='组件列表'
    headerBordered
    bordered
    headStyle={{padding: '10px'}}
    bodyStyle={{padding: '10px'}}
  >
    <Typography.Title>
      文本
    </Typography.Title>
    {
      TextList.map((item) => <LeftItem
        key={item.type}
        type = {item.type}
        formProps = {item.formProps}
        FormItem = {item.formItem}
      />)
    }
    <Typography.Title>
      输入
    </Typography.Title>
    {
      FormList.map((item) => <LeftItem
        key={item.type}
        type = {item.type}
        formProps = {item.formProps}
        FormItem = {item.formItem}
      />)
    }
  </ProCard>
}