import React from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import s from './Hero.module.scss';
import Submit from '../../tools/Submit';
import {
  directionAction,
  savedPrevPath,
} from '../../redux/content/content-actions';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import routes from 'routes';

export default function Hero() {
  const dispatch = useDispatch();
  const showDirection = value => dispatch(directionAction(value));
  const currentLanguage = useSelector(getLanguageMemoised);
  const { hero } = LangContentSelector(currentLanguage);
  const savePath = value => dispatch(savedPrevPath(value));
  const { main } = routes;

  const actionCombiner = value => {
    showDirection(value);
    savePath(main);
  };

  return (
    <section className={s.hero}>
      <div className={s.title}>
        <h2 key="subtitle" className={`{title} ${s.heroTitle}`}>
          <i>IV-Engineering</i>
        </h2>
        <h1 key="title" className={`{title} ${s.heroSubtitle}`}>
          {hero.title}
        </h1>
      </div>
      <CSSTransition
        in={true}
        appear={true}
        timeout={2000}
        classNames={s}
        unmountOnExit
      >
        <ul className={s.heroMenu}>
          {hero.menu.map(({ id, title, direction, pathname, className }) => (
            <li key={id}>
              <button
                className={`  ${s.heroButton} `}
                onClick={() => showDirection(direction)}
              >
                <NavLink
                  className={` subtitle ${s.heroButton} }`}
                  to={{ pathname: `${pathname}` }}
                  // to="/systems/information-systems"
                >
                  {title}
                </NavLink>
              </button>
            </li>
          ))}
        </ul>
      </CSSTransition>
      <CSSTransition
        in={true}
        appear={true}
        timeout={2000}
        classNames={s}
        unmountOnExit
      >
        <button
          className={`  ${s.heroButton} `}
          onClick={() => actionCombiner(hero.about.direction)}
        >
          <NavLink
            className={` subtitle ${s.heroButton} }`}
            to={{ pathname: `${hero.about.pathname}` }}
          >
            {hero.about.title}
          </NavLink>
        </button>
      </CSSTransition>
      <Submit />
    </section>
  );
}
