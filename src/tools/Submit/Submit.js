import React, { useState, useCallback } from 'react';
import Modals from './Modal';
import SubmitButton from './SubmitButton';
import FormSubmit from './FormSubmit';
import s from './Submit.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import addSubmit from '../../redux/submit/submit-operations';
const { Modal } = Modals;

export default function Submit() {
  const dispatch = useDispatch();
  const addContact = value => dispatch(addSubmit(value));
  const [showModal, setShowModal] = useState(false);
  const submitHandler = data => {
    addContact(data);
    toggleModal();
  };
  const toggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);
  return (
    <>
      <section className={s.submit}>
        <SubmitButton onToggle={toggleModal} />
        {showModal && (
          <Modal onToggle={toggleModal}>
            <FormSubmit onSubmit={submitHandler} />
          </Modal>
        )}
      </section>
    </>
  );
}
