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
      todos: [],
      editItem: null
    };
  }

  reloadTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.setState({ todos: json });
      });
  }

  componentWillMount() {
    this.reloadTodos();
  }

  toggelComplete = (id) => {
    this.setState({
      editItem: null,
      todos: [...this.state.todos.map((todo) => {
        if (todo.id === id) {
          fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
              completed: !todo.completed,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json());
          todo.completed = !todo.completed
        }
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
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    })
  }

  editTodo = (id) => {
    this.setState({ editItem: this.state.todos.filter((todo) => (id === todo.id)) })
  }

  addTodo = (title) => {
    this.setState({ todos: [...this.state.todos, { id: uuidv4(), title, completed: false }] });
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({ id: uuidv4(), title, completed: false }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
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
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
  }

  cancelEdit = () => {
    this.setState({ editItem: null })
  }

  render() {
    return (
      <div className="App">
        <Headers addTodo={this.addTodo} />
        <div className="container">
          <Todos
            cancelEdit={this.cancelEdit}
            editItem={this.state.editItem}
            editTodo={this.editTodo}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
            todos={this.state.todos}
            toggelComplete={this.toggelComplete} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
