import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import Number from './components/Number';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Number path="/home/:id" />
        <Hello path="/:word" />
        <Hello path="/:word/:textColor/:backGroundColor" />
      </Router>
  
    </div>
  );
}

export default App;
