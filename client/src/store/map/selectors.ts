import { RootState } from '@src/store';
import { ICityMarker, IMapState, IMemorialMarker } from '@src/store/map/types';

export const selectMemorialMarkers = (state: RootState): IMemorialMarker[] => state.map.markers.memorials;

export const selectCityMarkers = (state: RootState): ICityMarker[] => state.map.markers.cities;

