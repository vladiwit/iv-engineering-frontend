import React, { useState, useEffect, useCallback } from 'react';
import Modal from './Modal';
import SubmitButton from './SubmitButton';
import FormSubmit from './FormSubmit';
import s from './Submit.module.scss';
import { useSelect, useDispatch } from 'react-redux';
import * as actions from '../../redux/submit/submit-actions';
// import * as operations from '../redux/submit/submit-operations';

export default function Submit() {
  const dispatch = useDispatch();
  const addSubmit = value => dispatch(actions.addSubmitAction(value));
  const [showModal, setShowModal] = useState(false);

  const submitHandler = data => {
    const newData = { ...data, from: 'iv-engineering' };
    console.log('NEWDATA IN SUBMIT FOM POST:::', newData);
    addSubmit(newData);
    toggleModal();
    // что я хочу получить в ответе -
  };
  const toggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);
  return (
    <section className={s.submit}>
      <SubmitButton onToggle={toggleModal} />
      {showModal && (
        <Modal onToggle={toggleModal}>
          <FormSubmit onSubmit={submitHandler} />
        </Modal>
      )}
    </section>
  );
}
