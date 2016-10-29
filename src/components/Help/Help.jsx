import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import './sass/Help.scss';

const Help = ({
  help,
  t,
}) => {

  const title = t('common:help');

  return (
    <div>
      <Helmet title={title} />
      <div className="page-header">
        <h1 className="help">{title}</h1>
      </div>
    </div>
  );
};

Help.propTypes = {
  help: PropTypes.object,
  t: PropTypes.func
};

export default Help;
