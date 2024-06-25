'use client'

import Left from "./Left"
import Middle from "./Middle";
import Right from "./Right";

import styles from './page.module.css';
import { Provider } from "react-redux";
import store from "@/store";
import { Button } from "antd";
import dynamic from "next/dynamic";

export default () => {      
  const PageContainer = dynamic(() => import("../../components/PageContainer"), {ssr: false});

  return <Provider store={store}>
    <PageContainer
      header={{
        onBack: () => {}
      }}
      token={{
        paddingBlockPageContainerContent: 0,
        paddingInlinePageContainerContent: 0,
      }}
      footer={[
        <Button key='reset'>重置</Button>,
        <Button key='send' type='primary'>提交</Button>
      ]}
    >
      <div className={styles.main}>
        <div className={styles.left}>
          <Left />
        </div>
        <div className={styles.middle}>
          <div className={styles.content}>
            <Middle />
          </div>
        </div>
        <div className={styles.right}>
          {/* <Right /> */}
        </div>
      </div>
    </PageContainer>
  </Provider>
}