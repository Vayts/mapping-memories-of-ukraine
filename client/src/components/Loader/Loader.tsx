import React from 'react';
import styles from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__block}>
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
