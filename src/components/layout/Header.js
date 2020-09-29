import React from 'react';
import AddTodo from '../AddTodo';
import GoogleSSO from '../GoogleSSO';

function Header(props) {
    return (
        <React.Fragment>
            <div className="header">
                <span className="title">Simple Todo with React</span>
                <span className="action">
                    Hey there, Welcome back!
                    {/*<a href="#">Logout</a>*/}
                </span>
                <div className="clear"></div>
            </div>
            {/*<GoogleSSO />*/}
            <AddTodo addTodo={props.addTodo} />
        </React.Fragment>
    );
}

export default Header;