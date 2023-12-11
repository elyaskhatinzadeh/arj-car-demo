import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationFA from './locales/fa/translation.json';

const resources = {
    en: {
        translation: translationEN,
    },
    fa: {
        translation: translationFA,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        keySeparator: false, // allows using dots in keys
        interpolation: {
            escapeValue: false, // react already safely escapes values
        },
    });

export default i18n;