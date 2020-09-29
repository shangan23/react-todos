import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <React.Fragment>
            <div className="header">
                <span className="title">
                    Simple Todo with React
                    <span className="link">
                        <Link className="a" to="/react-todos/">Home</Link>
                        <Link className="a" to="/react-todos/about">About</Link>
                    </span>
                </span>
                <span className="action">
                    Hey there, Welcome back!
                </span>
                <div className="clear"></div>
            </div>
            {/*<GoogleSSO />*/}
        </React.Fragment>
    );
}

export default Header;