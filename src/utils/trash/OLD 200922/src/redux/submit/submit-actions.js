import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Alert from '../../tools/Submit/Alert';

const BASE_URL = 'http://localhost:3000/api/contacts';
// const BASE_URL = 'https://iv-engineering.herokuapp.com/api/contacts';
// const BASE_URL = 'https://iv-engineering-backend.netlify.app/api/contacts';

// axios.defaults.baseURL = 'https://iv-engineering.herokuapp.com/api/contacts';

//

// export const addSubmitAction = createAction('submit/AddSubmitForm');

export const addSubmitAction = value => dispatch => {
  const options = {
    method: 'POST',
    body: JSON.stringify(value),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  // =============================================

  fetch(BASE_URL, options)
    .then(response => response.json())
    .then(post => {
      return post.data.newItem;
    })
    .catch(error => error);

  // ==========================================

  // return axios
  //   .post('/', value)
  //   .then(({ data }) => {
  //     console.log(
  //       '🚀 ~ file: submit-actions.js ~ line 16 ~ .then ~ data::::',
  //       data,
  //     );

  // if (data.status === 'fail') {
  //   <Alert arg={data.message} />;
  // }
  // return dispatch(createAction('submit/AddSubmitForm')(data.status));
  // })
  // .catch((error, data) => {});
};
