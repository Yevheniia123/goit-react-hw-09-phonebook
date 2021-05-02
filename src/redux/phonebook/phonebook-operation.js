import axios from 'axios';
import actions from './phonebook-action';

// axios.defaults.baseURL = 'http://localhost:4040';
// const token = {
//   set(token) {
//     axios.defaults.headers.common.Autorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Autorization = '';
//   },
// };

// GET @ /tasks
// const fetchTodos = () => async dispatch => {
//   dispatch(fetchTodosRequest());

//   try {
//     const { data } = await axios.get('/tasks');

//     dispatch(fetchTodosSuccess(data));
//   } catch (error) {
//     dispatch(fetchTodosError(error.message));
//   }
// };

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactRequest);

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch(error => dispatch(actions.fetchContactError(error.message)));
};

const addContact = ({ name, number }) => dispatch => {
  const contact = { name, number };
  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error.message)));
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => actions.deleteContactError(error.message));
};

export default { addContact, deleteContact, fetchContacts };
