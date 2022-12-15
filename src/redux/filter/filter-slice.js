import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'contacts',
  initialState: '',
  reducers: {
    filterContacts: (state, action) => {
      return (state = action.payload);
    },
    clearFilter: state => {
      return (state = '');
    },
  },
});

export const { filterContacts, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
