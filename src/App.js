import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/todo_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Redux things!</h1>
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
