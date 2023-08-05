import React, { memo, useCallback } from 'react';
import Checkbox from '@src/components/UI/Checkbox/Checkbox';
import { ITypeControlItem } from '@src/pages/MapPage/MapControls/TypeControlItem/types';
import { useAppDispatch, useAppSelector } from '@src/hooks/hooks';
import { selectLocale } from '@src/store/app/selectors';
import { selectActiveTypes } from '@src/store/map/selectors';
import { setActiveTypes } from '@src/store/map/reducer';
import styles from './TypeControlItem.module.scss';

const TypeControlItem: React.FC<ITypeControlItem> = ({ typeMarker }) => {
  const locale = useAppSelector(selectLocale);
  const types = useAppSelector(selectActiveTypes);
  const dispatch = useAppDispatch();
  
  const clickHandler = useCallback(() => {
    let newState;
    
    if (types.includes(typeMarker._id)) {
      newState = types.filter((item) => item !== typeMarker._id);
    } else {
      newState = [...types, typeMarker._id];
    }
    
    dispatch(setActiveTypes(newState));
  }, [types]);
  
  return (
    <li className={styles.type}>
      <Checkbox
        onChange={clickHandler}
        checked={types.includes(typeMarker._id)}
        value={typeMarker._id}
        label={`${typeMarker.name[locale]} (${typeMarker.count})`}
        id={`typeMarker${typeMarker._id}`}
      />
    </li>
  );
};

export default memo(TypeControlItem);
