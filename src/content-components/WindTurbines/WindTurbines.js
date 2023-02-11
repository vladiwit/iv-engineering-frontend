import s from './WindTurbines.module.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import Submit from 'tools/Submit';
import images from 'utils/db/images-db/wind-images';

export default function WindSystems() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { wind } = LangContentSelector(currentLanguage);

  // -------------------------IO---------------------------
  const cb = entries => {
    // console.log('ENRTIES IN CB::::::', entries);
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`${s.active}`);
        // observer.unobserve(entry);
      }
    });
  };

  const options = {
    // rootMargin: '-200px',
    // threshold: 0.3,
  };

  const observer = new IntersectionObserver(cb, options);

  useEffect(() => {
    const targets = document.querySelectorAll(`.${s.contentItems}`);
    // console.log('TARGET_ARRAY:::::', targets);

    targets.forEach(target => observer.observe(target));
  }, []);

  // ---------------------------------------------------------------

  return (
    <section className={s.wind}>
      <h2 className={s.heads}>{wind.head}</h2>
      <p className={`${s.pain} ${s.subhead}`}>{wind.pain}</p>

      <article className={`${s.text} ${s.textItem}`}>
        {wind.painArticle}
      </article>

      <ul className={s}>
        <li className={s.contentItems}>
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {wind.details[0]}
            </p>
            <ul className={s.windList}>
              {wind.texts1.map(text => (
                <li key={Math.random()} className={s.text}>
                  <p className={s.textItem}>{text}</p>{' '}
                </li>
              ))}
            </ul>
            <Submit />
          </div>
          <img className={s.images} src={images[0]} alt="" />
        </li>
        <li className={s.contentItems}>
          <img className={s.images} src={images[1]} alt="" />
          <div className={s}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {wind.solutions[0]}
            </p>
            <div className={s.itemText}>
              <i className={`${s.text} ${s.textItem}`}>{wind.details[1]}</i>
              <ul className={s.windList}>
                {wind.texts2.map(text => (
                  <li key={Math.random()} className={s.text}>
                    <p className={s.textItem}>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Submit />
          </div>
        </li>
        <li className={s.contentItems}>
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {wind.solutions[1]}
            </p>

            <ul className={s.windList}>
              {wind.texts3.map(text => (
                <li key={Math.random()} className={s.text}>
                  <p className={s.textItem}>{text}</p>
                </li>
              ))}
            </ul>
            <Submit />
          </div>
          <img className={s.images} src={images[2]} alt="" />
        </li>
      </ul>
    </section>
  );
}
