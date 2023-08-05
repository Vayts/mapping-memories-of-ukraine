import React from 'react';
import { InfoWindow, Marker } from '@react-google-maps/api';
import { IMemorialMarkerProps } from '@src/pages/MapPage/MemorialMarker/types';
import { useAppSelector } from '@src/hooks/hooks';
import { selectLocale } from '@src/store/app/selectors';
import styles from './MemorialMarker.module.scss';

const MemorialMarker: React.FC<IMemorialMarkerProps> = (
  {
    marker,
    activeMarker,
    setActiveMarker,
    setCoords,
  },
) => {
  const {
    _id,
    lat,
    lng,
    description,
    title,
    icon,
  } = marker;
  const locale = useAppSelector(selectLocale);
  
  const setMarker = () => {
    setActiveMarker(marker);
    setCoords(lat, lng, 15);
  };
  
  const closeMarker = () => {
    setActiveMarker(null);
  };
  
  return (
    <>
      <Marker
        position={{ lat, lng }}
        icon={{ url: icon }}
        onClick={setMarker}
      />
      {activeMarker?._id === _id ? (
        <InfoWindow
          position={marker}
          onCloseClick={closeMarker}
          options={
            {
              pixelOffset: new google.maps.Size(0, -40),
              disableAutoPan: true,
            }
          }
        >
          <div className={styles.wrapper}>
            <h2 className={styles.title}>{title[locale]}</h2>
            <p className={styles.description}>{description[locale]}</p>
          </div>
        </InfoWindow>
      ) : null}
    </>
  );
};

export default MemorialMarker;
