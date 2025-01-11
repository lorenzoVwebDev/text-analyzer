import { useReducer } from 'react';
import CharacterCount from '../CharacterCount/CharacterCount';
import WordCount from '../WordCount/WordCount';
import CharacterMap from '../CharacterMap/CharacterMap';

const reducer = (state, action) => {
  return {
    ...state,
    [action]: !state[action]
  }
}
function TextInformation({
  transformer
}) {
const [ tabs, toggleTabs ] = useReducer(reducer, {
  characterCount: false,
  wordCount: false,
  characterMap: false
})

return (
  <div className="text-information-wrapper">
    <div className="text-button-wrapper">
      <div className="character-count-wrapper">
        <button onClick={() => {toggleTabs('characterCount')}}>Character Count</button>
        <CharacterCount
          show={tabs.characterCount}
        />
      </div>
      <div className="word-count-wrapper">
        <button onClick={() => {toggleTabs('wordCount')}}>Word Count</button>
        <WordCount
          show={tabs.wordCount}
        />
      </div>
      <div className="character-map-wrapper">
        <button onClick={() => {toggleTabs('characterMap')}}>Character Map</button>
        <CharacterMap
          show={tabs.characterMap}
          transformer={transformer}
        />
      </div>
    </div>
  </div>
  )
}

export default TextInformation;