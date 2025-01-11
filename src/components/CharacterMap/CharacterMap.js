import { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { TextContext } from '../App/App';
import { itemize } from '../services/services'

function CharacterMap({
  show,
  transformer
}) {
  const text = useContext(TextContext);

  const characters = useMemo(() => {
    return itemize(text, transformer)
  }, [text, transformer])

  if (!show) {
    return null
  }

  return (
    <div>
      Character Map: {
        characters.map(character => {
          return (
            <div key={character[0]}>
              {character[0]}: {character[1]}
            </div>
          )
        })
      }
    </div>
  )
}

CharacterMap.propTypes = {
  show: PropTypes.bool.isRequired,
  transforme: PropTypes.func
}

export default CharacterMap;