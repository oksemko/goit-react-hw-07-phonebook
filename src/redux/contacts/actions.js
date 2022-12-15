import { createAction } from '@reduxjs/toolkit';

const fetchContacts = createAction('contacts/fetchAll');
const addContact = createAction('contacts/addContact');
const deleteContact = createAction('contacts/deleteContact');

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchContacts, addContact, deleteContact };
