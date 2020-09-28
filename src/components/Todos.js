import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {

    render() {
        return this.props.todos.map((todo)=>(
            <TodoItem todo={todo} key={todo.id} deleteTodo={this.props.deleteTodo} toggelComplete={this.props.toggelComplete}/>
        ));
    }

}

export default Todos;