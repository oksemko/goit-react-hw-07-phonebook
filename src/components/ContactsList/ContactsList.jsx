import { useFetchContactsQuery } from '../redux/api-service';

import { useSelector } from 'react-redux';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { Loader } from 'components/Loader/Loader';
import { ColorRing } from 'react-loader-spinner';

import { List } from './ContactsList.styled';


export const ContactsList = () => {
  const { data: contacts, isFetching, isError } = useFetchContactsQuery();


  const filterValue = useSelector(state => state.filter);

    return (
      <>
        {isFetching && (
          <>
            <ColorRing
              height={200}
              width={200}
              ariaLabel="blocks-loading"
            />
            <Loader />
          </>
        )}
        {!isFetching && !isError && contacts && (
          <List>
            {contacts
              .filter(({ name }) =>
                name.toLowerCase().includes(filterValue.toLowerCase()),
              )
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(item => {
                const { id, name, number } = item;
                return <ContactsItem contact={{ id, name, number }} key={id} />;
              })}
          </List>
        )}
        {isError && <h1>Data are not found</h1>}
      </>
    );
  };
