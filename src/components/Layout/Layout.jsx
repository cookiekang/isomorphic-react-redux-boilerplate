import React, { PropTypes } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import '../../sass/global-styles.scss';

export const Layout = ({ children }) => {

  return (
    <div>
      {<Navbar />}
      <div className="container-fluid">
        <div className="row">
          {<Sidebar />}
        </div>
      </div>
      {<Sidebar />}
      {/* Main */}
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        {
          children ? children : <p>Choose a synthesizer</p>
        }
      </div>
      <footer id="Footer">
        {<Footer />}
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
