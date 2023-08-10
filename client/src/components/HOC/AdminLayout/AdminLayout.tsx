import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AdminLayout.module.scss';

const AdminLayout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Outlet/>
    </div>
  );
};

export default AdminLayout;
