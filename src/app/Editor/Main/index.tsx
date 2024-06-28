'use client'

import { FC } from "react";

import { MessageInstance } from "antd/es/message/interface";

import Left from "../Left"
import Middle from "../Middle";
import Right from "../Right";

import { Button, message } from "antd";

import { resetForm } from "@/store/formItemReducer";

import dynamic from "next/dynamic";

import { useDispatch } from "react-redux";

import { useLocalStorageState } from "ahooks";

import useFormList from "@/hooks/useFormList";

import styles from './index.module.css';

interface IProps {
  messageApi?: MessageInstance;
}

const Reset: FC<IProps> = ({messageApi}) => {
  const dispatch = useDispatch();

  const onReset = () => {
    dispatch(resetForm({}));
    messageApi && messageApi?.success('重置成功！');
  }

  return <Button onClick={onReset}>重置</Button>
}

const Send: FC<IProps> = ({messageApi}) => {
  const formList = useFormList();

  const [_, setFormData] = useLocalStorageState('formData')

  const onSend = () => {
    setFormData(formList);
    messageApi && messageApi.success('提交成功！');
  }

  return <Button type='primary' onClick={onSend}>提交</Button>
}

export default () => {
  const PageContainer = dynamic(() => import("../../../components/PageContainer"), {ssr: false});

  const [messageApi, contextHolder] = message.useMessage();

  return <>
    {contextHolder}
    <PageContainer
      header={{
        onBack: () => {}
      }}
      token={{
        paddingBlockPageContainerContent: 0,
        paddingInlinePageContainerContent: 0,
      }}
      footer={[
        <Reset key='reset' messageApi={messageApi} />,
        <Send key='send' messageApi={messageApi} />
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
          <Right />
        </div>
      </div>
    </PageContainer>
  </>
}