import React, { useCallback } from 'react';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import phonebookOperation from '../../redux/phonebook/phonebook-operation';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';

export default function ContactList() {
  const filterName = useSelector(phonebookSelectors.getVisibleContact);

  const dispatch = useDispatch();

  const deleteId = useCallback(
    id => dispatch(phonebookOperation.deleteContact(id)),
    [dispatch],
  );

  return (
    <ul>
      {filterName.map(item => (
        <li key={item.id}>
          <span>
            {item.name} : {item.number}
          </span>

          <button
            type="button"
            className={s.deleteitem}
            onClick={() => deleteId(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
