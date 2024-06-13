import { ProCard } from "@ant-design/pro-components"
import Title from "../Components/Title"
import DefaultComponent from "@/components/DefaultComponent"
import { Typography } from "antd"
import Digit from "../Components/Digit"
import { FormType } from "@/interface/formItem"
import { nanoid } from "nanoid"

export default () => {
  const fn = (n: number, m: number) => {
    const k = Math.ceil(n / m);
    const matrix = new Array(m).fill(0).map(() => new Array(k).fill('*'));
    console.log('--->',JSON.stringify(matrix))
    let step = 1, x = 0, y = 0;
    while (step <= n) {
      while (y < k && matrix[x][y] === '*' && step <= n) {
        matrix[x][y++] = step++;
      }
      x += 1;
      y -= 1;
      while (x < m && matrix[x][y] === '*' && step <= n) {
        matrix[x++][y] = step++;
      }
      x -= 1;
      y -= 1;
      while (y >= 0 && matrix[x][y] === '*' && step <= n) {
        matrix[x][y--] = step++;
      }
      x -= 1;
      y += 1;
      while (x >= 0 && matrix[x][y] === '*' && step <= n) {
        matrix[x--][y] = step++;
      }
      x += 1;
      y += 1;
    }
    for (let i = 0; i < m;i++) {
      console.log(matrix[i].join(' '))
    }
  }
  fn(9, 4);
  return <ProCard
    title='组件列表'
    bordered
    headStyle={{padding: '10px'}}
    bodyStyle={{padding: '10px'}}
  >
    <Typography.Title>
      文本
    </Typography.Title>
    <DefaultComponent
      defaultProps = {{
        type: FormType.TITLE,
        id: nanoid()
      }}
      FormItem={Title.formItem}
    />
    <Typography.Title>
      输入
    </Typography.Title>
    <DefaultComponent
      defaultProps = {{
        type: FormType.DIGIT,
        id: nanoid()
      }}
      FormItem={Digit}
    />
  </ProCard>
}