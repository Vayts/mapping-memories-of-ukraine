import React, { useState } from 'react';
import Map from '@src/pages/MapPage/Map/Map';
import MapControls from '@src/pages/MapPage/MapControls/MapControls';
import { IMemorialMarker } from '@src/store/map/types';
import { MAP } from '@constants/map';
import styles from './MapPage.module.scss';

const MapPage: React.FC = () => {
  const [map, setMap] = React.useState<any>(null);
  const [zoom, setZoom] = useState<number>(MAP.CITY_ZOOM);
  const [bounds, setBounds] = useState<any | null>(null);
  const [activeMarker, setActiveMarker] = useState<IMemorialMarker | null>(null);
  const mapRef = React.useRef<any>(null);
  
  const setCoords = (lat: number, lng: number, zoom = 10) => {
    mapRef.current.panTo({ lat, lng });
    setZoom(zoom);
  };
  
  return (
    <div className={styles.wrapper}>
      <MapControls
        setCoords={setCoords}
        setActiveMarker={setActiveMarker}
        zoom={zoom}
        bounds={bounds}
      />
      <Map
        map={map}
        mapRef={mapRef}
        setBounds={setBounds}
        setMap={setMap}
        zoom={zoom}
        setZoom={setZoom}
        setCoords={setCoords}
        activeMarker={activeMarker}
        setActiveMarker={setActiveMarker}
      />
    </div>
  );
};

export default MapPage;
