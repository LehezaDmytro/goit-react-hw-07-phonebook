import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { addFilter } from 'redux/filterSlice';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import {
  getContacts,
  getFilter,
  getError,
  getIsLoading,
} from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onHandleSubmit = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  const onFilterChange = e => {
    dispatch(addFilter(e.target.value));
  };

  const filteredContacts = () => {
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onHandleSubmit={onHandleSubmit} />
      <h2>Contacts</h2>
      <Filter onFilterChange={onFilterChange} filter={filter} /> <br />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList
        filteredContacts={filteredContacts()}
        deleteItem={deleteItem}
      />
    </div>
  );
};
