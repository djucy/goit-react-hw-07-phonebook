
// import { configureStore } from '@reduxjs/toolkit';
// import booksReducer from './books/booksReducer';

// export const store = configureStore({
//   reducer: {
//     books: booksReducer,
//   },
// });




import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from 'components/redux/contactsReducer';




export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },

});



