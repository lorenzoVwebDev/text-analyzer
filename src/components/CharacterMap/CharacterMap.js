import { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { TextContext } from '../App/App';
import { itemize } from '../services/services'

const useStyle = createUseStyles({
characterMap: {
  borderTopRightRadius: '4px !important',
  borderBottomRightRadius: '4px !important',
  fontColor: 'white',
  zIndex: '1001'
}
})
function CharacterMap({
  show,
  transformer
}) {
  const classes = useStyle();
  const text = useContext(TextContext);

  const characters = useMemo(() => {
    return itemize(text, transformer)
  }, [text, transformer])

  if (!show) {
    return null
  }

  return (
    <div className={classes.characterMap}>
     {
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