import React, { PropTypes } from 'react';
import SynthesizersList from './SynthesizersList';
import './sass/Sidebar.scss';

const Sidebar = ({
  t,
  sidebar
}) => {

  const {
    synthesizersList
  } = sidebar;

  return (
    <div className="col-sm-3 col-md-2 sidebar">
      <SynthesizersList
        synthesizersList={synthesizersList}
        t={t}
      />
    </div>
  );
};

Sidebar.propTypes = {
  sidebar: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default Sidebar;
