import React from 'react';
import './App.css';

import TodoItem from './todo-component/todo';
import todosData from './todo-data';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todosData,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(id){
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id) {
            todo = {...todo, completed: !todo.completed}
          }
          return todo
        })

        console.log("Clicked ", id)

        return ({
          todos: updatedTodos,
        })
    })
  }

  render(){
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

    return (
      <div className="todo-list">
          {todoItems}
      </div>
    );
  };
}

export default App;
