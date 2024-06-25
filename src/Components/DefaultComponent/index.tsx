import { FC } from 'react';

import { useDispatch } from "react-redux";

import { nanoid } from 'nanoid';

import { FormType, Props } from '@/interface/formItem';

import { addFormItem } from '@/store/formItemReducer';

import styles from './index.module.css';

type IProps = {
  type?: FormType;
  formProps?: Props;
  FormItem?: FC;
}

export default (props: IProps) => {
  const { type = FormType.DIGIT, formProps = {}, FormItem = () => <div/> } = props;
  
  console.log('type-->', type, formProps)
  const dispatch = useDispatch();

  const onClick = () => {
    console.log('type--->',type)
    dispatch(addFormItem({
      type,
      id: nanoid(),
      formProps
    }))
  }

  return <div key={type} className={styles.main} onClick={onClick}>
    <div className={styles.component}>
      <FormItem />
    </div>
  </div>
}