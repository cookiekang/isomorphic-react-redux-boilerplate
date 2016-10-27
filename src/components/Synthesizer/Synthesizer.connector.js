import { asyncConnect } from 'redux-connect';
import { loadPageAsync } from '../../redux/modules/page.redux';
import { loadSynthesizerAsync } from '../../redux/modules/synthesizer.redux';

const mapStateToProps = ({ synthesizer }) => ({
  ...synthesizer
});

export default asyncConnect([{
  promise: ({ store: { dispatch } }) => dispatch(loadSynthesizerAsync())
}], mapStateToProps);
