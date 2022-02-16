// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = () => {
    const buttonText = { text: 'Click Me Object!!' };
    const buttonStyle = {
        backgroundColor :'blue', 
        color: 'white',
        border: '3px solid green'
    };
    return (
        <div>
            <label className="label" htmlFor="name">
                 Enter name 
            </label> 
            <br/>
            <input id="name" type="text" /> 
            <br/>
            <br/>
            <button style={buttonStyle}> {buttonText.text} </button>
        </div>
    );
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />, 
    document.getElementById('root'),
);