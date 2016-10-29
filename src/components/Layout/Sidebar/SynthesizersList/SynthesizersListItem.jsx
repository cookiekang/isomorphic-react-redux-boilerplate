import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SynthesizersListItem = ({ synthesizersItem, t }) => {

  return (
    <li className="active">
      <Link to="/synthesizers">
        {synthesizersItem.name} <span className="sr-only">(current)</span>
      </Link>
    </li>
  );
};

SynthesizersListItem.propTypes = {
  synthesizersItem: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default SynthesizersListItem;
