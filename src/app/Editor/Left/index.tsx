import { ProCard } from "@ant-design/pro-components"
import Title from "../Components/Title"
import DefaultComponent from "@/Components/DefaultComponent"

export default () => {
  return <ProCard
    title='组件列表'
    bordered
  >
    <ProCard 
      title='文本'
    >
      <DefaultComponent>
        <Title text='这个是标题'/>
      </DefaultComponent>
    </ProCard>
  </ProCard>
}