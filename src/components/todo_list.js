import React, { Component } from 'react';

import TodoItem from './todo_item';
import SearchBar from './search_bar';


class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = {
      todoList: []
    }
  }

  componentDidMount(){
    const todoList = fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => this.setState({ todoList: data }));
  }

  render(){
    const todoItems = this.state.todoList.map((item, i) => {
      return (
        <TodoItem key={i} item={item} i={i}/>
      );
    })

    return (
      <div>
        <SearchBar />
        <h3>To Do List</h3>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}

export default TodoList;
