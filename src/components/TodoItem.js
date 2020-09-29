import React from 'react';
class TodoItem extends React.Component {

    constructor(props) {
        super();
        this.state = { title: props.todo.title }
    }

    getStyle = () => {
        return {
            fontSize: this.props.todo.completed ? 'large':'smaller',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    }

    onChange = (e) => {
        this.setState({ title: e.target.value })
    }

    render() {
        const { id } = this.props.todo;
        let todoTitle = <React.Fragment>
            <input value={id} onChange={this.props.toggelComplete.bind(this, id)} type="checkbox" />
            {' '}{this.state.title}
        </React.Fragment>,
            todoAction = <React.Fragment>
                <button onClick={this.props.editTodo.bind(this, id)}>Edit</button>{' '}
                <button onClick={this.props.deleteTodo.bind(this, id)}>Delete</button>
            </React.Fragment>;

        if (this.props.editItem && id === this.props.editItem[0].id) {
            todoTitle = <React.Fragment>
                <input type="text" value={this.state.title} onChange={this.onChange} />
            </React.Fragment>
            todoAction = <React.Fragment>
                <button onClick={this.props.updateTodo.bind(this, this.state.title, id)}>Update</button>{' '}
                <button onClick={this.props.cancelEdit}>Cancel</button>
            </React.Fragment>
        }
        return (
            <div className="todo">
                <div  style={this.getStyle()} className="title">{todoTitle}</div>
                <div className="action">{todoAction} </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default TodoItem;
