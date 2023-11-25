// src/App.js
import React from 'react';
import './App.css';

// Additional Component
const Greeting = ({ name }) => (
  <div className="greeting">
    <h2>Welcome to, {name}!</h2>
    <p>This is our React app.</p>
  </div>
);

function App() {
  return (
    <div className="App">
      <h1>Hello, EveryOne! </h1>
      <Greeting name="Abhyaz" />
    </div>
  );
}

export default App;
