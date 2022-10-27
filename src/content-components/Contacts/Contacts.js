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
        {/* <div> */}
        <div>
          <a
            className={s.email}
            href="mailto: iv@iv-en.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdMail className={s.footerIcons} />
            <p className={s.link}>iv@iv-en.com</p>
          </a>
        </div>
        {/* <p>Tel.</p>
          <a href="tel:+380663832747">(380)66 383 27 47</a> */}
        {/* </div> */}
      </CSSTransition>
    </section>
  );
}
