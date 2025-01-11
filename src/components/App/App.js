import { createContext, useState } from 'react';
import { GitRepositoryHeader } from '../common';
import TextInformation from '../TextInformation/TextInformation'

export const TextContext = createContext();
function App() {
  const [ text, setText ] = useState('');

  return (
    <TextContext.Provider
      value={text}
    >
      <GitRepositoryHeader/>
      <div className="text-analyzer-wrapper">
        <label htmlFor=""></label>
        <textarea 
          id="analyzer" 
          name="analyzer"
          rows="10"
          cols="100"
          onChange={e => {setText(e.target.value)}}
        >
        </textarea>
        <TextInformation/>
      </div>
      </TextContext.Provider>
  );
}

export default App;
