export interface IMapState {
  zoom: number,
  coords: {
    lat: number,
    lng: number,
  }
  markers: {
    memorials: IMemorialMarker[],
    cities: ICityMarker[],
  }
  activeTypes: string[],
  types: IMarkerType[],
  isLoading: boolean,
}

export interface IMemorialMarker {
  _id: number | string,
  lat: number,
  lng: number,
  type_id: string,
  city_id: string,
  address: {
    en: string,
    uk: string,
  },
  description: {
    en: string,
    uk: string,
  },
  title: {
    en: string,
    uk: string,
  },
  link: string,
  icon: string,
}

export interface ICityMarker {
  _id: number | string,
  lat: number,
  lng: number,
  icon: string,
  city_id: string,
  count: number,
  name: {
    uk: string,
    en: string,
  }
}

export interface IMarkerType {
  _id: string,
  count: number,
  name: {
    uk: string,
    en: string,
  }
}
