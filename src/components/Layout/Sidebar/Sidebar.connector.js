import { connect } from 'react-redux';

const mapActionCreators = {};

const mapStateToProps = ({
  sidebar
}) => ({
  sidebar
});

export default connect(mapStateToProps, mapActionCreators);
