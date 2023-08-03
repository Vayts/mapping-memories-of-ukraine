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
  types: IMarkerType[],
  isLoading: boolean,
}

export interface IMemorialMarker {
  id: number | string,
  lat: number,
  lng: number,
  type: string,
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
  id: number | string,
  lat: number,
  lng: number,
  icon: string,
  city_id: string,
  name: {
    uk: string,
    en: string,
  }
}

export interface IMarkerType {
  id: string | number,
  type_id: string,
  counter: number,
  title: {
    uk: string,
    en: string,
  }
}
