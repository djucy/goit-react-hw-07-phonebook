import { createSelector } from '@reduxjs/toolkit';
export const getContact = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getFilteredContacts = createSelector(
    [getContact, getFilter],
    (items, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
    }
)


// const contacts = completeContactList.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
// const getVisibleTodos = createSelector(
//     [getAllTodos, getFilter],
//     (todos, filter) => {
//         const normalizedFilter = filter.toLowerCase();
//         return todos.filter(({ description }) =>
//             description.toLowerCase().includes(normalizedFilter),
//         );
//     },
// );