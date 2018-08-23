import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  onChangeHandler(event){
    return this.setState({
      searchTerm: event.target.value
    });
  }
  onSubmitHandler(event){
    event.preventDefault();
    const newTodo = {
      title: this.state.searchTerm,
      completed: false
    }
    const todoList = fetch(
      'https://jsonplaceholder.typicode.com/todos',
      { method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );

    console.log(todoList);

  }

  render(){
    return (
      <form className="form-control" onSubmit={this.onSubmitHandler.bind(this)}>
        <input
          className = "form-input"
          type="text"
          name="term"
          value = {this.state.searchTerm}
          onChange = {this.onChangeHandler.bind(this)}
        />
      </form>
    )
  }
}

export default SearchBar;
