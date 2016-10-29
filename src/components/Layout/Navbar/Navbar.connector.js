import { connect } from 'react-redux';

const mapActionCreators = {};

const mapStateToProps = ({
  navbar
}) => ({
  navbar
});

export default connect(mapStateToProps, mapActionCreators);
