import { FC } from 'react';

import { useDispatch } from "react-redux";

import { nanoid } from 'nanoid';

import { FormType, Props } from '@/interface/formItem';

import { addFormItem } from '@/store/formItemReducer';

import styles from './index.module.css';

interface IProps {
  type?: FormType;
  defaultProps?: Props;
  FormItem?: FC;
}

export default (props: IProps) => {
  const { type = FormType.DIGIT, defaultProps = {}, FormItem = () => <div/> } = props;
  
  // const dispatch = useDispatch();

  const onClick = () => {
    // dispatch(addFormItem({
    //   type,
    //   id: nanoid(),
    //   defaultProps
    // }))
  }

  return <div key={type} className={styles.main} onClick={onClick}>
    <div className={styles.component}>
      <FormItem />
    </div>
  </div>
}