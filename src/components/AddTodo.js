import React from 'react';
class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = { title: '' }
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.title) {
            alert('Enter todo item');
            return;
        }

        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    onChange = (e) => {
        this.setState({ title: e.target.value })
    }

    render() {
        return (
            <div className="todoform">
                <form onSubmit={this.onSubmit}>
                    <input placeholder="Add todo here..." type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    <input type="submit" value="Add Todo" />
                </form>
            </div>
        );
    }
}
export default AddTodo;