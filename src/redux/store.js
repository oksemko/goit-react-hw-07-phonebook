import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsApi } from 'redux/api-service';
import { filter } from './Filter/reducer';
// import { filterSlice } from './Filter/filterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer, // (Add the generated reducer as a specific top-level slice)
    filter: filter,
  },
  middleware: getDefaultMiddleware => [
    //(api middleware enables caching, invalidation, polling ...)
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  // devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
