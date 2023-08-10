import React from 'react';
import styles from './InterviewPage.module.scss';

const InterviewPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.banner}>
          <img src='../assets/img/banner.svg' className={styles.banner__img} alt="mapping memories"/>
        </div>
      </div>
    </div>
  );
};

export default InterviewPage;
