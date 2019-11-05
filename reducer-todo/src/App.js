import React from 'react';
import logo from './logo.svg';
import './App.css';


// Components

import Todo from './components/Todo';

function App() {
  return (
    <div className="container">
        <div className="paper"> </div>
            <Todo />
    </div>
  );
}

export default App;
