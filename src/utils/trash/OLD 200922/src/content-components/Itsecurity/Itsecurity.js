import s from './Itsecurity.module.scss';
import React from 'react';
import images from 'utils/db/images-db/it-security';
import LanguageContentSelector from 'additional-components/LanguageContentSelector';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import Submit from 'tools/Submit';

export default function Itsecutity() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { itsecurity } = LanguageContentSelector(currentLanguage);
  return (
    <>
      <section className={s.itsecurity}>
        <h2 className={s.heads}>{itsecurity.head}</h2>
        <h3 className={s.subhead}>{itsecurity.subhead}</h3>

        <ul className={s}>
          <li className={s.contentItems}>
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {itsecurity.solutions[0]}
              </p>
              <Submit />
            </div>
            <img className={s.images} src={images[0]} alt="datarestoring" />
          </li>

          <li className={s.contentItems}>
            <img
              className={s.images}
              src={images[1]}
              alt="event management platform"
            />
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {itsecurity.solutions[1]}
              </p>
              <Submit />
            </div>
          </li>

          <li className={s.contentItems}>
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {itsecurity.solutions[2]}
              </p>
              <Submit />
            </div>
            <img
              className={s.images}
              src={images[2]}
              alt="preventing intrusions"
            />
          </li>
          <li className={s.contentItems}>
            <img className={s.images} src={images[3]} alt="" />
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {itsecurity.solutions[3]}
              </p>
              <Submit />
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
