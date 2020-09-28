import React from 'react';
import AddTodo from '../AddTodo';

function Header(props) {
    return (
        <React.Fragment>
            <div><h1>Simple Todo with React</h1></div>
            <div style={{display: 'flex'}}>
            <div>Hey there! Welcome back.</div>
            <div><AddTodo addTodo={props.addTodo} /></div>
            </div>
        </React.Fragment>
    );
}

export default Header;