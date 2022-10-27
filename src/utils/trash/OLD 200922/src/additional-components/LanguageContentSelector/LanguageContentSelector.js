import heroRu from 'utils/db/ru/hero-ru.json';
import naviRu from 'utils/db/ru/navigation-ru.json';
import infornationSystemsRu from 'utils/db/ru/infornationSystems-ru.json';
import securityRu from 'utils/db/ru/securitysystems-ru.json';
import alternativeEnergyRu from 'utils/db/ru/alternativeEnergy-ru.json';
import lanRu from 'utils/db/ru/lan-ru.json';
import itsecurityRu from 'utils/db/ru/itsecurity-ru.json';
import videosurvilanceRu from 'utils/db/ru/videosurvilance-ru.json';
import alarmRu from 'utils/db/ru/alarm-ru.json';
import accessRu from 'utils/db/ru/access-ru.json';
import fireRu from 'utils/db/ru/fire-ru.json';
import thunderRu from 'utils/db/ru/thunder-ru.json';
import windRu from 'utils/db/ru/wind-ru.json';
import lightingRu from 'utils/db/ru/lighting-ru.json';
import solidFuelRu from 'utils/db/ru/solidFuelHeating-ru.json';
import solarEnergyRu from 'utils/db/ru/solarEnergy-ru.json';

import aboutRu from 'utils/db/ru/about-ru.js';
import submitRu from 'utils/db/ru/submit-ru.json';
import submitFormRu from 'utils/db/ru/submitForm-ru.json';
import footerRu from 'utils/db/ru/footer-ru.json';

import heroEn from 'utils/db/en/hero-en.json';
import naviEn from 'utils/db/en/navigation-en.json';
import infornationSystemsEn from 'utils/db/en/infornationSystems-en.json';
import securityEn from 'utils/db/en/securitysystems-en.json';
import alternativeEnergyEn from 'utils/db/en/alternativeEnergy-en.json';
import lanEn from 'utils/db/en/lan-en.json';
import itsecurityEn from 'utils/db/en/itsecurity-en.json';
import videosurvilanceEn from 'utils/db/en/videosurvilance-en.json';
import alarmEn from 'utils/db/en/alarm-en.json';
import accessEn from 'utils/db/en/access-en.json';
import fireEn from 'utils/db/en/fire-en.json';
import thunderEn from 'utils/db/en/thunder-en.json';
import windEn from 'utils/db/en/wind-en.json';
import lightingEn from 'utils/db/en/lighting-en.json';
import solidFuelEn from 'utils/db/en/solidFuelHeating-en.json';
import solarEnergyEn from 'utils/db/en/solarEnergy-en.json';
import aboutEn from '../../utils/db/en/about-en.js';
import submitEn from 'utils/db/en/submit-en.json';
import submitFormEn from 'utils/db/en/submitForm-en.json';
import footerEn from 'utils/db/en/footer-en.json';

import heroUa from 'utils/db/ua/hero-ua.json';
import naviUa from 'utils/db/ua/navigation-ua.json';
import infornationSystemsUa from 'utils/db/ua/infornationSystems-ua.json';
import securityUa from 'utils/db/ua/securitysystems-ua.json';
import alternativeEnergyUa from 'utils/db/ua/alternativeEnergy-ua.json';
import lanUa from 'utils/db/ua/lan-ua.json';
import itsecurityUa from 'utils/db/ua/itsecurity-ua.json';
import videosurvilanceUa from 'utils/db/ua/videosurvilance-ua.json';
import alarmUa from 'utils/db/ua/alarm-ua.json';
import accessUa from 'utils/db/ua/access-ua.json';
import fireUa from 'utils/db/ua/fire-ua.json';
import thunderUa from 'utils/db/ua/thunder-ua.json';
import windUa from 'utils/db/ua/wind-ua.json';
import solidFuelUa from 'utils/db/ua/solidFuelHeating-ua.json';
import solarEnergyUa from 'utils/db/ua/solarEnergy-ua.json';
import aboutUa from 'utils/db/ua/about-ua.js';
import submitUa from 'utils/db/ua/submit-ua.json';
import submitFormUa from 'utils/db/ua/submitForm-ua.json';
import footerUa from 'utils/db/ua/footer-ua.json';
import lightingUa from 'utils/db/ua/lighting-ua.json';

const LangContentSelector = currentLanguage => {
  const ru = {
    hero: heroRu,
    navigation: naviRu,
    infornationSystems: infornationSystemsRu,
    securitysystems: securityRu,
    alternativeEnergy: alternativeEnergyRu,
    lan: lanRu,
    itsecurity: itsecurityRu,
    videosurvilance: videosurvilanceRu,
    alarm: alarmRu,
    access: accessRu,
    fire: fireRu,
    thunder: thunderRu,
    wind: windRu,
    lighting: lightingRu,
    solidFuel: solidFuelRu,
    solarEnergy: solarEnergyRu,
    about: aboutRu,
    submit: submitRu,
    submitForm: submitFormRu,
    footer: footerRu,
  };
  const en = {
    hero: heroEn,
    navigation: naviEn,
    infornationSystems: infornationSystemsEn,
    securitysystems: securityEn,
    alternativeEnergy: alternativeEnergyEn,
    lan: lanEn,
    itsecurity: itsecurityEn,
    videosurvilance: videosurvilanceEn,
    alarm: alarmEn,
    access: accessEn,
    fire: fireEn,
    thunder: thunderEn,
    wind: windEn,
    lighting: lightingEn,
    solidFuel: solidFuelEn,
    solarEnergy: solarEnergyEn,
    about: aboutEn,
    submit: submitEn,
    submitForm: submitFormEn,
    footer: footerEn,
  };
  const ua = {
    hero: heroUa,
    navigation: naviUa,
    infornationSystems: infornationSystemsUa,
    securitysystems: securityUa,
    alternativeEnergy: alternativeEnergyUa,
    lan: lanUa,
    itsecurity: itsecurityUa,
    videosurvilance: videosurvilanceUa,
    alarm: alarmUa,
    access: accessUa,
    fire: fireUa,
    thunder: thunderUa,
    wind: windUa,
    lighting: lightingUa,
    solidFuel: solidFuelUa,
    solarEnergy: solarEnergyUa,
    about: aboutUa,
    submit: submitUa,
    submitForm: submitFormUa,
    footer: footerUa,
  };
  switch (currentLanguage) {
    case 'RU':
      return ru;
    case 'EN':
      return en;
    case 'UA':
      return ua;
    default:
      return en;
  }
};
export default LangContentSelector;
