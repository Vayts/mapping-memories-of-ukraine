import React, { memo, useCallback } from 'react';
import Checkbox from '@src/components/UI/Checkbox/Checkbox';
import { ITypeControlItem } from '@src/pages/MapPage/MapControls/TypeControlItem/types';
import { useAppSelector } from '@src/hooks/hooks';
import { selectLocale } from '@src/store/app/selectors';
import styles from './TypeControlItem.module.scss';

const TypeControlItem: React.FC<ITypeControlItem> = ({ typeMarker, setActiveTypes, checked }) => {
  const locale = useAppSelector(selectLocale);
  
  const clickHandler = useCallback(() => {
    setActiveTypes((prev: string[]) => {
      if (prev.includes(typeMarker.type_id)) {
        return prev.filter((item) => item !== typeMarker.type_id);
      }
      return [...prev, typeMarker.type_id];
    });
  }, []);
  
  return (
    <li className={styles.type}>
      <Checkbox
        onChange={clickHandler}
        checked={checked}
        value={typeMarker.type_id}
        label={typeMarker.title[locale]}
        id={`typeMarker${typeMarker.type_id}`}
      />
    </li>
  );
};

export default memo(TypeControlItem);
