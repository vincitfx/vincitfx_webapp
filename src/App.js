import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('https://localhost:5001/weatherforecast')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Anish save to reload.
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
