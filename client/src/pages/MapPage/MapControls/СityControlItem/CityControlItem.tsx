import React, { useCallback } from 'react';
import { ICityControlItemProps } from '@src/pages/MapPage/MapControls/СityControlItem/types';
import { useAppSelector } from '@src/hooks/hooks';
import { selectLocale } from '@src/store/app/selectors';
import styles from './CityControlItem.module.scss';

const CityControlItem: React.FC<ICityControlItemProps> = ({ marker, setCoords }) => {
  const { icon, lng, lat, name, count } = marker;
  const locale = useAppSelector(selectLocale);
  
  const clickHandler = useCallback(() => {
    setCoords(lat, lng, 10);
  }, []);
  
  return (
    <li className={styles.marker} onClick={clickHandler}>
      <img src={icon} alt="marker icon" className={styles.marker__img}/>
      <div className={styles.marker__info}>
        <h5 className={styles.marker__title}>{name[locale]}</h5>
        <div className={styles.marker__counter}>{count}</div>
      </div>
    </li>
  );
};

export default CityControlItem;
