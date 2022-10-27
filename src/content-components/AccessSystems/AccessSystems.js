import s from './AccessSystems.module.scss';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import Submit from 'tools/Submit';
import images from 'utils/db/images-db/access';
import getID from 'tools/getID';
import link from '../../utils/db/links/access-link.json';

export default function AccessSystems() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { access } = LangContentSelector(currentLanguage);

  return (
    <section className={s.access}>
      <h2 className={s.heads}>{access.head}</h2>
      <p className={s.pain}>{access.pain}</p>
      <b className={s.subhead}>{access.subhead[0]}</b>

      <ul>
        <li className={s.contentItems}>
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {access.content[0]}
            </p>
            <ul className={s.accessList}>
              {access.detailsA.map(detail => (
                <li key={getID()} className={s.text}>
                  <p className={s.textItem}>{detail}</p>
                </li>
              ))}
            </ul>
            <Submit />
          </div>
          <img className={s.images} src={images[0]} alt="" />
          {/* <img className={`s.${className}`} src={images[0]} alt="" /> */}
        </li>
        <li className={s.contentItems}>
          <img className={s.images} src={images[1]} alt="" />
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {access.content[1]}
            </p>
            <ul className={s.accessList}>
              {access.detailsB.map(detail => (
                <li key={getID()} className={s.text}>
                  <p className={s.textItem}>{detail}</p>
                </li>
              ))}
            </ul>
            <Submit />
          </div>
        </li>
        <li className={s.contentItems}>
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {access.content[2]}
            </p>
            {/* <p className={s.text}>{access.details[2]}</p> */}
            <Submit />
          </div>
          <img className={s.images} src={images[2]} alt="" />
        </li>
        <li className={s.contentItems}>
          <img className={s.images} src={images[3]} alt="" />
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {access.content[3]}
            </p>
            {/* <p className={s.text}>{access.details[1]}</p> */}
            <Submit />
          </div>
        </li>
        <li className={s.contentItems}>
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {access.content[4]}
            </p>
            <ul className={s.accessList}>
              <li className={s.text}>
                <a href={link.vein} target="_blank" rel="noreferrer">
                  <p className={` ${s.link}`}>{access.linkTitle}</p>
                </a>
              </li>
              <li className={s.text}>
                <p className={`  ${s.textItem}`}>{access.details2}</p>
              </li>
            </ul>

            <Submit />
          </div>
          <img className={s.images} src={images[4]} alt="" />
        </li>
        <li className={s.contentItems}>
          <img className={s.images} src={images[5]} alt="" />
          <div className={s}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {access.content[5]}
            </p>
            {/* <p className={s.text}>{access.details[1]}</p> */}
            <Submit />
          </div>
        </li>
      </ul>
      <b className={`${s.subhead} ${s.worksTitle}`}>{access.subhead[1]}</b>
      <ul className={s.worksList}>
        <li className={s.worksItems}>
          <p className={s.worksContent}> {access.works[0]} </p>
          <img className={s.worksImages} src={images[6]} alt="" />
        </li>
        <li className={s.worksItems}>
          <p className={s.worksContent}> {access.works[1]} </p>
          <img className={s.worksImages} src={images[7]} alt="" />
        </li>
        <li className={s.worksItems}>
          <p className={s.worksContent}> {access.works[2]} </p>
          <img className={s.worksImages} src={images[8]} alt="" />
        </li>
      </ul>
    </section>
  );
}
