import './App.css';
import React from 'react'
import Componentuser from './Component/Componentuser'

const Usercontext = React.createContext() 
function App() {
  return (
    <div className="App">
      <Usercontext.Provider value={'shaurya'}>
      <Componentuser />
      </Usercontext.Provider>
    </div>
  )
}

export default App;
