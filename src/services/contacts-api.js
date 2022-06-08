import axios from 'axios';

axios.defaults.baseURL = 'https://6297c6818d77ad6f7508d276.mockapi.io'

export async function fetchContacts() {
    const { data } = await axios.get(`/contacts`);
    return data;
}

export async function postContacts(contact) {
    const { data } = await axios.post(`/contacts`, contact);
    return data;

}

export async function deleteContact(id) {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data
}

// export function deleteContact(id) {
//     axios.delete(`/contacts/${id}`, id)
//     // .then(({ data }) => data)




// }
// axios
//     .delete(`/tasks/${todoId}`)
//     .then(() => dispatch(deleteTodoSuccess(todoId)))
//     .catch(error => dispatch(deleteTodoError(error.message)));
// };