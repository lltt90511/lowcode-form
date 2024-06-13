'use client'

import { PageContainer } from "@ant-design/pro-components"

import Left from "./Left"
import Middle from "./Middle";

import styles from './page.module.css';

export default () => {                                                                
  return <PageContainer
    header={{
      onBack: () => {}
    }}
    token={{
      paddingBlockPageContainerContent: 0,
      paddingInlinePageContainerContent: 0,
    }}
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
        {/* <Left /> */}
      </div>
    </div>
  </PageContainer>
}