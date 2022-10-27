import axios from 'axios';
import * as actions from './submit-actions';
const { submitContactRequest, submitContactSuccess, submitContactError } =
  actions;

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/contacts'
    : 'https://iv-engineering.herokuapp.com/api/contacts';

const addContact = contact => async dispatch => {
  const newContact = { ...contact, from: 'iv-engineering' };
  dispatch(submitContactRequest());
  try {
    const { data } = await axios.post('', newContact);

    dispatch(submitContactSuccess(data.status));
  } catch (error) {
    dispatch(submitContactError(error.message));
  }
};
export default addContact;
