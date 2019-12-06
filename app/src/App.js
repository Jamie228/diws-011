import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Openday from './components/Openday';
import NavBar from './components/NavBar';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Heading>Hey there! What's your name?</Heading>
      <Openday />
    </div>
  );
}

export default App;
