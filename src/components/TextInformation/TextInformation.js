import { useReducer } from 'react';
import CharacterCount from '../CharacterCount/CharacterCount';
import WordCount from '../WordCount/WordCount';

const reducer = (state, action) => {
  return {
    ...state,
    [action]: !state[action]
  }
}
function TextInformation() {
const [ tabs, toggleTabs ] = useReducer(reducer, {
  characterCount: true,
  wordCount: true,
  characterMap: true
})

return (
  <div className="text-information-wrapper">
    <button onClick={() => {toggleTabs('characterCount')}}>Character Count</button>
    <CharacterCount
      show={tabs.characterCount}
    />
    <button onClick={() => {toggleTabs('wordCount')}}>Word Count</button>
    <WordCount
      show={tabs.wordCount}
    ></WordCount>
    <button onClick={() => {toggleTabs('characterMap')}}>Character Map</button>
  </div>
  )
}

export default TextInformation;