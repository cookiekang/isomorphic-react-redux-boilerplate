import React, { PropTypes } from 'react';

const SynthesizersListItem = ({ synthesizersItem, t }) => {

  debugger;

  return (
    <li className="active">
      <a href="#">
        {synthesizersItem.name} <span className="sr-only">(current)</span>
      </a>
    </li>
  );
};

SynthesizersListItem.propTypes = {
  synthesizersItem: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default SynthesizersListItem;
