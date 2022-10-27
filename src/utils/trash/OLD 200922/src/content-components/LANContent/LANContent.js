import s from './LANContent.module.scss';
import React from 'react';
import images from '../../utils/db/images-db/lan-images';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import Submit from 'tools/Submit';

export default function LANContent() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { lan } = LangContentSelector(currentLanguage);
  return (
    <>
      <section className={s.lan}>
        <h2 className={s.heads}>{lan.head}</h2>
        <p className={s.pain}>{lan.pain}</p>
        <b className={s.subhead}>{lan.subhead[0]}</b>

        <ul className={s}>
          <li className={s.contentItems}>
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {lan.solutions[0]}
              </p>
              <Submit />
            </div>
            <img src={images[0]} className={s.images} alt="content" />
          </li>

          <li className={s.contentItems}>
            <img
              src={images[1]}
              className={s.images}
              alt="system integration"
            />
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {lan.solutions[1]}
              </p>
              <Submit />
            </div>
          </li>

          <li className={s.contentItems}>
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {lan.solutions[2]}
              </p>
              <Submit />
            </div>
            <img src={images[2]} className={s.images} alt="clouds" />
          </li>
        </ul>

        <b className={`${s.subhead} ${s.worksTitle}`}>{lan.subhead[1]}</b>
        <ul className={s.worksList}>
          <li className={s.worksItems}>
            <p className={s.worksContent}>{lan.works[0]}</p>
            <img
              src={images[5]}
              className={s.worksImages}
              alt="project developing"
            />
          </li>
          <li className={s.worksItems}>
            <p className={s.worksContent}>{`${lan.works[1]}`}</p>

            <img
              src={images[3]}
              className={s.worksImages}
              alt="project developing"
            />
          </li>
          <li className={s.worksItems}>
            <p className={s.worksContent}>{`${lan.works[2]}`}</p>
            <img
              src={images[6]}
              className={s.worksImages}
              alt="system services"
            />
          </li>
        </ul>
        {/* <Submit/> */}
      </section>
    </>
  );
}