import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './sass/Navbar.scss';

const Navbar = ({
  t,
  navbar
}) => (
  <nav
    className="navbar navbar-inverse navbar-fixed-top"
  >
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand title" href="#">{t('common:synthesizer')}</a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/help">
              Help
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  navbar: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default Navbar;
