import { FC } from 'react';

import { useDispatch } from "react-redux";

import { FormType, Props } from '@/interface/formItem';

import { selectFormItem } from '@/store/formItemReducer';

import styles from './index.module.css';
import classNames from 'classnames';
import useSelectId from '@/hooks/useSelectId';

type IProps = {
  type?: FormType;
  id?: string;
  formProps?: Props;
  FormItem?: FC<Props>;
}

export default (props: IProps) => {
  const { type = FormType.DIGIT, id = '', formProps = {}, FormItem = null } = props;
  
  const curSelectId = useSelectId();

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(selectFormItem(id))
  }

  const wrapperDefaultClassName = styles.main;
  const selectedClassName = styles.selected;
  const wrapperClassName = classNames({
      [wrapperDefaultClassName]: true,
      [selectedClassName]: id === curSelectId,
  });
  
  return <div key={type} className={wrapperClassName} onClick={onClick}>
    <div className={styles.component}>
      {FormItem && <FormItem {...formProps} />}
    </div>
  </div>
}

