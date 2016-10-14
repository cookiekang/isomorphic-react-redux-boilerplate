export homeRoute from './pages/Home.route';
import boilerplateRoute from './pages/Boilerplate.route';
import flatten from 'lodash/flatten';

// Generated from all urls.json translated in translations directory
import urls from './urls.json';

// Configured for all child routes that need to be translated for
const childRoutes = [
  {
    translationKey: 'boilerplate',
    route: boilerplateRoute
  }
];

// Exported function that createRoutes.js uses to pass store to generate an array
// of childRoutes configured with store
export function getChildRoutes(store) {
  const translatedChildRoutes = Object.keys(urls).map((locale) =>
    childRoutes.map(({ translationKey, route }) =>
      route(store, getTranslatedPath(locale, translationKey))));

  return flatten(translatedChildRoutes);
}

function getTranslatedPath(locale, urlKey) {
  // const locParam = ':locId';
  const localeParam = ':locale';

  if (locale === 'en-US') {
    return `${urls[locale][urlKey]}`;
  }

  return `${localeParam}/${urls[locale][urlKey]}`;

}
