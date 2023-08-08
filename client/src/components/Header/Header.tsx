import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <img className={styles.header__logo} src='../assets/img/logo.svg' alt='mapping memories of ukraine logo'/>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <NavLink
                className={({ isActive }) => {
                  return cx(styles.nav__link, isActive ? styles.active : '');
                }}
                to='/map'
              >
                {t('mapOfMemorials')}
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                className={({ isActive }) => {
                  return cx(styles.nav__link, isActive ? styles.active : '');
                }}
                to='/interviews'
              >
                {t('interviews')}
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                className={({ isActive }) => {
                  return cx(styles.nav__link, isActive ? styles.active : '');
                }}
                to='/art-projects'
              >
                {t('artProjects')}
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                className={({ isActive }) => {
                  return cx(styles.nav__link, isActive ? styles.active : '');
                }}
                to='/special-projects'
              >
                {t('specialProjects')}
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                className={({ isActive }) => {
                  return cx(styles.nav__link, isActive ? styles.active : '');
                }}
                to='/our-team'
              >
                {t('ourTeam')}
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                className={({ isActive }) => {
                  return cx(styles.nav__link, isActive ? styles.active : '');
                }}
                to='/contacts'
              >
                {t('contacts')}
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                className={({ isActive }) => {
                  return cx(styles.nav__link, isActive ? styles.active : '');
                }}
                to='/our-friends'
              >
                {t('ourFriends')}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
