import { useEffect } from 'react';
import s from './Contacts.module.scss';
import { CSSTransition } from 'react-transition-group';
import { MdMail } from 'react-icons/md';
import { useSelector } from 'react-redux';
import LanguageContentSelector from 'additional-components/LanguageContentSelector';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import io from 'tools/io';

export default function Contacts() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { footer } = LanguageContentSelector(currentLanguage);

  useEffect(() => {
    io('contacts', '0px', s.contactsAnimation);
  }, []);

  return (
    <section className={s.footerItems}>
      <p>{footer.contacts}</p>
      {/* <CSSTransition
        in={true}
        appear={true}
        classNames={s}
        timeout={3000}
        unmountOnExit
      > */}
      {/* <div> */}
      <div>
        <a
          className={s.contacts}
          href="mailto: iv@iv-en.com"
          target="_blank"
          rel="noreferrer"
          id="contacts"
        >
          <MdMail className={s.footerIcons} />
          <p className={s.link}>iv@iv-en.com</p>
        </a>
      </div>

      {/* </CSSTransition> */}
    </section>
  );
}
