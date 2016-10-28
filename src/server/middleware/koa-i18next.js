import i18next from 'i18next';
import Backend from 'i18next-node-fs-backend';
import { loadNamespaces } from 'react-i18next';
import supportedLocales from '../../translations/supportedLocales';

const i18nServer = i18next
  .use(Backend)
  .init({
    whitelist: ['en-US', ...supportedLocales],
    fallbackLng: 'en-US',
    ns: [
      'common',
      'navbar',
      'sidebar',
      'footer',
      'synthesizer'
    ],
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

export default function i18nextKoa() {
  return async (ctx, next) => {
    await changeLanguage(ctx.locale);

    ctx.i18n = i18nServer.cloneInstance();

    await loadNamespaces({ ...ctx.renderProps, i18n: ctx.i18n });

    await next();
  };
}

function changeLanguage(locale) {
  return new Promise((resolve) => i18nServer.changeLanguage(locale, resolve));
}
