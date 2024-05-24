'use client'

import { PageContainer, ProCard } from "@ant-design/pro-components"

import Left from "./Left"
import Middle from "./Middle";

import styles from './page.module.css';

export default () => {
  return <PageContainer
    onBack={() => {}}
  >
    <div className={styles.main}>
      <div className={styles.left}>
        <Left />
      </div>
      <div className={styles.middle}>
        <Middle />
      </div>
    </div>
  </PageContainer>
}