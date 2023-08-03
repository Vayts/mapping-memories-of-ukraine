import { IMapState } from '@src/store/map/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IMapState = {
  zoom: 0,
  coords: {
    lat: 48.4,
    lng: 32.65,
  },
  types: [
    {
      id: 4,
      type_id: 'ussr',
      counter: 2,
      title: {
        en: 'Monuments of the Soviet era',
        uk: 'Пам`ятники радянської доби',
      },
    },
    {
      id: 2,
      type_id: 'ukraine',
      counter: 3,
      title: {
        en: 'Monuments of the Soviet era',
        uk: 'Пам`ятники доби незалежності',
      },
    },
  ],
  markers: {
    cities: [
      {
        id: 1,
        lat: 49.988,
        lng: 36.2332,
        icon: '../assets/img/city.svg',
        city_id: 'kharkiv',
        name: {
          uk: 'Харків',
          en: 'Kharkiv',
        },
      },
      {
        id: 2,
        lat: 50.458852456708854,
        lng: 30.52423941267742,
        icon: '../assets/img/city.svg',
        city_id: 'kiyv',
        name: {
          uk: 'Київ',
          en: 'Kiyv',
        },
      },
    ],
    memorials: [
      {
        id: 1,
        lat: 50.03488067669122,
        lng: 36.221132343647625,
        type: 'ussr',
        title: {
          en: 'Monument to the Liberator Soldier',
          uk: 'Пам\'ятник Воїнам-визволителям',
        },
        address: {
          uk: 'м. Харків, на розі проспекту Науки та вулиці 23-го Серпня',
          en: '23-ho Serpnya St, Kharkiv, Kharkiv Oblast, 61000',
        },
        icon: '../assets/img/memorialOrange.svg',
        link: 'void',
        city_id: 'kharkiv',
        description: {
          en: 'The monument dedicated to the soldiers-liberators of Kharkiv is located at the intersection of 23 August Street and Nauky Avenue near the exit from the metro station of the same name. It was opened in 1981.',
          uk: 'Пам’ятник, присвячений воїнам-визволителям Харкова, розташований на перехресті вулиць 23 серпня та проспекту Науки біля виходу зі станції метро з такою самою назвою. Був відкритий у 1981 р.',
        },
      },
      {
        id: 2,
        lat: 50.07962889743718,
        lng: 36.306534018699246,
        type: 'ukraine',
        title: {
          en: 'German War Cemetery',
          uk: 'Німецький військовий цвинтар',
        },
        address: {
          uk: 'Кладовище 17, Харків, Харківська область, Україна',
          en: 'Cemetery 17, Kharkiv, Kharkiv region, Ukraine',
        },
        icon: '../assets/img/cemeteryOrange.svg',
        link: 'void',
        city_id: 'kharkiv',
        description: {
          en: 'It is located on the territory of the city cemetery No. 17 in Kharkiv. This is the cemetery of German soldiers killed during the Second World War.  It was built in the period from 1996 to 1998 by the German People\'s Association for the Care of War Graves on behalf of the Federal Republic of Germany.',
          uk: 'Знаходиться на території міського кладовища № 17 в м. Харкові. Це кладовище загиблих німецьких солдат під час Другої світової війни.  Споруджене  в період з 1996 по 1998 роки Німецькою Народною Спілкою догляду за військовими похованнями за дорученням Федеративної республіки Німеччини.',
        },
      },
      {
        id: 3,
        lat: 50.445973375699,
        lng: 30.539972465102988,
        type: 'ukraine',
        title: {
          en: 'German War Cemetery',
          uk: 'Німецький військовий цвинтар',
        },
        address: {
          uk: 'Антоновский міст, Київ, Київська область, Україна',
          en: 'Antonivka Road Bridge, Kiyv, Kiyv region, Ukraine',
        },
        icon: '../assets/img/cemeteryBlue.svg',
        link: 'void',
        city_id: 'kiyv',
        description: {
          en: 'It is located on the territory of the city cemetery No. 17 in Kharkiv. This is the cemetery of German soldiers killed during the Second World War.  It was built in the period from 1996 to 1998 by the German People\'s Association for the Care of War Graves on behalf of the Federal Republic of Germany.',
          uk: 'Знаходиться на території міського кладовища № 17 в м. Харкові. Це кладовище загиблих німецьких солдат під час Другої світової війни.  Споруджене  в період з 1996 по 1998 роки Німецькою Народною Спілкою догляду за військовими похованнями за дорученням Федеративної республіки Німеччини.',
        },
      },
    ],
  },
  isLoading: false,
};
export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    mapRequestStart: (state) => {
      state.isLoading = true;
    },
    mapRequestEnd: (state) => {
      state.isLoading = false;
    },
  },
});

export const { mapRequestStart, mapRequestEnd } = mapSlice.actions;
