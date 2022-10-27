import s from './VideoSurvilance.module.scss';
import React from 'react';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import { useSelector } from 'react-redux';
import images from '../../utils/db/images-db/cctv';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import Submit from '../../tools/Submit';

export default function VideoSurvilance() {
  const currentLanguage = useSelector(getLanguageMemoised);

  const { videosurvilance } = LangContentSelector(currentLanguage);
  return (
    <section className={s.cctv}>
      <h2 className={s.heads}>{videosurvilance.head}</h2>
      <p className={s.pain}>{videosurvilance.pain}</p>
      <b className={s.subhead}>{videosurvilance.subhead[0]}</b>

      <ul>
        <li className={s.contentItems}>
          <div className={s.itemText}>
            {/* <p className={s.text}>{videosurvilance.solutions[0]}</p> */}
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {videosurvilance.solutions[0]}
            </p>
            <p className={`${s.subheadItems}`}>{videosurvilance.content[0]}</p>
            <Submit />
          </div>

          <img className={s.images} src={images[0]} alt="vendors" />
        </li>
        <li className={s.contentItems}>
          <img className={s.images} src={images[1]} alt="vendors" />
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {videosurvilance.solutions[1]}
            </p>
            <p className={`${s.subheadItems}`}>{videosurvilance.content[1]}</p>
            <Submit />
          </div>
        </li>
      </ul>

      <b className={s.subhead}>{videosurvilance.subhead[1]}</b>
      <ul className={s.worksList}>
        <li className={s.worksItems}>
          <p className={s.worksContent}>{`${videosurvilance.works[0]}`}</p>
          <img className={s.worksImages} src={images[7]} alt="project" />
        </li>
        <li className={s.worksItems}>
          <p
            className={s.worksContent}
          >{`${videosurvilance.works[1]}, ${videosurvilance.works[2]}`}</p>
          <img className={s.worksImages} src={images[8]} alt="project" />
        </li>
        <li className={s.worksItems}>
          <p
            className={s.worksContent}
          >{`${videosurvilance.works[3]},  ${videosurvilance.works[4]}`}</p>
          <img className={s.worksImages} src={images[9]} alt="project" />
        </li>
      </ul>
      <b className={s.subhead}>{videosurvilance.subhead[2]}</b>
      <div className={s.logo}>
        {/* <div className={s.logo}> */}
        <img className={s.imagesLogo} src={images[2]} alt="vendors" />
        <img className={s.imagesLogo} src={images[3]} alt="vendors" />
        <img className={s.imagesLogo} src={images[4]} alt="vendors" />
        <img className={s.imagesLogo} src={images[5]} alt="vendors" />
        <img className={s.imagesLogo} src={images[6]} alt="vendors" />
      </div>
    </section>
  );
}