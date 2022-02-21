import React from 'react';
import faker from '@faker-js/faker';

const Comment = ({name, time, body, image}) => {
    return(
        <div className='comment'>
            <a href='/' className='avatar'>
                <img alt="avatar" src={image ? image : faker.image.food()}/>
            </a>
            <div className="content">
                <a href='/' className='author'>
                    {name}
                </a>
                <div className='metadata'>
                    <span className='date'>{time}</span>
                </div>
                <div className='text'>
                    {body}
                </div>
            </div>
        </div>
    );
};

export default Comment;