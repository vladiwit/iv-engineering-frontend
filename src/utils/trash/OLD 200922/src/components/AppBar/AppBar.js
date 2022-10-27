import s from './AppBar.module.scss';
import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from '../../content-components/Navigation';
import { useDispatch } from 'react-redux';
import * as contentActions from '../../redux/content/content-actions';
import removeContentStorage from 'tools/removeLocalStorageContent';
const { directionAction, detailsAction } = contentActions;

export default function AppBar() {
  const dispatch = useDispatch();
  const onShowDeails = useCallback(
    () => dispatch(detailsAction('')),
    [dispatch],
  );

  // const getDirection = useCallback(
  //   value => dispatch(directionAction(value)),
  //   [dispatch],
  // );

  const funtionCombiner = useCallback(
    value => {
      onShowDeails('');
      // getDirection(value);
      removeContentStorage();
    },
    [, /* getDirection */ onShowDeails],
  );

  return (
    <header className={s.header}>
      <div>
        {/* <NavLink exact onClick={dispatch()} to={`/`}> */}
        <NavLink exact onClick={() => funtionCombiner('')} to={`/`}>
          <p className={` ${s.logo}`}>
            <i>IV-Engineering</i>
          </p>
        </NavLink>
      </div>
      <Navigation />
    </header>
  );
}
