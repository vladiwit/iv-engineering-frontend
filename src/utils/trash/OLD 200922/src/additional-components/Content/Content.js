import s from './Content.module.scss';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPath } from 'redux/content/content-selectors';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import * as actions from '../../redux/content/content-actions';

export default function Content({ content }) {
  const dispatch = useDispatch();
  const onShowDetails = useCallback(
    value => dispatch(actions.detailsAction(value)),
    [dispatch],
  );
  const onSavePrevPath = useCallback(
    value => dispatch(actions.savedPrevPath(value)),
    [dispatch],
  );
  const currentPath = useSelector(getCurrentPath);
  const actionCombine = useCallback(
    value => {
      onShowDetails(value);
      onSavePrevPath(currentPath);
    },
    [onShowDetails, onSavePrevPath, currentPath],
  );
  return (
    <>
      <h2 className={s.contentTitle}>{content.head}</h2>
      <h3 className={s.contentSubtitle}>{content.subhead}</h3>
      <CSSTransition in={true} appear={true} classNames={s} timeout={3000}>
        <ul className={s.content}>
          {content.Content.map(({ id, details, content }) => {
            return (
              <li key={id}>
                <NavLink
                  to={{
                    pathname: `${currentPath}/${details}`,
                    state: {
                      from: { currentPath },
                    },
                  }}
                  onClick={() => actionCombine(details)}
                >
                  <p className={s.contentItem}>{content}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </CSSTransition>
    </>
  );
}
