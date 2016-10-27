import { asyncConnect } from 'redux-connect';
import { loadPageAsync } from '../../redux/modules/page.redux';
import { loadSynthesizerAsync } from '../../redux/modules/synthesizer.redux';

const mapStateToProps = ({ locale: { locale }, synthesizer }) => {
  const {
    synthesizersList
  } = synthesizer;

  return {
    locale,
    synthesizersList
  };
};

export default asyncConnect([{
  promise: ({ store: { dispatch }, params: { locale } }) =>
    dispatch(loadPageAsync(locale))
      .then(() => dispatch(loadSynthesizerAsync()))
}], mapStateToProps);
