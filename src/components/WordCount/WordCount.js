import { useContext } from 'react';
import PropTypes from 'prop-types';
import { TextContext } from '../App/App';

function WordCount({
  show
}) {
  const text = useContext(TextContext);
  const splittedText = text.split(/(?=[A-Z])|[_\W]+/);
  if (!show) {
    return null
  }

  return (    
    <div>
      Word Count: {splittedText.length === 1 && splittedText[0] === ''? 0 : splittedText.length}
    </div>
  )
}

WordCount.propTypes = {
  show: PropTypes.bool.isRequired
}

export default WordCount;