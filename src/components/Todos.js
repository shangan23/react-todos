import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem
                cancelEdit={this.props.cancelEdit}
                editItem={this.props.editItem}
                todo={todo}
                key={todo.id}
                deleteTodo={this.props.deleteTodo}
                editTodo={this.props.editTodo}
                updateTodo={this.props.updateTodo}
                toggelComplete={this.props.toggelComplete} />
        ));
    }

}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    toggelComplete: PropTypes.func.isRequired,
    editItem:PropTypes.array
}

export default Todos;