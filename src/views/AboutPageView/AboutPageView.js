import React from 'react';
import s from './AboutPageView.module.scss';
import { CSSTransition } from 'react-transition-group';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import LanguageButton from '../../additional-components/LanguageButton/LanguageButton';
import AppBar from '../../components/AppBar';
import Submit from 'tools/Submit';
import LanguageContentSelector from 'additional-components/LanguageContentSelector/LanguageContentSelector';
import Footer from 'components/Footer';
import { useSelector } from 'react-redux';
import getID from 'tools/getID';
import CloseButton from 'tools/CloseButton';

function AboutPageView() {
  const currentLanguage = useSelector(getLanguageMemoised);

  const { about } = LanguageContentSelector(currentLanguage);
  return (
    <>
      <LanguageButton />
      <AppBar />
      <CloseButton />
      <section className={s}>
        <div className={`${s.about} ${s.aboutContent}`}>
          {/* <div className={`${s.about}`}> */}
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames={s}
            unmountOnExit
          >
            <div>
              <div>
                <h2 className={s.heads}>{about.head}</h2>
                <p className={`${s.subheadItems} ${s.aboutContent}`}>
                  {about.part1}
                </p>
                <ul
                  className={`${s.subheadItems} ${s.aboutContent} ${s.aboutDirectionList}`}
                >
                  {about.directionList.map(item => (
                    <li key={getID()} className={s.aboutDirectionListItem}>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className={`${s.subheadItems} ${s.aboutContent}`}>
                  {about.part2}
                </p>
              </div>

              <div>
                <h2 className={s.heads}>{about.consulingTitle}</h2>
                <p className={`${s.subheadItems} ${s.aboutContent}`}>
                  {about.consulting1}
                </p>
                <p className={`${s.subheadItems} ${s.aboutContent}`}>
                  {about.consulting2}
                </p>
                <p className={`${s.subheadItems} ${s.aboutContent}`}>
                  {about.consulting3}
                </p>
              </div>
            </div>
          </CSSTransition>
        </div>
      </section>
      <Submit />
      <Footer />
    </>
  );
}

export default AboutPageView;
