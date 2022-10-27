import axios from 'axios';
import * as actions from './submit-actions';
const { submitContactRequest, submitContactSuccess, submitContactError } =
  actions;

axios.defaults.baseURL = 'http://localhost:3000/api/contacts';
// axios.defaults.baseURL = 'https://iv-engineering.herokuapp.com/api/contacts';

const addContact = contact => dispatch => {
  const newContact = { ...contact, from: 'iv-engineering' };
  console.log('NEW_CONTACT I OPERATION:::', newContact);
  dispatch(submitContactRequest());

  axios
    .post('', newContact)
    .then(({ data }) => dispatch(submitContactSuccess(data)))
    .catch(error => submitContactError(error));
};
export default addContact;

// example for middleware form------------------------------------------------------------------------
// const gaMd=store=>next=>action=>{
//     if( action?.meta?.ga){
// // шлем аналитику в гугл
//     }
//     next (action);
// }
//--------------------------------------------------------------------------------------
