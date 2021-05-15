import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactsList/ContactList';
import { useDispatch } from 'react-redux';
import phonebookOperations from '../redux/phonebook/phonebook-operation';

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
