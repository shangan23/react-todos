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
      ],
      editItem: null
    };
  }

  toggelComplete = (id) => {
    this.setState({
      editItem: null,
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

  editTodo = (id) => {
    this.setState({ editItem: this.state.todos.filter((todo) => (id === todo.id)) })
  }

  addTodo = (title) => {
    this.setState({ todos: [...this.state.todos, { id: uuidv4(), title, completed: false }] });
  }

  updateTodo = (title, id) => {
    this.setState({
      todos: [...this.state.todos.map((todo) => {
        if (todo.id === id)
          todo.title = title
        return todo
      })],
      editItem: null
    });
  }

  cancelEdit = () => {
    this.setState({ editItem: null })
  }

  render() {
    return (
      <div className="App">
        <Headers addTodo={this.addTodo} />
        <Todos
          cancelEdit={this.cancelEdit}
          editItem={this.state.editItem}
          editTodo={this.editTodo}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
          todos={this.state.todos}
          toggelComplete={this.toggelComplete} />
        <Footer />
      </div>
    );
  }
}

export default App;
