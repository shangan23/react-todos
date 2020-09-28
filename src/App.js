import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Headers from './components/layout/Header';
import Footer from './components/layout/Footer';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: uuidv4(), title: 'Morning Gym at 5am', completed: false },
        { id: uuidv4(), title: 'Morning Breakfast 8am', completed: false },
        { id: uuidv4(), title: 'Snacks at 11am', completed: false },
        { id: uuidv4(), title: 'Lunch at 1pm', completed: false }
      ]
    };
  }

  toggelComplete = (id) => {
    this.setState({
      todos: [...this.state.todos.map((todo) => {
        if (todo.id === id)
          todo.completed = !todo.completed
        return todo;
      })]
    });
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => (
        id !== todo.id))
      ]
    });
  }

  addTodo = (title) => {
    this.setState({ todos: [...this.state.todos, { id: uuidv4(), title, completed: false }] });
  }

  render() {
    return (
      <div className="App">
        <Headers addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} toggelComplete={this.toggelComplete} />
        <Footer />
      </div>
    );
  }
}

export default App;
