import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { GoogleMap, MarkerClusterer, useJsApiLoader } from '@react-google-maps/api';
import { useAppSelector } from '@src/hooks/hooks';
import { selectCityMarkers, selectMemorialMarkers } from '@src/store/map/selectors';
import MemorialMarker from '@src/pages/MapPage/MemorialMarker/MemorialMarker';
import CityMarker from '@src/pages/MapPage/CityMarker/CityMarker';
import { IMapProps } from '@src/pages/MapPage/Map/types';
import { MAP } from '@constants/map';
import { defaultTheme } from './MapTheme';

const containerStyle = {
  width: '100vw',
  height: 'calc(100vh - 60px)',
};

const center = {
  lat: 48.4,
  lng: 32.65,
};

const defaultOptions = {
  styles: defaultTheme,
  mapTypeControl: true,
  fullscreenControl: false,
  mapTypeControlOptions: {
    position: 7.0,
  },
  // maxZoom: 17,
  minZoom: 3,
};

const Map: React.FC<IMapProps> = (props) => {
  const {
    setMap,
    map,
    mapRef,
    setZoom,
    zoom,
    setCoords,
    activeMarker,
    setActiveMarker,
    setBounds,
  } = props;
  const memorialMarkers = useAppSelector(selectMemorialMarkers);
  const cityMarkers = useAppSelector(selectCityMarkers);
  const { isLoaded } = useJsApiLoader({
    id: '845a623558bc42e2',
    googleMapsApiKey: 'AIzaSyDfQcE5YPPU7_TZS12y2FjDrbXyfEq5kvA',
  });
  
  useEffect(() => {
    if (map) {
      setTimeout(() => {
        setZoom(MAP.CITY_ZOOM);
      }, 200);
    }
  }, [map]);
  
  const handleZoomChanged = () => {
    if (mapRef?.current) {
      setZoom(mapRef.current.getZoom());
      const bounds = mapRef.current.getBounds();
      setBounds(bounds);
    }
  };
  
  const handlerDrag = () => {
    const bounds = mapRef.current.getBounds();
    setBounds(bounds);
  };
  
  useEffect(() => {
    handleZoomChanged();
  }, [activeMarker]);
  
  const onLoad = React.useCallback((map: any) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    mapRef.current = map;
    mapRef.current.addListener('zoom_changed', handleZoomChanged);
    setMap(map);
  }, []);
  
  const onUnmount = React.useCallback((map: any) => {
    setMap(null);
  }, []);
  
  const generateMarkers = useCallback((zoom: number): ReactNode => {
    if (zoom <= MAP.CITY_ZOOM) {
      return cityMarkers.map((item) => {
        return (
          <CityMarker
            marker={item}
            setCoords={setCoords}
          />
        );
      });
    }
    return memorialMarkers.map((item) => {
      return (
        <MemorialMarker
          marker={item}
          activeMarker={activeMarker}
          setActiveMarker={setActiveMarker}
          setCoords={setCoords}
        />
      );
    });
  }, [zoom, activeMarker]);
  
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onBoundsChanged={handlerDrag}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaultOptions}
      onDrag={handlerDrag}
    >
      {generateMarkers(zoom)}
    </GoogleMap>
  ) : <></>;
};

export default Map;
