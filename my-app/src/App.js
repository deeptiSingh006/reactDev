import logo from './logo.svg';
import './App.css';
import map_excercise from './map_excercise';
import filter_excercise from './filter_excercise';
import filter_map from './filter_map_exercise';
function App() {
  filter_map();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React By Deepti Singh
        </a>
      </header>
    </div>
  );
}

export default App;
