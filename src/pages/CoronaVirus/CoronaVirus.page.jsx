import React from 'react'

import styles from './CoronaVirus.module.css';

const CoronaVirus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <div className={`${styles.dot} ${styles.dot_var1}`}></div>
        <div className={`${styles.dot} ${styles.dot_var2}`}></div>
        <div className={`${styles.dot} ${styles.dot_var3}`}></div>
      </div>
    </div>
  );
};

export { CoronaVirus };
