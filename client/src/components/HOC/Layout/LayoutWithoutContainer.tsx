import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@src/components/Header/Header';
import styles from './Layout.module.scss';

const LayoutWithoutContainer: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <Outlet/>
    </div>
  );
};

export default LayoutWithoutContainer;
