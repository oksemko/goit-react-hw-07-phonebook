import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contacts-operations';

import { Button, ContactsElement, Span } from '../ContactsItem/ContactsItem.styled';



export const ContactsItem = ({ contact}) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    const action = deleteContact(id)
    dispatch(action);
  }

  return (
    <ContactsElement>
      <Span>{name}:</Span>
      <Span>{number}</Span>
      <Button type="button"
        key={id}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </Button>
    </ContactsElement>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // number: PropTypes.string.isRequired,
  }),
}
