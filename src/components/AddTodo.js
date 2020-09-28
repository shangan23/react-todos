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
            <form onSubmit={this.onSubmit}>
                <p>
                    <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    <input type="submit" value="Add Todo" />
                </p>
            </form>
        );
    }
}
export default AddTodo;