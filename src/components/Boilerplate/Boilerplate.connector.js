import { asyncConnect } from 'redux-connect';
import { loadBoilerplateAsync } from '../../redux/modules/boilerplate.redux';

const mapActionCreators = {};

const mapStateToProps = ({ boilerplate }) => ({
  ...boilerplate
});

export default asyncConnect([{
  promise: ({ store: { dispatch } }) => dispatch(loadBoilerplateAsync())
}], mapStateToProps, mapActionCreators);
