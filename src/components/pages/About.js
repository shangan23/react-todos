import React from 'react'

function About() {
    return (
        <div className="about">
            This project was bootstrapped with <a target="_blank" href="https://github.com/facebook/create-react-app">Create React App</a>.
                <h2> React TodoList </h2>
            <a target="_blank" href="https://shangan23.github.io/react-todos/">Click here for Demo</a>
            <br /><br />
            This project is an experimental and below are the learnings:

                <h3> React </h3>
            <ol>
                <li>Class(stateful since all the react lifecycle methods will be invoked for each component) and Functional(stateless & effective performance) components</li>
                <li>Passing props to React functional component - in functional component pass `props` as a parameter and use it.</li>
                <li>Calling method of parent component using props. </li>
                <li>Passing parameter to parent component using bind</li>
                <li>Router(BrowserRouter) - wrapper, Link - to, Route - path, render, component</li>
            </ol>
            <h3> Javascript </h3>
            <ol>
                <li>Arrow, Normal function - `this.props` context within class component cannot be accessesed without binding `this` for custom functions. But arrow function can access `this.props` without binding.</li>
                <li> Higher order array methods - map & filters</li>
                <li> Spread operator [ ...] for copying the exsisting array, modifiying, adding...etc</li>
            </ol>
            <h3> CSS </h3>
            <ol>
                <li>Fluid Design</li>
            </ol>
        </div>
    )
}

export default About;
