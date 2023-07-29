import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@src/components/Header/Header';
import styles from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.content}>
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
