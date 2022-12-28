import { SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

interface LanguageType {
  value: string;
  name: string;
  icon: JSX.Element;
}

export const useTranslationHook = () => {
  const { t, i18n } = useTranslation();

  // list of all supported languages *This will be used from global types
  // this array should be modified depending on user privileges
  const supportedLanguages: LanguageType[] = [
    {
      value: 'en',
      name: t('English'),
      icon: <ReactCountryFlag countryCode={'GB'} svg style={{ marginRight: 5 }} />,
    },
    {
      value: 'de',
      name: t('German'),
      icon: <ReactCountryFlag countryCode={'DE'} svg style={{ marginRight: 5 }} />,
    },
    {
      value: 'cz',
      name: t('Czech'),
      icon: <ReactCountryFlag countryCode={'CZ'} svg style={{ marginRight: 5 }} />,
    },
    {
      value: 'fn',
      name: t('Finnish'),
      icon: <ReactCountryFlag countryCode={'FI'} svg style={{ marginRight: 5 }} />,
    },
  ];

  // generic change handler for languages
  const changeLanguage = (event: SelectChangeEvent<string>) => {
    const languageValue = event.target.value;
    i18n.changeLanguage(languageValue);
  };

  return {
    changeLanguage,
    translationKey: t,
    currentLanguage: i18n.language,
    supportedLanguages: supportedLanguages,
  };
};
