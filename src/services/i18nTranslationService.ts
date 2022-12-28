import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEnglish from '../translations/edpem_EN.json';
import translationDutch from '../translations/edpem_DE.json';
import translationCZ from '../translations/edpem_CZ.json';
import translationFN from '../translations/edpem_FN.json';

// Documentation: https://react.i18next.com/latest/usetranslation-hook

const languageResources = {
  en: {
    translation: translationEnglish,
  },
  de: {
    translation: translationDutch,
  },
  cz: {
    translation: translationCZ,
  },
  fn: {
    translation: translationFN,
  },
};

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: languageResources,
});

export default i18next;
