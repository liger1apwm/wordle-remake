import './App.css';
import Board from './Components/Board';
import {createContext, useState} from "react";
import { boardDefault } from './Components/Words';

export const AppContext = createContext();


function App(){
  const [board, setBoard] = useState(boardDefault);

return ( 
  <div className='App'>
    <nav>
      <h1> Wordle </h1>
    </nav>
    <AppContext.Provider value = {{board, setBoard}}>
      <Board />
    </AppContext.Provider>
  </div>
);

}


export default App;
