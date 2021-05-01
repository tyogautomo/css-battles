import React from 'react';

import styles from './CoronaVirus.module.css';

const CoronaVirus = () => {
  const dots = [{ name: 'dot_big' }, { name: 'dot_medium' }, { name: 'dot_small' }];
  const spikes = [{ name: 'spk_vertical' }, { name: 'spk_diagonal1' }, { name: 'spk_diagonal2' }]
  return (
    <div className={styles.container}>
      <div className={styles.virus_body}>
        {dots.map(dot => <div className={`${styles.dot} ${styles[dot.name]}`}></div>)}
        {spikes.map(spike => <div className={`${styles.spike} ${styles[spike.name]}`}></div>)}
      </div>
    </div>
  );
};

export { CoronaVirus };
