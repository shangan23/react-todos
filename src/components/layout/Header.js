import React from 'react';
import AddTodo from '../AddTodo';

function Header(props) {
    return (
        <React.Fragment>
            <div className="header">
                <span className="title">Simple Todo with React</span>
                <span className="action">
                    Welcome back Shankar!
                    <a href="#">Logout</a>
                </span>
                <div className="clear"></div>
            </div>
            <AddTodo addTodo={props.addTodo} />
        </React.Fragment>
    );
}

export default Header;