import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'components/redux/api-service';

import { Button, ContactsElement, Span } from '../ContactsItem/ContactsItem.styled';


export const ContactsItem = ({ contact}) => {
  const { id, name, number } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <ContactsElement>
      <Span>{name}:</Span>
      <Span>{number}</Span>
      <Button type="button"
        id={id}
        onClick={event => deleteContact(id)}
        disabled={isLoading}
      >
        {isLoading ? 'Deleting' : 'Delete'}
        {/* Delete */}
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
