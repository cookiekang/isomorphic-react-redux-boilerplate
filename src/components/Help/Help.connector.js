import { asyncConnect } from 'redux-connect';
import { loadPageAsync } from '../../redux/modules/page.redux';
import { loadHelpAsync } from '../../redux/modules/help.redux';

/* eslint-disable  */
const mapStateToProps = ({ locale: { locale }, help }) => {

  return {
    locale,
    help
  };
};

export default asyncConnect([{
  promise: ({ store: { dispatch }, params: { locale } }) =>
    dispatch(loadPageAsync(locale))
      .then(() => dispatch(loadHelpAsync()))
}], mapStateToProps);
