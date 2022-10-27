import s from './Content.module.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import * as actions from '../../redux/content/content-actions';

export default function Content(props) {
  const dispatch = useDispatch();
  const { pathname } = props.state;
  const { content } = props;
  const saveCurrentPath = value => dispatch(actions.savedPrevPath(value));
  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={s}
        unmountOnExit
      >
        <div>
          <h2 className={s.contentTitle}>{content.head}</h2>
          <h3 className={s.contentSubtitle}>{content.subhead}</h3>
          <ul className={s.content}>
            {content.Content.map(({ id, details, content }) => {
              return (
                <li key={id}>
                  <NavLink
                    to={{
                      pathname: `${details}`,
                    }}
                    onClick={() => saveCurrentPath(pathname)}
                  >
                    <p className={s.contentItem}>{content}</p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </CSSTransition>
    </>
  );
}
