import { createSlice } from '@reduxjs/toolkit';
import { changeFilter } from './actions';

// const initialState = { filter: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    [changeFilter]: (state, action) => action.payload,
  },
});

export const { filterContacts } = filterSlice.actions;
export default filterSlice.reducer;
