import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from 'components/redux/contacts-reducer';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const todosPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(todosPersistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);
const storeVariables = { store, persistor }
export default storeVariables;