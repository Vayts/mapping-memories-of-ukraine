import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { IMapNothingFoundProps } from '@src/pages/MapPage/MapControls/MapNothingFound/types';
import { MAP } from '@constants/map';
import styles from './MapNothingFound.module.scss';

const MapNothingFound: React.FC<IMapNothingFoundProps> = ({ setCoords }) => {
  const { t } = useTranslation();
  
  const zoomOut = useCallback(() => {
    setCoords(MAP.DEFAULT_LAT, MAP.DEFAULT_LNG, MAP.DEFAULT_ZOOM);
  }, []);
  
  return (
    <li className={styles.nothingFound}>
      <span className={cx('icon-nothing-found', styles.nothingFound__icon)}/>
      <p className={styles.nothingFound__text}>{t('mapNothingFound')}</p>
      <span className={styles.nothingFound__zoomButton} onClick={zoomOut}>{t('zoomOut')}</span>
    </li>
  );
};

export default MapNothingFound;
