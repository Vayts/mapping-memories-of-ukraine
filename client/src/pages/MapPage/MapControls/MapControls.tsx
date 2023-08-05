import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '@src/hooks/hooks';
import {
  selectCityMarkers,
  selectMemorialMarkers,
  selectTypeMarkers,
} from '@src/store/map/selectors';
import MarkerControlItem from '@src/pages/MapPage/MapControls/MarkerControlItem/MarkerControlItem';
import { IMapControlsProps } from '@src/pages/MapPage/MapControls/types';
import { MAP } from '@constants/map';
import CityControlItem from '@src/pages/MapPage/MapControls/СityControlItem/CityControlItem';
import { IMemorialMarker } from '@src/store/map/types';
import { getExtendBounds } from '@helpers/mapHelper';
import TypeControlItem from '@src/pages/MapPage/MapControls/TypeControlItem/TypeControlItem';
import MapNothingFound from '@src/pages/MapPage/MapControls/MapNothingFound/MapNothingFound';
import { useTranslation } from 'react-i18next';
import styles from './MapControls.module.scss';

const MapControls: React.FC<IMapControlsProps> = ({ setCoords, setActiveMarker, zoom, bounds }) => {
  const [sortedMarkers, setSortedMarkers] = useState<IMemorialMarker[]>([]);
  const [controlType, setControlType] = useState<string>(MAP.CITY);
  const markers = useAppSelector(selectMemorialMarkers);
  const cities = useAppSelector(selectCityMarkers);
  const markerTypes = useAppSelector(selectTypeMarkers);
  const { t } = useTranslation();
  
  useEffect(() => {
    if (zoom <= MAP.CITY_ZOOM) {
      setControlType(MAP.CITY);
    }
    
    if (controlType !== MAP.MARKER && zoom > MAP.CITY_ZOOM) {
      setControlType(MAP.MARKER);
    }
  }, [zoom]);
  
  useEffect(() => {
    if (bounds) {
      const extendedBounds = getExtendBounds(bounds);
      const sorted = markers.filter((item) => {
        if (
          item.lat >= extendedBounds.south
          && item.lat <= extendedBounds.north
          && item.lng >= extendedBounds.west
          && item.lng <= extendedBounds.east
        ) {
          return item;
        }
        return null;
      });
      setSortedMarkers(sorted);
    }
  }, [markers, bounds]);
  
  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setControlType(e.target.value);
  }, []);
  
  const generateContent = () => {
    if (sortedMarkers.length === 0 && controlType === MAP.MARKER) {
      return (
        <MapNothingFound setCoords={setCoords}/>
      );
    }

    if (controlType === MAP.MARKER) {
      return (
        sortedMarkers.map((item) => (
          <MarkerControlItem
            key={item._id}
            marker={item}
            setCoords={setCoords}
            setActiveMarker={setActiveMarker}
          />
        )));
    }

    if (controlType === MAP.CITY) {
      return cities.map((item) => (
        <CityControlItem
          key={item._id}
          marker={item}
          setCoords={setCoords}
        />
      ));
    }
  };
  
  return (
    <div className={styles.controls}>
      <div className={styles.controls__categories}>
        <h3 className={styles.controls__title}>{t('typeOfMemorials')}</h3>
        <ul className={styles.controls__list}>
          {markerTypes.map((item) => {
            return (
              <TypeControlItem
                key={item._id}
                typeMarker={item}
              />
            );
          })}
        </ul>
      </div>
      <div className={styles.controls__markers}>
        <div className={styles.controls__type}>
          <div>
            <input
              type='radio'
              name='markerType'
              id='memorialType'
              value={MAP.MARKER}
              className={styles.controls__radio}
              checked={controlType === MAP.MARKER}
              onChange={changeHandler}
            />
            <label htmlFor="memorialType" className={styles.controls__label}>
              {t('memorials')}
            </label>
          </div>
          <div>
            <input
              type='radio'
              name='markerType'
              id='cityType'
              value={MAP.CITY}
              className={styles.controls__radio}
              checked={controlType === MAP.CITY}
              onChange={changeHandler}
            />
            <label htmlFor="cityType" className={styles.controls__label}>
              {t('cities')}
            </label>
          </div>
        </div>
        <ul className={styles.controls__list}>
          {generateContent()}
        </ul>
      </div>
    </div>
  );
};

export default MapControls;
