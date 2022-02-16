// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';

// Create a React component
const App = () => {
    return (
        <div className='ui container comments'>
            <div className='comment'>
                <a href='/' className='avatar'>
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href='/' className='author'>
                        Sam
                    </a>
                    <div className='metadata'>
                        <span className='date'>Today at 8:00 pm</span>
                    </div>
                    <div className='text'>
                        Nice Blog Post!
                    </div>
                </div>
            </div>

            <div className='comment'>
                <a href='/' className='avatar'>
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href='/' className='author'>
                        George
                    </a>
                    <div className='metadata'>
                        <span className='date'>Yesterday at 12:00 pm</span>
                    </div>
                    <div className='text'>
                        Very insighful!
                        How do you do this??
                    </div>
                </div>
            </div>

            <div className='comment'>
                <a href='/' className='avatar'>
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href='/' className='author'>
                        Sophie
                    </a>
                    <div className='metadata'>
                        <span className='date'>29/01/2022 at 11:30 pm</span>
                    </div>
                    <div className='text'>
                        I don't like it!
                    </div>
                </div>
            </div>
        </div>
    );
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />, 
    document.getElementById('root'),
);