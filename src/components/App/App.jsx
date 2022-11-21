import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';

import { Container, Title } from './App.styled';


function App() {

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactsForm  />
        <Title>Contacts</Title>
        <Filter
        title="Find contact by name" />
        <ContactsList  />
      </Container>
    );
}

export { App };
