import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contactsAction';
import { fetchItems, postItems, deleteItems } from '../redux/contactsOperation';
// import initialState from '../../todos.json';

// const initialState = createReducer([], {

//     [fetchItems.fulfilled]: (_, action) => action.payload,

// });
const items = createReducer([], {

    [fetchItems.fulfilled]: (_, action) => action.payload,
    [postItems.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteItems.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload)

    ,
}
    //     initialState, {

    //     [actions.addContact]: (state, { payload }) => [...state, payload],
    //     [actions.deleteContact]: (state, { payload }) =>
    //         state.filter(({ id }) => id !== payload),

    // }
)

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
})
