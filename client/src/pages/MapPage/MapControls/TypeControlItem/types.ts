import { IMarkerType } from '@src/store/map/types';
import { Dispatch, SetStateAction } from 'react';

export interface ITypeControlItem {
  typeMarker: IMarkerType,
  checked: boolean,
  setActiveTypes: Dispatch<SetStateAction<string[]>>,
}
