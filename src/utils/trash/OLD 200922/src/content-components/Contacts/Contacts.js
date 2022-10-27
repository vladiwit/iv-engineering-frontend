import React from 'react';
import s from './Contacts.module.scss';
import { CSSTransition } from 'react-transition-group';
import { MdMail } from 'react-icons/md';
import { useSelector } from 'react-redux';
import LanguageContentSelector from 'additional-components/LanguageContentSelector';
import { getLanguageMemoised } from 'redux/languages/languages-selector';

export default function Contacts() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { footer } = LanguageContentSelector(currentLanguage);
  return (
    <section className={s.footerItems}>
      <p>{footer.contacts}</p>
      <CSSTransition
        in={true}
        appear={true}
        classNames={s}
        timeout={3000}
        unmountOnExit
      >
        <div>
          <a
            className={s.email}
            href="mailto: iv.en@icloud.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdMail className={s.footerIcons} />
            <p className={s.link}> iv.en@icloud.com</p>
          </a>
        </div>
      </CSSTransition>
    </section>
  );
}
