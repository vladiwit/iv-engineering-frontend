import { useEffect } from 'react';
import s from './Communities.module.scss';
import sprite from 'utils/db/img/sprite.svg';
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import LanguageContentSelector from 'additional-components/LanguageContentSelector';
import { getLanguageMemoised } from 'redux/languages/languages-selector';

export default function Communities() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { footer } = LanguageContentSelector(currentLanguage);

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
    <section className={s.footerItems}>
      {/* <p className={s.community}>{footer.sociality}</p> */}
      <p>{footer.sociality}</p>
      <CSSTransition in={true} appear classNames={s} timeout={2000}>
        <ul className={` list ${s.socialnetworks}`}>
          <li>
            <a
              href="https://www.facebook.com/iv.engineering.iv.engineering"
              target="_blank"
              rel="noreferrer"
            >
              <svg className={s.footerIcons}>
                <use href={sprite + '#icon-facebook'} />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/iv_engineering_"
              target="_blank"
              rel="noreferrer"
            >
              <svg className={s.footerIcons}>
                <use href={sprite + '#icon-twitter'} />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/iv-engineering"
              target="_blank"
              rel="noreferrer"
            >
              <svg className={s.footerIcons}>
                <use href={sprite + '#icon-linkedin'} />;
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_iv_engineering/"
              target="_blank"
              rel="noreferrer"
            >
              <svg className={s.footerIcons}>
                <use href={sprite + '#icon-instagram'} />;
              </svg>
            </a>
          </li>
        </ul>
      </CSSTransition>
    </section>
  );
}
