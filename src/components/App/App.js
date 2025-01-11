import { createContext, useState } from 'react';
import { GitRepositoryHeader } from '../common';

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
      </div>
      </TextContext.Provider>
  );
}

export default App;
