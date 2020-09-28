import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {

    render() {
        const todoItem = this.props.todos.map((todo) => (
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
        return <div className="todoContainer">{todoItem}</div>;
    }

}

export default Todos;