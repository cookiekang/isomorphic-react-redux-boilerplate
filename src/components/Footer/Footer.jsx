// TODO: only display data for specific locales if data is allowed to be displayed
// Find out if data is translated for specific locale before JSON response is received

import React, { PropTypes } from 'react';
import './sass/Footer.scss';

const Footer = ({
  t,
  footer
}) => {

  return (
    <div id="Footer" className="twc-footer">
      <p>Footer</p>
    </div>
  );
};

Footer.propTypes = {
  t: PropTypes.func.isRequired
};

export default Footer;
