import { asyncConnect } from 'redux-connect';
import { loadSynthesizerAsync } from '../../redux/modules/synthesizer.redux';

const mapActionCreators = {};

const mapStateToProps = ({ synthesizer }) => ({
  ...synthesizer
});

export default asyncConnect([{
  promise: ({ store: { dispatch } }) => dispatch(loadSynthesizerAsync())
}], mapStateToProps, mapActionCreators);
