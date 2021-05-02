import React, { useCallback } from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import phonebookAction from '../../redux/phonebook/phonebook-action';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';

export default function Filter() {
  const value = useSelector(phonebookSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = useCallback(
    e => dispatch(phonebookAction.filterContact(e.target.value)),
    [dispatch],
  );

  return (
    <label className={s.filter}>
      Find contacts by name
      <input
        type="text"
        className={s.inputFilter}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
