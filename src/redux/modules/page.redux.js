import { changeLocale } from './locale.redux';
// import { loadNavbarAsync } from './navbar.redux';
import { loadSidebarAsync } from './sidebar.redux';
import { loadFooterAsync } from './footer.redux';

export function loadPageAsync(locale) {
  if (!locale) {
    locale = 'en-US';
  }

  return (dispatch) => {
    dispatch(changeLocale(locale));
    // dispatch(loadNavbarAsync());
    dispatch(loadSidebarAsync());
    return dispatch(loadFooterAsync());
  };
}
