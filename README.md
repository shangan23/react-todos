This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Follow this page to [set up react project without "Create React App"](https://github.com/web-slate/beginner-react-app-guide/blob/master/simple-banking-app/docs/index.md)

## React TodoList 
[Click here for Demo](https://shangan23.github.io/react-todos/)

This project is an experimental and below are the learnings:

### React

- Class(stateful since all the react lifecycle methods will be invoked for each component) and Functional(stateless & effective performance) components
- Passing props to React functional component - in functional component pass `props` as a parameter and use it.
- Calling method of parent component using props. 
- `Prop Drilling` - Passing parameter to parent component using bind(`this`,`<parameters>`)
- `Router` (react-router-dom) - BrowserRouter, Route(path, component, render), Link(to)
- `PropTypes` (prop-types) - Adding validation to the component props
- `Short Circuiting` - react jsx conditional logic

### Javascript 

- Arrow, Normal function - `this.props` context within class component cannot be accessesed without binding `this` for custom functions. But arrow function can access `this.props` without binding.
- Higher order array methods - map & filters
- Spread operator [ ...] for copying the exsisting array, modifiying, adding...etc
- Array destructuring (eg:- const {id,title} = book[])

### CSS
- Fluid design 