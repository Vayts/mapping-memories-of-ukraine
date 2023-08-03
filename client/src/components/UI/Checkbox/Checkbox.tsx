import React, { memo } from 'react';
import { ICheckbox } from '@src/components/UI/Checkbox/types';
import cx from 'classnames';
import styles from './Checkbox.module.scss';

const Checkbox: React.FC<ICheckbox> = (props) => {
  const {
    label,
    value,
    onChange,
    id,
    checked,
  } = props;
  return (
    <label
      htmlFor={id}
      className={styles.checkbox}
    >
      <div className={cx(styles.checkbox__custom, checked ? styles.active : '')}>
        <span className='icon-done'/>
      </div>
      {label}
      <input
        className={styles.checkbox__input}
        type='checkbox'
        value={value}
        id={id}
        onChange={onChange}
      />
    </label>
  );
};

export default memo(Checkbox);
