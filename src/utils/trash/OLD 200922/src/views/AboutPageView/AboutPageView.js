import React from 'react';
import s from './AboutPageView.module.scss'
import { CSSTransition } from 'react-transition-group';

import LanguageButton from '../../additional-components/LanguageButton/LanguageButton'
import AppBar from '../../components/AppBar';
import Submit from 'tools/Submit';
import CloseButton from 'tools/CloseButton';
import LanguageContentSelector from 'additional-components/LanguageContentSelector/LanguageContentSelector';
import Footer from 'components/Footer';
import { connect } from 'react-redux';
import getID from 'tools/getID';

function AboutPageView({ currentLanguage }) {
    const { about } = LanguageContentSelector(currentLanguage);
    return <>
    <LanguageButton/>
        <AppBar />
        <CloseButton />
        <section className={s}>
        {/* <section > */}
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
                    <h2 className={s.heads}>{ about.head}</h2>
                        <p className={`${s.subheadItems} ${s.aboutContent}`}>{about.part1}</p>
                        <ul className={`${s.subheadItems} ${s.aboutContent} ${s.aboutDirectionList}`} >
                            {about.directionList.map(item => (
                                <li key={getID()} className={s.aboutDirectionListItem}>{ item}</li>
                            ))}
                        </ul>
                        <p className={`${s.subheadItems} ${s.aboutContent}`}>{about.part2}</p>

                </div>
                </CSSTransition>
            </div>
        </section>
        <Submit/>
        <Footer/>
    </>
}

const mapStateToProps = state => ({
    currentLanguage:state.language.language,
});



export default connect(mapStateToProps)(AboutPageView)
