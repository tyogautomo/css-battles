import React from 'react'

import styles from './CoronaVirus.module.css';

const CoronaVirus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <div className={`${styles.dot} ${styles.dot_80px}`}></div>
        <div className={`${styles.dot} ${styles.dot_40px}`}></div>
        <div className={`${styles.dot} ${styles.dot_20px}`}></div>
      </div>
    </div>
  );
};

export { CoronaVirus };
