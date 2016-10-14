import React, { PropTypes } from 'react';

export const Layout = ({ children }) => (
  <div className="layout">
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
