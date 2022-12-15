import { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/contacts-operations';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectFilteredContacts } from 'redux/contacts/contacts-selectors';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form, Container, Label, Input, Button } from './ContactsForm.styled';


function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const getContacts = useSelector(selectFilteredContacts);



  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return new Error('Something went wrong in ContactForm');
    }
  };


  const handleSubmit = event => {
    event.preventDefault();
    // const form = event.target;
    const contactExists = getContacts.find(contact => contact.name === name);
     if (contactExists) {
      toast.warn('🔔 Contact exists!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    } else {
      dispatch(
        addContact({
          name,
          number,
        }),
      );
      setName('');
      setNumber('');
    }
  };


    return (
      <Form action="submit" onSubmit={handleSubmit}>
        <Container>
          <Label>
            Name
            <Input
              placeholder='Please enter name'
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Number
            <Input
              placeholder='Please enter phone number'
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleInputChange}
            />
          </Label>
          <ToastContainer />
          <Button type="submit">
            Add contact
          </Button>
        </Container>
      </Form>
    );
}

export { ContactsForm };
