// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/Comment';
import faker from '@faker-js/faker';

// Create a React component
const App = () => {
    return (
        <div className='ui container comments'>
            <Comment 
                name='Samuel Webb' 
                time='Yesterday at 6:00 am' 
                body='Hi there!!' 
                image={faker.image.transport()} 
            />
            <Comment 
                name='Peter Johnson' 
                time='Yesterday at 5:00 am' 
                body='How are ya!!' 
            />
            <Comment 
                name='Sophie Jackson' 
                time='22/01/2022 at 6:00 am' 
                body='I really really don&apos;t like this at all!!' 
                image={faker.image.avatar()}
            />
        </div>
    );
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />, 
    document.getElementById('root'),
);