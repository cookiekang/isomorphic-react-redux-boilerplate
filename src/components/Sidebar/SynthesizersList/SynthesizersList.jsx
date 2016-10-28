import React, { PropTypes } from 'react';
import SynthesizersListItem from './SynthesizersListItem';

const SynthesizersList = ({ synthesizersList, t }) => {

  const {
    list
  } = synthesizersList;

  return (
    <ul className="nav nav-sidebar">
      {
        list.map((listItem, i) => (
          <SynthesizersListItem synthesizersItem={listItem} key={i} t={t} />
        ))
      }
    </ul>
  );
};

SynthesizersList.propTypes = {
  synthesizersList: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default SynthesizersList;
