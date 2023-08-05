import React from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import styles from './MapNothingFound.module.scss';

const MapNothingFound: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <li className={styles.nothingFound}>
      <span className={cx('icon-nothing-found', styles.nothingFound__icon)}/>
      <p className={styles.nothingFound__text}>{t('mapNothingFound')}</p>
    </li>
  );
};

export default MapNothingFound;
