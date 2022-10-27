import s from './SolarEnergy.module.scss';
import React from 'react';
import getID from 'tools/getID';
import images from '../../utils/db/images-db/solarEnergy-images';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import Submit from 'tools/Submit';

export default function LANContent() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { solarEnergy } = LangContentSelector(currentLanguage);
  const { slide1, slide2, slide3, slide4, slide5, slide6 } = images;
  return (
    <>
      <section className={s.solarEnergy}>
        <h2 className={s.heads}>{solarEnergy.head}</h2>
        <p className={s.pain}>{solarEnergy.pain}</p>
        <b className={s.subhead}>{solarEnergy.subhead[0]}</b>

        <ul className={s}>
          {/* <li className={s.contentItems}>
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {solarEnergy.solutions[0]}
              </p>
              <p className={`${s.subheadItems}`}>{solarEnergy.details[0]}</p>
              <ul className={s.solarEnergyList}>
                {solarEnergy.content1.map(text => (
                  <li className={s.text} key={getID()}>
                    <p className={s.textItem}>{text}</p>
                  </li>
                ))}
              </ul>
              <Submit />
            </div>
            <img src={slide1} className={s.images} alt="content" />
          </li> */}

          <li className={s.contentItems}>
            <img src={slide2} className={s.images} alt="system integration" />
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {solarEnergy.solutions[1]}
              </p>
              <p className={`${s.subheadItems}`}>{solarEnergy.text2}</p>
              <ul className={s.solarEnergyList}>
                {solarEnergy.content2.map(text => (
                  <li className={s.text} key={getID()}>
                    <p className={s.textItem}>{text}</p>
                  </li>
                ))}
              </ul>
              <Submit />
            </div>
          </li>

          {/* <li className={s.contentItems}>
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {solarEnergy.solutions[2]}
              </p>
              <p className={`${s.subheadItems}`}>{solarEnergy.text3}</p>
              <ul className={s.solarEnergyList}>
                {solarEnergy.content3.map(text => (
                  <li className={s.text} key={getID()}>
                    <p className={s.textItem}>{text}</p>
                  </li>
                ))}
              </ul>
              <Submit />
            </div>
            <img src={slide3} className={s.images} alt="clouds" />
          </li> */}
        </ul>

        <b className={`${s.subhead} ${s.worksTitle}`}>
          {solarEnergy.subhead[1]}
        </b>
        <ul className={s.worksList}>
          <li className={s.worksItems}>
            <p className={s.worksContent}>{solarEnergy.works[0]}</p>
            <img
              src={slide4}
              className={s.worksImages}
              alt="project developing"
            />
          </li>
          <li className={s.worksItems}>
            <p className={s.worksContent}>{`${solarEnergy.works[1]}`}</p>

            <img
              src={slide5}
              className={s.worksImages}
              alt="project developing"
            />
          </li>
          <li className={s.worksItems}>
            <p className={s.worksContent}>{`${solarEnergy.works[2]}`}</p>
            <img src={slide6} className={s.worksImages} alt="system services" />
          </li>
        </ul>
        {/* <Submit/> */}
      </section>
    </>
  );
}
