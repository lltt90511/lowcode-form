import { FC } from 'react';

import { useDispatch } from "react-redux";

import { nanoid } from 'nanoid';

import { FormType, Props } from '@/interface/formItem';

import { addFormItem } from '@/store/formItemReducer';

import styles from './index.module.css';

type IProps = {
  type?: FormType;
  formProps?: Props;
  FormItem?: FC<Props>;
}

export default (props: IProps) => {
  const { type = FormType.DIGIT, formProps = {}, FormItem = null } = props;
  
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addFormItem({
      type,
      id: nanoid(),
      formProps: formProps
    }))
  }

  return <div key={type} className={styles.main} onClick={onClick}>
    <div className={styles.component}>
      {FormItem && <FormItem {...formProps}/>}
    </div>
  </div>
}