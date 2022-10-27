import s from './SolidFuelHeating.module.scss';
import React from 'react';
import getID from 'tools/getID';
import images from '../../utils/db/images-db/solidFuel-images';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import Submit from 'tools/Submit';

export default function LANContent() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { solidFuel } = LangContentSelector(currentLanguage);
  const { slide1, slide2, slide3, slide4, slide5, slide6 } = images;
  return (
    <>
      <section className={s.solidFuel}>
        <h2 className={s.heads}>{solidFuel.head}</h2>
        <p className={s.pain}>{solidFuel.pain}</p>
        <b className={s.subhead}>{solidFuel.subhead[0]}</b>

        <ul className={s}>
          <li className={s.contentItems}>
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {solidFuel.solutions[0]}
              </p>
              {/* <p className={`${s.subheadItems}`}>{solidFuel.details[0]}</p> */}
              <ul className={s.solidFuelList}>
                {solidFuel.content1.map(text => (
                  <li className={s.text} key={getID()}>
                    <p className={s.textItem}>{text}</p>
                  </li>
                ))}
              </ul>
              <Submit />
            </div>
            <img src={slide1} className={s.images} alt="content" />
          </li>

          <li className={s.contentItems}>
            <img src={slide2} className={s.images} alt="system integration" />
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {solidFuel.solutions[1]}
              </p>
              <p className={`${s.subheadItems}`}>{solidFuel.text2}</p>
              <ul className={s.solidFuelList}>
                {solidFuel.content2.map(text => (
                  <li className={s.text} key={getID()}>
                    <p className={s.textItem}>{text}</p>
                  </li>
                ))}
              </ul>
              <Submit />
            </div>
          </li>

          <li className={s.contentItems}>
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {solidFuel.solutions[2]}
              </p>
              <p className={`${s.subheadItems}`}>{solidFuel.text3}</p>
              <ul className={s.solidFuelList}>
                {solidFuel.content3.map(text => (
                  <li className={s.text} key={getID()}>
                    <p className={s.textItem}>{text}</p>
                  </li>
                ))}
              </ul>
              <Submit />
            </div>
            <img src={slide3} className={s.images} alt="clouds" />
          </li>
        </ul>

        <b className={`${s.subhead} ${s.worksTitle}`}>{solidFuel.subhead[1]}</b>
        <ul className={s.worksList}>
          <li className={s.worksItems}>
            <p className={s.worksContent}>{solidFuel.works[0]}</p>
            <img
              src={slide4}
              className={s.worksImages}
              alt="project developing"
            />
          </li>
          <li className={s.worksItems}>
            <p className={s.worksContent}>{`${solidFuel.works[1]}`}</p>

            <img
              src={slide5}
              className={s.worksImages}
              alt="project developing"
            />
          </li>
          <li className={s.worksItems}>
            <p className={s.worksContent}>{`${solidFuel.works[2]}`}</p>
            <img src={slide6} className={s.worksImages} alt="system services" />
          </li>
        </ul>
        {/* <Submit/> */}
      </section>
    </>
  );
}
