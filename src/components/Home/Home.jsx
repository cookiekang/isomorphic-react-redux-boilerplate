import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default class Home extends Component {

  static propTypes = {
    t: PropTypes.func,
    isWelcomeMessage: PropTypes.bool,
    showWelcomeMessage: PropTypes.func
  }

  componentDidMount() {
    this.props.showWelcomeMessage();
  }

  render() {
    const { t, isWelcomeMessage } = this.props;

    return (
      <div>
        <Helmet title="Home" />
        <h1>{t('common:helloworld')}</h1>
        <Link to="/synthesizer">Boilerplate page</Link>
        {
          isWelcomeMessage && (
            <p>Welcome message shows on componentDidMount via redux prop showWelcomeMessage()</p>
          )
        }
      </div>
    );
  }
}
