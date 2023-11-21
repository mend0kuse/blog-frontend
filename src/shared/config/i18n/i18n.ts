import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'ru',
		debug: false,

		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		react: {
			useSuspense: false, //   <---- this will do the magic
		},
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
	});

export default i18n;
