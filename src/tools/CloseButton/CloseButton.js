import s from './CloseButton.module.scss';
import React, { useCallback } from 'react';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { getSavedPrevPath } from 'redux/content/content-selectors';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { savedPrevPath, detailsAction } from 'redux/content/content-actions';
import { submitContactError } from 'redux/submit/submit-actions';
import removeContentStorage from 'tools/removeLocalStorageContent';

export default function CloseButton(children) {
  const dispatch = useDispatch();
  const closeShowDetails = useCallback(
    value => dispatch(detailsAction(value)),
    [dispatch],
  );
  const savePath = useCallback(
    value => dispatch(savedPrevPath(value)),
    [dispatch],
  );
  const savedPath = useSelector(getSavedPrevPath);
  const combineActionsCloseButon = value => {
    closeShowDetails(value);
    savePath(value);
    removeContentStorage();
    dispatch(submitContactError(value));
  };
  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        classNames={s}
        timeout={2000}
        unmountOnExit
      >
        <NavLink to={savedPath}>
          <button
            onClick={() => combineActionsCloseButon('')}
            className={s.buttonClose}
          >
            <IoClose className={s.iconClose} />
          </button>
        </NavLink>
      </CSSTransition>
    </>
  );
}
