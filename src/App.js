import logo from './logo.svg';
import './App.css';
import { useMyState } from './useMyState';
import { useUnsyncedState } from './useUnsyncedState';

function Foo() {
  const [myState, setMyState] = useMyState();
  const [unsyncedState, setUnsyncedState] = useUnsyncedState();
  return (
    <div>
      myState: {myState}
      <button onClick={() => setMyState(myState + 1)}>myState +1</button>
      unsyncedState: {unsyncedState}
      <button onClick={() => setUnsyncedState(unsyncedState + 1)}>unsyncedState +1</button>
    </div>
  )
}

function Bar() {
  const [myState, setMyState] = useMyState();
  const [unsyncedState, setUnsyncedState] = useUnsyncedState();
  return (
    <div>
      myState: {myState}
      <button onClick={() => setMyState(myState + 10)}>myState +10</button>
      unsyncedState: {unsyncedState}
      <button onClick={() => setUnsyncedState(unsyncedState + 10)}>unsyncedState +10</button>
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
