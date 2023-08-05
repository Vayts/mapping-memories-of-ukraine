import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <img className={styles.logo} src='../assets/img/logo.svg' alt='mapping memories of ukraine logo'/>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <NavLink className={styles.link} to='/map'>{t('mapOfMemorials')}</NavLink>
              </li>
              <li className={styles.item}>
                <NavLink className={styles.link} to='/interviews'>{t('interviews')}</NavLink>
              </li>
              <li className={styles.item}>
                <NavLink className={styles.link} to='/art-projects'>{t('artProjects')}</NavLink>
              </li>
              <li className={styles.item}>
                <NavLink className={styles.link} to='/special-projects'>{t('specialProjects')}</NavLink>
              </li>
              <li className={styles.item}>
                <NavLink className={styles.link} to='/our-team'>{t('ourTeam')}</NavLink>
              </li>
              <li className={styles.item}>
                <NavLink className={styles.link} to='/contacts'>{t('contacts')}</NavLink>
              </li>
              <li className={styles.item}>
                <NavLink className={styles.link} to='/our-friends'>{t('ourFriends')}</NavLink>
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
