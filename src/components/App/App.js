import { createContext, useState, useCallback } from 'react';
import { GitRepositoryHeader } from '../common';
import TextInformation from '../TextInformation/TextInformation'

export const TextContext = createContext();
function App() {
  const [ text, setText ] = useState('');
  const transformer = useCallback(item => item.toLowerCase(), []);

  return (
    <TextContext.Provider
      value={text}
    >
      <GitRepositoryHeader/>
      <div className="text-analyzer-wrapper">
        <label htmlFor="analyzer"></label>
        <textarea 
          id="analyzer" 
          name="analyzer"
          rows="10"
          cols="100"
          onChange={e => {setText(e.target.value)}}
          placeholder="insert your text here"
        >
        </textarea>
        <TextInformation
          transformer={transformer}
        />
      </div>
      </TextContext.Provider>
  );
}

export default App;
