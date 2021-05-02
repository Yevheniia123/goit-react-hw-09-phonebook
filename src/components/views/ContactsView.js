import React, { useEffect } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactsList/ContactList';
import { useDispatch } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operation';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <SectionTitle title="Phonebook">
        <ContactForm />
      </SectionTitle>

      <SectionTitle title="Contacts">
        <Filter />
        <ContactList />
      </SectionTitle>
    </>
  );
}
