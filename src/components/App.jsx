import { useSelector, useDispatch } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { addFilter } from 'redux/filterSlice';

import { getContacts, getFilter } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const onHandleSubmit = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const findContact = contactsList.find(contact => contact.name === name);
    if (findContact) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
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
      <Filter onFilterChange={onFilterChange} filter={filter} />
      <ContactList
        filteredContacts={filteredContacts()}
        deleteItem={deleteItem}
      />
    </div>
  );
};
