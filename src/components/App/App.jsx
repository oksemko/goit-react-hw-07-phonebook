import { useFetchContactsQuery } from '../redux/api-service';

import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';

import { Container, Title } from './App.styled';


function App() {
  const fetchContacts = useFetchContactsQuery()

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactsForm contacts={fetchContacts} />
        <Title>Contacts</Title>
        <Filter
        title="Find contact by name" />
        <ContactsList contacts={fetchContacts} />
      </Container>
    );
}

export { App };
