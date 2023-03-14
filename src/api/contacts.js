import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://640fa15ce1212d9cc91e96aa.mockapi.io/contacts',
});

export const getAllContacts = () => contactsInstance.get('/');

export const deleteContact = id => contactsInstance.delete(`/${id}`);

export const addContact = data => contactsInstance.post('/', data);
