import React from 'react';
import { InfoWindow, Marker } from '@react-google-maps/api';
import { IMemorialMarkerProps } from '@src/pages/MapPage/MemorialMarker/types';
import { useAppSelector } from '@src/hooks/hooks';
import { selectLocale } from '@src/store/app/selectors';
import { MAP } from '@constants/map';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './MemorialMarker.module.scss';
import './InfoWindow.css';

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
    img,
    address,
    link,
    img_source,
  } = marker;
  const locale = useAppSelector(selectLocale);
  const { t } = useTranslation();
  
  const setMarker = () => {
    setActiveMarker(marker);
    setCoords(lat + MAP.MARKER_OFFSET, lng, 12);
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
          <div className={styles.infoWindow}>
            {img ? (
              <div className={styles.infoWindow__photoWrapper}>
                <img
                  className={styles.infoWindow__img}
                  src={img}
                  alt={title[locale]}
                />
              </div>
            ) : null}
            <div className={styles.infoWindow__content}>
              <h2 className={styles.infoWindow__title}>{title[locale]}</h2>
              {address ? <span className={styles.infoWindow__address}>{address[locale]}</span> : null}
              <p className={styles.infoWindow__description}>{description[locale]}</p>
              <div className={styles.infoWindow__links}>
                {link ? <NavLink className={styles.infoWindow__link} to={link}>{t('readMore')}</NavLink> : null}
                {img_source
                  ? (
                    <NavLink
                      target='_blank'
                      className={styles.infoWindow__link}
                      to={img_source}
                    >
                      {t('imgSource')}
                    </NavLink>
                  ) : null}
              </div>
            </div>
          </div>
        </InfoWindow>
      ) : null}
    </>
  );
};

export default MemorialMarker;
