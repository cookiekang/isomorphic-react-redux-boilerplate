import synthesizerRoute from './pages/Synthesizer.route';
import flatten from 'lodash/flatten';

// Generated from all urls.json translated in translations directory
import urls from '../translations/urls.json';

// Configured for all child routes that need to be translated for
const childRoutes = [
  {
    translationKey: 'synthesizer',
    route: synthesizerRoute
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

// TODO: unexport when getTranslatedUrl function is used
export function getTranslatedPath(locale, urlKey) {
  const localeParam = ':locale';

  if (locale === 'en-US') {
    // use commented out line when multiple types of same location en-US en-GB
    return `${urls[locale][urlKey]}`;
  }

  // use commented out line when multiple types of same location en-US en-GB
  return `${localeParam}/${urls[locale][urlKey]}`;
}

// export function getTranslatedUrl(locale, urlKey) {
//   if (locale === 'en-US') {
//     return `/${urls[locale][urlKey]}/l/`;
//   }
//
//   return `/${locale}/${urls[locale][urlKey]}/l/`;
// }
