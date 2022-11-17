import './App.css';
import React from 'react'
import Componentuser from './Component/Componentuser'

export const UserContext = React.createContext() 
export const ChannelContext = React.createContext() 
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'shaurya'}>
      <ChannelContext.Provider value={'Rana'}>
      <Componentuser />
      </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App;
