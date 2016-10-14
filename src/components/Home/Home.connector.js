import { asyncConnect } from 'redux-connect';
import { showWelcomeMessage } from '../../redux/modules/home.redux';

const mapActionCreators = {
  showWelcomeMessage
};

const mapStateToProps = ({ home }) => ({
  ...home
});

export default asyncConnect([], mapStateToProps, mapActionCreators);
