import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import NameForm from './components/NameForm';
import NavBar from './components/NavBar';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Heading>Hey there! What's your name?</Heading>
      <NameForm />
    </div>
  );
}

export default App;
