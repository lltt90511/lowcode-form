import { Button } from "antd";
import Link from "next/link";

import styles from './page.module.css';

export default () =>  {
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>快速问卷</h1>
      <Link href='/Editor'>
        <Button
          type = 'primary'
        >
          创建问卷
        </Button>
      </Link>
    </div>
  );
}
