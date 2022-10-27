import React, { useState, useEffect, memo, useCallback } from 'react';
import s from './Modal.module.scss';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onToggle, children }) => {
  // const [state, setState] = useState({});

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onToggle();
    }
  };
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onToggle();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [onToggle]);

  return createPortal(
    <div className={s.modalBackdrop} onClick={handleBackdropClick}>
      <div className={s.modalContent}>{children}</div>
    </div>,
    modalRoot,
  );
};

export default Modal;
