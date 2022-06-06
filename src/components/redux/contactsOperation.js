import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../services/contacts-api';

export const fetchItems = createAsyncThunk(
    'items/fetchItems',
    async (_, { rejectWithValue }) => {
        try {
            const items = await contactsAPI.fetchContacts();
            console.log(items);
            return items;

        } catch (error) {
            return rejectWithValue(error)
        }
    },
);
export const postItems = createAsyncThunk(
    'items/postItems',
    async (contact, { rejectWithValue }) => {
        try {
            const item = await contactsAPI.postContacts(contact);
            console.log(item);
            return item;

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const deleteItems = createAsyncThunk(
    'items/deleteItems',
    async (id, { rejectedWithValue }) => {
        try {
            const item = await contactsAPI.deleteContact(id);
            console.log(item);
            return item;
        } catch (error) {
            return rejectedWithValue(error)
        }

    }
)



// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as bookShelfAPI from 'services/bookshelf-api';

// export const fetchBooks = createAsyncThunk(
//     'books/fetchBooks',
//     async (_, { rejectWithValue }) => {
//         try {
//             const books = await bookShelfAPI.fetchBooks();
//             return books;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     },
// );