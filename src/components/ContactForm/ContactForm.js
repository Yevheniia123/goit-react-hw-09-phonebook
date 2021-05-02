import React, { useState } from 'react';
import s from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import phonebookSelector from '../../redux/phonebook/phonebook-selectors';
import phonebookOperation from '../../redux/phonebook/phonebook-operation';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(state =>
    phonebookSelector.getVisibleContact(state),
  );

  const changeName = e => {
    setName(e.target.value);
  };

  const changeNumber = e => {
    setNumber(e.target.value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const sameName = contacts.filter(contact => contact.name.includes(name));

    if (sameName.length) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(contact =>
      dispatch(phonebookOperation.addContact({ name, number })),
    );

    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.formLabel}>
        Name
        <input
          type="text"
          name="name"
          className={s.formInput}
          value={name}
          onChange={changeName}
        />
      </label>
      <label className={s.formLabel}>
        Number
        <input
          type="number"
          name="number"
          className={s.formInput}
          value={number}
          onChange={changeNumber}
        />
      </label>
      <button className={s.add} type="submit">
        Add contact
      </button>
    </form>
  );
}
