export const selectFilteredContacts = ({ contacts, filter }) => {
  if (filter.length === 0) {
    return contacts.items;
  }

  const normalisedFilter = filter.toLowerCase();
  const filteredContacts = contacts.items
    .filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      const result = normalizedName.includes(normalisedFilter);
      return result;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  return filteredContacts;
};

// export const getContacts = state => state.contacts.items;

// export const getFilter = state => state.contacts.filter;

// export const selectFilteredContacts = state => {
//   const filter = getFilter(state).toLowerCase();
//   const contacts = getContacts(state);
//   return contacts
//     .filter(contact => {
//       return contact.name.toLowerCase().includes(filter);
//     })
//     .sort((a, b) => a.name.localeCompare(b.name));
// };
