// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/Comment';
import ApprovalCard from './components/ApprovalCard';
import faker from '@faker-js/faker';

// Create a React component
const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <div>
                    <h3>Warning!!</h3>
                    Are you sure you want this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <Comment 
                    name='Samuel Webb' 
                    time='Yesterday at 6:00 am' 
                    body='Hi there!!' 
                    image={faker.image.transport()} 
                />
            </ApprovalCard>  
            <ApprovalCard>
                <Comment 
                    name='Peter Johnson' 
                    time='Yesterday at 5:00 am' 
                    body='How are ya!!' 
                />
            </ApprovalCard>
            <ApprovalCard>
                <Comment 
                    name='Sophie Jackson' 
                    time='22/01/2022 at 6:00 am' 
                    body='I really really don&apos;t like this at all!!' 
                    image={faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    );
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />, 
    document.getElementById('root'),
);