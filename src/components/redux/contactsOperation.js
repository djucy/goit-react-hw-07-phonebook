import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
// import { deleteContactRequest, deleteContactSuccess, deleteContactError } from '../redux/contactsAction';
import * as contactsAPI from '../../services/contacts-api';


// const dispatch = useDispatch();

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
    async (id, { rejectWithValue }) => {
        try {
            const item = await contactsAPI.deleteContact(id);
            console.log(item);
            return item;


        } catch (error) {
            return rejectWithValue(error)
        }

    }
)
// export const deleteItems = id => dispatch => {
//     dispatch(deleteContactRequest());
//     fetch(contactsAPI.deleteContact(id))
//         .then(({ data }) => dispatch(deleteContactSuccess(data)))
//         .catch(error => dispatch(deleteContactError(error.message)));


// }

