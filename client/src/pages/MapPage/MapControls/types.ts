import { Dispatch, SetStateAction } from 'react';
import { IMemorialMarker } from '@src/store/map/types';
import LatLngBounds = google.maps.LatLngBounds;

export interface IMapControlsProps {
  setCoords: (lat: number, lng: number) => void;
  setActiveMarker: Dispatch<SetStateAction<IMemorialMarker | null>>;
  activeTypes: string[];
  setActiveTypes: Dispatch<SetStateAction<string[]>>;
  zoom: number;
  bounds: LatLngBounds | null;
}
