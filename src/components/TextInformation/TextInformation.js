import { useReducer } from 'react';
import { createUseStyles } from 'react-jss';
import CharacterCount from '../CharacterCount/CharacterCount';
import WordCount from '../WordCount/WordCount';
import CharacterMap from '../CharacterMap/CharacterMap';

const useStyles = createUseStyles({
  imageWrapper: {
    position: 'absolute',
    bottom: 'calc(0.7vw + 0.7vh)',
    width: '30%',
    height: '60%',
    zIndex: '1000',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top'
    }
  },
  textWrapper: {
    display: 'flex',
    flex: '0.5',
    textWrap: 'wrap',
    fontSize: 'calc(1vw + 1vh)',
    alignItems: 'center'
  }
})

const reducer = (state, action) => {
  return {
    ...state,
    [action]: !state[action]
  }
}
function TextInformation({
  transformer
}) {
const classes = useStyles();
const [ tabs, toggleTabs ] = useReducer(reducer, {
  characterCount: false,
  wordCount: false,
  characterMap: false
})


return (
  <div className="text-information-wrapper">
    <div className="text-button-wrapper">
      <div className="character-count-wrapper">
        <button onClick={() => {toggleTabs('characterCount')}}>Character Count        <div className="button-ballon-character">
          Click here to show the Characters'number
        </div></button>
        <CharacterCount
          show={tabs.characterCount}
        />
      </div>
      <div className="word-count-wrapper">
        <button onClick={() => {toggleTabs('wordCount')}}>Word Count        <div className="button-ballon-word">
          Click here to show the Words'number
        </div></button>
        <WordCount
          show={tabs.wordCount}
        />
      </div>
      <div className="character-map-wrapper">
        <button onClick={() => {toggleTabs('characterMap')}}>Character Map<div className="button-ballon-map">
          Click here to show the Characters'map
        </div></button>
        <CharacterMap
          show={tabs.characterMap}
          transformer={transformer}
        />
      </div>
    </div>
    <div className={classes.textWrapper}>
      <h1>Count Letters, Words or Map Characters!</h1>
    </div>
    <div className={classes.imageWrapper}>
    <img src="https://www.scribbr.com/wp-content/uploads/2024/05/ai-proofreader-improve-your-entire-paper-within-5-minutes.webp" alt="" />
    </div>
  </div>
  )
}

export default TextInformation;