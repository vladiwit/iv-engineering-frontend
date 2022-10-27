import { createReducer } from '@reduxjs/toolkit';
import {
  submitContactRequest,
  submitContactSuccess,
  submitContactError,
} from './submit-actions';

const submitReducer = createReducer('', {
  [submitContactRequest]: () => 'Loading',
  [submitContactSuccess]: (state, { payload }) => payload,
  [submitContactError]: (state, { payload }) => payload,
});

export default submitReducer;
