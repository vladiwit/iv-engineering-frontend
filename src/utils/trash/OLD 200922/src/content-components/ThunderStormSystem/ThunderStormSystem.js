import s from './ThunderStormSystem.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import Submit from 'tools/Submit';
import images from '../../utils/db/images-db/thunder';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import getID from 'tools/getID';

export default function ThunderStormSystem() {
  const currentLanguage = useSelector(getLanguageMemoised);

  const { thunder } = LangContentSelector(currentLanguage);
  return (
    <section className={s.thunder}>
      <h2 className={s.heads}>{thunder.head}</h2>
      <b className={s.subhead}>{thunder.subhead}</b>
      <p className={s.pain}>{thunder.pain}</p>

      <ul className={s}>
        <li className={s.contentItems}>
          <div className={s.itemText}>
            <ul className={s.thunderList}>
              {thunder.solutions.map(item => (
                <li key={getID()} className={s.text}>
                  <p className={s.textItem}>{item}</p>
                </li>
              ))}
              <Submit />
            </ul>
          </div>
          <img
            className={s.images}
            src={images[0]}
            alt="thunderstorm defender"
          />
        </li>
        <li className={s.contentItems}>
          <img
            className={s.images}
            src={images[1]}
            alt="active thunder receiver"
          />
          <div className={s.itemText}>
            <p className={s.text}>{thunder.new}</p>
            <Submit />
          </div>
        </li>
      </ul>
    </section>
  );
}
