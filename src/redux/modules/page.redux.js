import { changeLocale } from './locale.redux';

export function loadPageAsync(locale) {
  if (!locale) {
    locale = 'en-US';
  }

  return (dispatch) => {
    dispatch(changeLocale(locale));
    return;
  };
}
