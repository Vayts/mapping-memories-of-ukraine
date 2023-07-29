import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            Logo
          </div>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <NavLink className={styles.link} to='/map'>Мапа</NavLink>
              </li>
              <li className={styles.item}>
                <NavLink className={styles.link} to='/map'>Колекція інтерв&apos;ю</NavLink>
              </li>
              <li className={styles.item}>
                <NavLink className={styles.link} to='/map'>Про проект</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/*<div className={styles.imgWrapper}>*/}
      {/*  <img className={styles.img} src='../assets/img/banner.svg'/>*/}
      {/*</div>*/}
    </>
  );
};

export default Header;
