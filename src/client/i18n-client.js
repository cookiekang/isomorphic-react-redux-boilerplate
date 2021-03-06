import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import supportedLocales from '../translations/supportedLocales.json';

i18n
  .use(XHR)
  .init({
    whitelist: ['en-US', ...supportedLocales],
    fallbackLng: 'en-US',
    ns: [
      'common',
      'navbar',
      'sidebar',
      'footer',
      'help',
      'synthesizer'
    ],
    defaultNS: 'common',
    // debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
