import React, { ReactElement } from 'react';
import { ComponentType } from '@/Interface/Component';

import styles from './index.module.css';

interface IProps {
  type?: ComponentType; 
  onClick?: () => void;
  children?: ReactElement;
}

export default (props: IProps) => {
  const { type = ComponentType.Digit, onClick = () => {}, children = null } = props;
  
  return <div key={type} className={styles.main} onClick={onClick}>
    {/* <div className={styles.component}> */}
      {
        children
      }
    {/* </div> */}
  </div>
}