import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Footer from './components/layout/Footer';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      testProps: {},
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
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({ id: uuidv4(), title, completed: false }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => this.setState({ todos: [...this.state.todos, json] }))
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

    let todosProp = {
      cancelEdit: this.cancelEdit,
      editItem: this.state.editItem,
      editTodo: this.editTodo,
      updateTodo: this.updateTodo,
      deleteTodo: this.deleteTodo,
      todos: this.state.todos,
      toggelComplete: this.toggelComplete,
    }

    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/react-todos/" render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <div className="container">
                  <Todos
                    testProps={this.state.testProps}
                    {...todosProp}
                  />
                </div>
              </React.Fragment>
            )} />
            <Route path="/react-todos/about" component={About} />
          </Switch>
          <Footer content="Sample copyright content goes here." />
        </Router>
      </div>
    );
  }
}

export default App;
