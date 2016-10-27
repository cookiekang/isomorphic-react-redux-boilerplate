import React, { PropTypes } from 'react';
import Footer from '../Footer';
import '../../sass/global-styles.scss';

export const Layout = ({ children }) => {

  return (
    <div className="container">
      <div id="Header">
        {/* Header goes here  */}
      </div>
      <div id="Sidebar"></div>
      <div id="Main"></div>
      {
        children ? children : <p>Choose a synthesizer</p>
      }
      <footer id="Footer">
        {<Footer />}
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
