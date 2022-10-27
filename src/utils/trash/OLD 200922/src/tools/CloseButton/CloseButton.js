import s from './CloseButton.module.scss';
import React, { useCallback } from 'react';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import {
  /*  getDetails, */ getSavedPrevPath,
} from 'redux/content/content-selectors';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import {
  savedPrevPath,
  detailsAction,
  // setCurrentPath,
} from 'redux/content/content-actions';
import removeContentStorage from 'tools/removeLocalStorageContent';

export default function CloseButton() {
  const dispatch = useDispatch();
  const closeShowDetails = useCallback(
    value => dispatch(detailsAction(value)),
    [dispatch],
  );
  const savePath = useCallback(
    value => dispatch(savedPrevPath(value)),
    [dispatch],
  );
  // const setPrevPath = value => dispatch(setCurrentPath(value));
  // const details = useSelector(getDetails);
  const savedPath = useSelector(getSavedPrevPath);
  const combineActionsCloseButon = value => {
    closeShowDetails(value);
    savePath(value);
    removeContentStorage();
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
