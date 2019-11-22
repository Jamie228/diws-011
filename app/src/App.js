import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Heading color='#ff00ff'>Welcome</Heading>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and Hello Jamie.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Heading color='#ffcc33'>Goodbye</Heading>
      </header>
    </div>
  );
}

export default App;
