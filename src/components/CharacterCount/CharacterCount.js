import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TextContext } from '../App/App';

function CharacterCount({
  show
}) {
  const text = useContext(TextContext);

  if (!show) {
    return null;
  }

  return (
    <div>
      Characters Count: {text.length}
    </div>
  )
}

CharacterCount.propTypes = {
  show: PropTypes.bool.isRequired
}

export default CharacterCount;