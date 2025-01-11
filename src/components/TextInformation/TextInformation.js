import { useReducer } from 'react';

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
    <button onClick={() => {toggleTabs('wordCount')}}>Word Count</button>
    <button onClick={() => {toggleTabs('characterMap')}}>Character Map</button>
  </div>
  )
}

export default TextInformation;