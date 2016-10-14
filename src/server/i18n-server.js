import i18n from 'i18next';
import Backend from 'i18next-node-fs-backend';
import supportedLocales from '../translations/supportedLocales';


i18n
  .use(Backend)
  .init({
    whitelist: ['en-US', ...supportedLocales],
    fallbackLng: 'en-US',
    ns: ['common'],
    defaultNS: 'common',
    // debug: true,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: 'src/translations/{{lng}}/{{ns}}.json',
      jsonIndent: 2
    }
  });

export default i18n;
