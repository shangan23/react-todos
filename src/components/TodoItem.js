import React from 'react';
class TodoItem extends React.Component {

    constructor(props) {
        super();
        this.state = { title: props.todo.title }
    }

    getStyle = () => {
        return {
            background: '#f7f7f7',
            padding: '5px',
            textAlign: 'left',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    onChange = (e) => {
        this.setState({ title: e.target.value })
    }

    render() {
        const { id } = this.props.todo;
        let todoTitle = this.state.title,
            todoAction = <React.Fragment>
                <button onClick={this.props.editTodo.bind(this, id)}>Edit</button>
                <button onClick={this.props.deleteTodo.bind(this, id)}>Delete</button>
            </React.Fragment>;

        if (this.props.editItem && id === this.props.editItem[0].id) {
            todoTitle = <input type="text" value={this.state.title} onChange={this.onChange} />
            todoAction = <React.Fragment>
                <button onClick={this.props.updateTodo.bind(this, this.state.title, id)}>Update</button>
                <button onClick={this.props.cancelEdit}>Cancel</button>
            </React.Fragment>
        }
        return (
            <div style={this.getStyle()}>
                <span>
                    <input value={id} onChange={this.props.toggelComplete.bind(this, id)} type="checkbox" />
                </span>
                <span> {todoTitle}</span>
                <span>{todoAction} </span>
            </div>
        );
    }
}

export default TodoItem;
