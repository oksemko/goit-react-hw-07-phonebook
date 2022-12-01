import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import type { Contacts } from './types';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6359272cc27556d2894d1dce.mockapi.io/api',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['contacts'],
    }),
    createContact: builder.mutation({
      query: ({ name, number }) => ({
        url: `/contacts`,
        method: 'POST',
        body: { name, number },
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useFetchContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
