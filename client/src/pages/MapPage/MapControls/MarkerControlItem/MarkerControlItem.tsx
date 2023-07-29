import React, { useCallback } from 'react';
import { IMarkerControllerItemProps } from '@src/pages/MapPage/MapControls/MarkerControlItem/types';
import { useAppSelector } from '@src/hooks/hooks';
import { selectLocale } from '@src/store/app/selectors';
import styles from './MarkerControlItem.module.scss';

const MarkerControlItem: React.FC<IMarkerControllerItemProps> = ({ marker, setCoords, setActiveMarker }) => {
  const { lng, lat, link, id, icon, title, address, description } = marker;
  const locale = useAppSelector(selectLocale);
  
  const clickHandler = useCallback(() => {
    setCoords(lat, lng, 15);
    setActiveMarker(marker);
  }, []);
  
  return (
    <li className={styles.marker} onClick={clickHandler}>
      <img src={icon} alt="marker icon" className={styles.marker__img}/>
      <div className={styles.marker__info}>
        <h5 className={styles.marker__title}>{title[locale]}</h5>
        <p className={styles.marker__adress}>{address[locale]}</p>
      </div>
    </li>
  );
};

export default MarkerControlItem;
