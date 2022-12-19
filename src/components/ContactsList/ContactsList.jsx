import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/contacts/contacts-operations';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { Loader } from 'components/Loader/Loader';
// import { ColorRing } from 'react-loader-spinner';
import { selectFilteredContacts } from 'redux/contacts/contacts-selectors';
// import actions from 'redux/contacts/actions';

import { List } from './ContactsList.styled';

import { deleteContact } from 'redux/contacts/contacts-operations';



export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()
    )
  }, [dispatch]
  );


const onDeleteContact = (id) => {
    const action = deleteContact(id)
    dispatch(action);
  }


  return (
    <>
      {!fetchContacts && (
        <Loader />
      )}

      <List>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactsItem
              contact={{ id, name, number }}
              key={id}
              onDelete={id => onDeleteContact(id)}
            />
          );
        })}
      </List>

  </>
  );
// }
}



