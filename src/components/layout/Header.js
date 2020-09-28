import React from 'react';
import AddTodo from '../AddTodo';

function Header(props) {
    return (
        <React.Fragment>
            <h1>Hey there! Welcome to React Todo App</h1>
            <AddTodo addTodo={props.addTodo}/>
        </React.Fragment>
    );
}

export default Header;