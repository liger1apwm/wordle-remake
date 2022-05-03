
import './App.css';
import Keyboard from './components/Keyboard';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <nav>
        <h3 >WORDLE</h3>
      </nav>
        
        <Grid></Grid>
        
        
        <Keyboard> </Keyboard>
    </div>
  );
}

export default App;
