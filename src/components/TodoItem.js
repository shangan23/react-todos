import React from 'react';

class TodoItem extends React.Component {

    render() {
        const { id, title, completed } = this.props.todo;
         return (
            <p>
                <input value={id} onChange={this.props.toggelComplete.bind(this, id)} type="checkbox" /> {' '} {title} {' | '} completed:{completed ? 'yes' : 'no'}
                {' '} <button onClick={this.props.deleteTodo.bind(this, id)}> Delete </button>
            </p>
        );
    }
}

export default TodoItem;
