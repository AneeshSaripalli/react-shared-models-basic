import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DummyType } from '../../types/dist';

/**
 * using types shared repository outside of src/ directory
 * CRA doesn't get made at me
 */
const dt: DummyType = {
  x: 10,
  y: 10
};

function App() {
  // logging object in console
  console.log(dt);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
