import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6359272cc27556d2894d1dce.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//thunkAPI - об'єкт, який передається в асинхронний генератор екшену в redux-thunk.
//Містить властивості та методи доступу до стору, відправки екшенів,
//а також деякі додаткові.

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { contact });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import type { Contacts } from './types';

// Define a service using a base URL and expected endpoints
// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://6359272cc27556d2894d1dce.mockapi.io/api',
//   }),
//   tagTypes: ['contacts'],
//   endpoints: builder => ({
//     fetchContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ['contacts'],
//     }),
//     createContact: builder.mutation({
//       query: ({ name, number }) => ({
//         url: `/contacts`,
//         method: 'POST',
//         body: { name, number },
//       }),
//       invalidatesTags: ['contacts'],
//     }),
//     deleteContact: builder.mutation({
//       query: contactId => ({
//         url: `/contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['contacts'],
//     }),
//   }),
// });

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const {
//   useFetchContactsQuery,
//   useCreateContactMutation,
//   useDeleteContactMutation,
// } = contactsApi;
