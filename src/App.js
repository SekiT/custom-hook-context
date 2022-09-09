import logo from './logo.svg';
import './App.css';
import { useMyState, updateState } from './useMyState';

function Foo() {
  const state = useMyState();
  return (
    <div>
      State is currently: {state}
      <button onClick={() => updateState(state + 1)}>+1</button>
    </div>
  )
}

function Bar() {
  const state = useMyState();
  return (
    <div>
      State is currently: {state}
      <button onClick={() => updateState(state + 10)}>+10</button>
    </div>
  )
}

function App() {
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
          Learn React
        </a>
        <Foo />
        <Bar />
      </header>
    </div>
  );
}

export default App;
