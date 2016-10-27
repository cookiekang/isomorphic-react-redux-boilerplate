import { changeLocale } from './locale.redux';
// import { loadHeaderAsync } from './header.redux';
import { loadFooterAsync } from './footer.redux';

export function loadPageAsync(locale) {
  if (!locale) {
    locale = 'en-US';
  }

  return (dispatch) => {
    // dispatch(loadHeaderAsync());
    dispatch(loadFooterAsync());
    return dispatch(changeLocale(locale));
  };
}
