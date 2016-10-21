import React, { PropTypes } from 'react';
import '../../sass/global-styles.scss';

export const Layout = ({ children }) => (
  <div className="layout">
    <div id="Header">
      {/* Header goes here  */}
    </div>
    {children}
    <footer id="Footer">
      {/* Footer goes here */}
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
