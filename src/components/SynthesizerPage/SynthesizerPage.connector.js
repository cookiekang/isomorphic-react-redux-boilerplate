import { asyncConnect } from 'redux-connect';
import { loadPageAsync } from '../../redux/modules/page.redux';
import { loadSynthesizerPageAsync } from '../../redux/modules/synthesizerPage.redux';

const mapStateToProps = ({ locale: { locale }, synthesizerPage }) => {
  const {
    synthesizersList
  } = synthesizerPage;

  return {
    locale,
    synthesizersList
  };
};

export default asyncConnect([{
  promise: ({ store: { dispatch }, params: { locale } }) =>
    dispatch(loadPageAsync(locale))
      .then(() => dispatch(loadSynthesizerPageAsync()))
}], mapStateToProps);
