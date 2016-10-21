import { asyncConnect } from 'redux-connect';
import { loadSynthesizerPageAsync } from '../../redux/modules/synthesizerPage.redux';

const mapActionCreators = {};

const mapStateToProps = ({ synthesizerPage }) => ({
  ...synthesizerPage
});

export default asyncConnect([{
  promise: ({ store: { dispatch } }) => dispatch(loadSynthesizerPageAsync())
}], mapStateToProps, mapActionCreators);
