import React from 'react';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import { getDetails } from 'redux/content/content-selectors';
import { CSSTransition } from 'react-transition-group';
import engineeringImages from '../../utils/db/images-db/engineering-systems';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import Content from '../../additional-components/Content';
import Slider from '../../tools/Slider';
import Submit from 'tools/Submit';

import s from './AlternativeEnergy.module.scss';

export default function Engineering() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const details = useSelector(getDetails);
  const { alternativeEnergy } = LangContentSelector(currentLanguage);
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={s}
      unmountOnExit
    >
      <div className={s.engineeringsystems}>
        {!details && <Slider images={engineeringImages} />}
        <Content content={alternativeEnergy} />
        <Submit />
      </div>
    </CSSTransition>
  );
}