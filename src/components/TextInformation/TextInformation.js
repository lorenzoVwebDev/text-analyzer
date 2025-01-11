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
      <button onClick={() => {toggleTabs('characterCount')}}>Character Count</button>

      <button onClick={() => {toggleTabs('wordCount')}}>Word Count</button>

      <button onClick={() => {toggleTabs('characterMap')}}>Character Map</button>
    </div>
    <div className="character-information wrapper">
      <CharacterCount
        show={tabs.characterCount}
      />
      <WordCount
        show={tabs.wordCount}
      />
      <CharacterMap
        show={tabs.characterMap}
        transformer={transformer}
      />
    </div>
  </div>
  )
}

export default TextInformation;